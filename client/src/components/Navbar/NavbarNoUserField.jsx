import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavbarNoUserField.module.css";

export default function NavbarNoUserField() {
  return (
    <div className={classes["navbar-no-user-container"]}>
      <Link className={classes["navbar-no-user-link"]}>Log in</Link>
      <Link className={classes["navbar-no-user-link"]}>Sign up</Link>
    </div>
  );
}
