import React from "react";
import { useContext } from "react";
import { VehicleContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const VehiclesFilter = ({ vehicles }) => {
  // react hooks
  const context = useContext(VehicleContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minHp,
    maxHp,
    automatic,
    gas,
  } = context;

  // get unique types
  let types = getUnique(vehicles, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(vehicles, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search vehicles" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">vehicles type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Places</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">vehicle price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">vehicle hp </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minHp"
              value={minHp}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxHp"
              value={maxHp}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="automatic"
              id="automatic"
              checked={automatic}
              onChange={handleChange}
            />
            <label htmlFor="automatic">automatic</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="gas"
              checked={gas}
              onChange={handleChange}
            />
            <label htmlFor="gas">gas</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default VehiclesFilter;
