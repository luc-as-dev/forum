import React from "react";
import classes from "./Logo.module.css";
import logo from "../../assets/logo-large.png";

export default function Logo() {
  return (
    <div className={classes["logo-container"]}>
      <img src={logo}></img>
    </div>
  );
}
