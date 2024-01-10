import React from "react";
import "./Bar.css";
import PropTypes from "prop-types";

const Bar = (props) => {
  const { color, width, name } = props;
  return (
    <>
      <div
        className="bar"
        style={{ backgroundColor: color, width: `${width}px` }}
      >
        {name}
      </div>
    </>
  );
};
Bar.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default Bar;
