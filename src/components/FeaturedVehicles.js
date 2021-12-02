import React, { Component } from "react";
import { VehicleContext } from "../context";
import Loading from "./Loading";
import Vehicle from "./Vehicle";
import Title from "./Title";

export default class FeaturedVehicles extends Component {
  static contextType = VehicleContext;
  render() {
    let { loading, vehicles } = this.context;
    vehicles = vehicles
      .filter((vehicle) => vehicle.featured === true)
      .map((vehicle) => {
        return <Vehicle key={vehicle.id} vehicle={vehicle} />;
      });

    return (
      <section className="featured-vehicles">
        <Title title="featured vehicles" />
        <div className="featured-vehicles-center">
          {loading ? <Loading /> : vehicles}
        </div>
      </section>
    );
  }
}
