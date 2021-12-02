import React, { Component } from "react";
import defaultBcg from "../images/rs3-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { VehicleContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = VehicleContext;

  render() {
    const { getVehicle } = this.context;
    const vehicle = getVehicle(this.state.slug);
    if (!vehicle) {
      return (
        <div className="error">
          <h3>no such vehicle could be found...</h3>
          <Link to="/vehicles" className="btn-primary">
            Back to vehicles
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      hp,
      price,
      extras,
      automatic,
      gas,
      images,
    } = vehicle;
    const [main, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={main || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/vehicles" className="btn-primary">
              Back to vehicles
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-vehicle">
          <div className="single-vehicle-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-vehicle-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price} </h6>
              <h6>Horsepower : {hp}hp</h6>
              <h6>
                Max places :
                {capacity > 1 ? `${capacity} persons` : `${capacity} person`}
              </h6>
              <h6>fuel : {gas ? "gaz" : "diesel"}</h6>
              <h6>transmission : {automatic ? "automatic" : "manual"}</h6>
            </article>
          </div>
        </section>
        <section className="vehicle-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
