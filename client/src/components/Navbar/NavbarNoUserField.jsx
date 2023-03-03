import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavbarNoUserField.module.css";
import ButtonLink from "../UI/ButtonLink";

export default function NavbarNoUserField() {
  return (
    <div className={classes["navbar-no-user-container"]}>
      <ButtonLink
        className={classes["navbar-no-user-link"]}
        to="/login"
        outlined={true}
      >
        Log in
      </ButtonLink>
      <ButtonLink className={classes["navbar-no-user-link"]} to="/signup">
        Sign up
      </ButtonLink>
    </div>
  );
}
