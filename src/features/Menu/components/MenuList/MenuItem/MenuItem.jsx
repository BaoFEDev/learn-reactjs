import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import classnames from "classnames";

const MenuItem = (props) => {
  let { name, imgUrl, status, menu, idx, onMenuClick } = props;
  let menuItem = classnames({
    "menu-item": true,
    completed: status === "completed",
  });
  const handleMenuList = () => {
    if (!onMenuClick) return;

    onMenuClick(menu, idx);
  };
  return (
    <>
      <div className={menuItem} onClick={() => handleMenuList(menu, idx)}>
        <div className="thumbnail">
          <img src={imgUrl} alt={name} />
        </div>
        <p>{name}</p>
        <p>Status:{status}</p>
      </div>
    </>
  );
};
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  onMenuClick: PropTypes.func,
};
MenuItem.defaultProps = {
  imgUrl: "",
  onMenuClick: null,
};
export default MenuItem;
