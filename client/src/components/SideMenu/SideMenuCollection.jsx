import React from "react";
import classes from "./SideMenuCollection.module.css";

export default function SideMenuCollection(props) {
  const className = `${classes["side-menu-container"]} ${
    !props.className ? "" : props.className
  }`;
  return (
    <div className={props.className}>
      <div className={classes["collection-label"]}>{props.label}</div>
      <div className={classes["collection-items"]}>{props.children}</div>
    </div>
  );
}
