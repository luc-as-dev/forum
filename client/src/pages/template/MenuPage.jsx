import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import classes from "./Page.module.css";
import Page from "./Page";

export default function MenuPage(props) {
  const className = `${classes["menu-page-inner"]} ${
    !props.className ? "" : props.className
  }`;
  return (
    <div className={classes["menu-page"]}>
      <SideMenu className={classes["menu-page-menu"]} />
      <div className={className}>{props.children}</div>
    </div>
  );
}
