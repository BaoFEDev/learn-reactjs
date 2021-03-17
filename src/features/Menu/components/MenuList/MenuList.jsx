import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem/MenuItem";
import "./style.css";

const MenuList = (props) => {
  let { menuList, onMenuClick } = props;

  return (
    <>
      <div className="menu-list">
        {menuList.map((menu, idx) => (
          <MenuItem
            key={menu.id}
            name={menu.name}
            imgUrl={menu.imgUrl}
            status={menu.status}
            menu={menu}
            idx={idx}
            onMenuClick={onMenuClick}
          />
        ))}
      </div>
    </>
  );
};
MenuList.propTypes = {
  menuList: PropTypes.array,
  onMenuClick: PropTypes.func,
};
MenuList.defaultProps = {
  menuList: [],
  onMenuClick: null,
};
export default MenuList;
