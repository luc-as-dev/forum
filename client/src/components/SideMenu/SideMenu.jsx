import React from "react";
import classes from "./SideMenu.module.css";
import SideMenuCollection from "./SideMenuCollection";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu(props) {
  const className = `${classes["side-menu-container"]} ${
    !props.className ? "" : props.className
  }`;
  return (
    <div className={className}>
      <SideMenuItem to="/">Home</SideMenuItem>
      <SideMenuCollection label="PUBLIC">
        <SideMenuItem to="/users">Users</SideMenuItem>
      </SideMenuCollection>
    </div>
  );
}
