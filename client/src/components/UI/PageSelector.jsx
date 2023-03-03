import React from "react";
import classes from "./PageSelector.module.css";

export default function PageSelector({ urls, className }) {
  const mergedClassName = `${classes["page-selector"]} ${
    !className ? "" : className
  }`;

  /*
  const items = urls.map((url, i) => {
    i: url;
  });
  */

  return <div className={mergedClassName}>PageSelector</div>;
}
