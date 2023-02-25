import React from "react";
import classes from "./NavbarSearch.module.css";

export default function NavbarSearch() {
  return (
    <input
      className={classes["navbar-search"]}
      type="text"
      placeholder="Search..."
    />
  );
}
