import React from "react";
import PropTypes from 'prop-types';

export const Product = ({
  title, 
  price, 
  description,
}) => (
  <section className="product_container">
<div className = "product">
    <h2 className="product_title">
      {title}
    </h2>
  
    <div className="product_price">
      {price}
    </div>
 
    <p className="product_description">
      {description}
    </p>
  </div>
  </section>
  
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
};

Product.defaultProps = {
  title: "No title yet",
  price: 0, 
  description: "No description",
};
