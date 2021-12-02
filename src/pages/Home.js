import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedVehicles from "../components/FeaturedVehicles";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious vehicles"
          subtitle="lux vehicles starting at $200"
        >
          <Link to="/vehicles" className="btn-primary">
            our vehicles
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedVehicles />
    </>
  );
}
