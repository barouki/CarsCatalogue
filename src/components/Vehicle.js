import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

const Vehicle = memo(({ vehicle }) => {
  const { name, slug, images, price } = vehicle;
  return (
    <article className="vehicle">
      <div className="img-container">
        <img src={images[0]} alt="single vehicle" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per day</p>
        </div>
        <Link to={`/vehicles/${slug}`} className="btn-primary vehicle-link">
          features
        </Link>
      </div>
      <p className="vehicle-info">{name}</p>
    </article>
  );
});

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Vehicle;
