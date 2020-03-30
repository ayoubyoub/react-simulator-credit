import React from "react";
import PropTypes from "prop-types";

const Item = ({ func, text }) => {
  return (
    <span>
      {func} <small>{text}</small>
    </span>
  );
};

Item.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided"
};

Item.propTypes = {
  func: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
