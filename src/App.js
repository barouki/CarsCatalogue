import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import SingleVehicle from "./pages/SingleVehicle";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/vehicles/:slug" component={SingleVehicle} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
console.log(1);
export default App;
