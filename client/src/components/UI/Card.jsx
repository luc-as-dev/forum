import React from "react";

import classes from "./Card.module.css";

export default function Card(props) {
  const className = `${classes.card} ${
    !props.className ? "" : props.className
  }`;
  return <div className={className}>{props.children}</div>;
}
