import React from "react";
import classes from "./Logo.module.css";
import logo_large from "../../assets/logo-large.png";
import logo_small from "../../assets/logo-small.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className={classes["logo-container"]}>
      <Link className={classes["logo-container"]} to="/">
        <img className={classes["logo-large"]} src={logo_large}></img>
        <img className={classes["logo-small"]} src={logo_small}></img>
      </Link>
    </div>
  );
}
