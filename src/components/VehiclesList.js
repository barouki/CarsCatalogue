import React from "react";
import Vehicle from "./Vehicle";

const VehicleList = ({ vehicles }) => {
  if (vehicles.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no vehicle matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="vehicleslist">
      <div className="vehicleslist-center">
        {vehicles.map((item) => {
          return <Vehicle key={item.id} vehicle={item} />;
        })}
      </div>
    </section>
  );
};

export default VehicleList;
