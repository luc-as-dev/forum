import React from "react";
import classes from "./Page.module.css";

export default function Page(props) {
  const className = `${classes.page} ${
    !props.className ? "" : props.className
  }`;
  return <div className={className}>{props.children}</div>;
}
