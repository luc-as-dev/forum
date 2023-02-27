import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideMenuItem.module.css";

export default function SideMenuItem(props) {
  const className = `${classes["menu-item"]} ${
    !props.className ? "" : props.className
  }`;

  const activeClassName = `${className} ${classes["menu-item-active"]} ${
    !props.activeClassName ? "" : props.activeClassName
  }`;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClassName : className)}
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
}
