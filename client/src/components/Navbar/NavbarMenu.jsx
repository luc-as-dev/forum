import React from "react";
import classes from "./NavbarMenu.module.css";

export default function NavbarMenu() {
  return (
    <a className={classes["navbar-menu-icon"]}>
      <i className="fa fa-bars"></i>
    </a>
  );
}
