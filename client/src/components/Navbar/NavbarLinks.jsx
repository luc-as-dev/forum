import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavbarLinks.module.css";

export default function NavbarLinks() {
  return (
    <div className={classes["navbar-links-container"]}>
      <Link className={classes["navbar-links-button"]}>Questions</Link>
    </div>
  );
}
