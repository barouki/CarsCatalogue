import React from "react";
import { withVehicleConsumer } from "../context";
import Loading from "./Loading";
import VehiclesFilter from "./VehiclesFilter";
import VehiclesList from "./VehiclesList";

function VehicleContainer({ context }) {
  const { loading, sortedVehicles, vehicles } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <VehiclesFilter vehicles={vehicles} />
      <VehiclesList vehicles={sortedVehicles} />
    </>
  );
}

export default withVehicleConsumer(VehicleContainer);
