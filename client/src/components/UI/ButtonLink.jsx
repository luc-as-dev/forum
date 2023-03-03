import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

export default function ButtonLink({ to, children, className, outlined }) {
  const mergedClassName = `${
    classes[!outlined ? "button" : "button-outlined"]
  } ${!className ? "" : className}`;
  return (
    <Link to={to} className={mergedClassName}>
      {children}
    </Link>
  );
}
