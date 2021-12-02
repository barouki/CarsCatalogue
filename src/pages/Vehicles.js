import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import VehicleContainer from "../components/VehicleContainer";

const Vehicles = () => {
  return (
    <>
      <Hero hero="vehiclesHero">
        <Banner title="Our vehicles">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <VehicleContainer />
    </>
  );
};

export default Vehicles;
