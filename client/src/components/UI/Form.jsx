import React from "react";
import classes from "./Form.module.css";

export default function Form(props) {
  const className = `${classes.form} ${
    !props.className ? "" : props.className
  }`;
  return <form className={className}>{props.children}</form>;
}
