import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";

const VehicleContext = React.createContext();

export default class VehicleProvider extends Component {
  state = {
    vehicles: [],
    sortedVehicles: [],
    featuredVehicles: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minHp: 0,
    maxHp: 0,
    automatic: false,
    gas: false,
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "pfe",
        order: "fields.price",
      });
      let vehicles = this.formatData(response.items);
      let featuredVehicles = vehicles.filter(
        (vehicle) => vehicle.featured === true
      );
      let maxPrice = Math.max(...vehicles.map((item) => item.price));
      let maxHp = Math.max(...vehicles.map((item) => item.hp));
      this.setState({
        vehicles,
        featuredVehicles,
        sortedVehicles: vehicles,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
        maxHp,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // this.getData();
    let vehicles = this.formatData(items);
    let featuredVehicles = vehicles.filter(
      (vehicle) => vehicle.featured === true
    );
    //
    let maxPrice = Math.max(...vehicles.map((item) => item.price));
    let maxHp = Math.max(...vehicles.map((item) => item.hp));
    this.setState({
      vehicles,
      featuredVehicles,
      sortedVehicles: vehicles,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxHp,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let vehicle = { ...item.fields, images, id };
      return vehicle;
    });
    return tempItems;
  }
  getVehicle = (slug) => {
    let tempVehicles = [...this.state.vehicles];
    const vehicle = tempVehicles.find((vehicle) => vehicle.slug === slug);
    return vehicle;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterVehicles
    );
  };
  filterVehicles = () => {
    let {
      vehicles,
      type,
      capacity,
      price,
      minHp,
      maxHp,
      automatic,
      gas,
    } = this.state;

    let tempVehicles = [...vehicles];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempVehicles = tempVehicles.filter((vehicle) => vehicle.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempVehicles = tempVehicles.filter(
        (vehicle) => vehicle.capacity >= capacity
      );
    }
    // filter by price
    tempVehicles = tempVehicles.filter((vehicle) => vehicle.price <= price);

    tempVehicles = tempVehicles.filter(
      (vehicle) => vehicle.hp >= minHp && vehicle.hp <= maxHp
    );
    if (automatic) {
      tempVehicles = tempVehicles.filter(
        (vehicle) => vehicle.automatic === true
      );
    }
    //filter by pets
    if (gas) {
      tempVehicles = tempVehicles.filter((vehicle) => vehicle.gas === true);
    }
    this.setState({
      sortedVehicles: tempVehicles,
    });
  };
  render() {
    return (
      <VehicleContext.Provider
        value={{
          ...this.state,
          getVehicle: this.getVehicle,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </VehicleContext.Provider>
    );
  }
}
const VehicleConsumer = VehicleContext.Consumer;

export { VehicleProvider, VehicleConsumer, VehicleContext };

export function withVehicleConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <VehicleConsumer>
        {(value) => <Component {...props} context={value} />}
      </VehicleConsumer>
    );
  };
}
