import React from "react";
import classes from "./ErrorMessage.module.css";

export default function ErrorMessage({ children, className }) {
  const mergedClassName = `${classes["error-message"]} ${
    !className ? "" : className
  }`;
  return <p className={mergedClassName}>{children}</p>;
}
