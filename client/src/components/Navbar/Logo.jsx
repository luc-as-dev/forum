import React from "react";
import classes from "./Logo.module.css";
import logo from "../../assets/logo-large.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className={classes["logo-container"]}>
      <Link to="/">
        <img src={logo}></img>
      </Link>
    </div>
  );
}
