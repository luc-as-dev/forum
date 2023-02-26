import React from "react";
import classes from "./NavbarMenu.module.css";

export default function NavbarMenu() {
  return (
    <a class={classes["navbar-menu-icon"]}>
      <i class="fa fa-bars"></i>
    </a>
  );
}
