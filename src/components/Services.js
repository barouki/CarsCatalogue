import React, { Component } from "react";
import Title from "./Title";
import { FaOilCan, FaParking, FaRss, FaWheelchair } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaOilCan />,
        title: "best service",
        info: "Complete guaranteed service for all of our cars ",
      },
      {
        icon: <FaParking />,
        title: "auto-parking",
        info: "all of our cars come with auto-parking system",
      },
      {
        icon: <FaRss />,
        title: "location app",
        info: "an app to comunicate with car and know it position ",
      },
      {
        icon: <FaWheelchair />,
        title: "wheel chair",
        info: "we have cars specifics for people with wheel chair",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
