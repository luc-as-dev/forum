import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import classes from "./Page.module.css";
import Page from "./Page";

export default function MenuPage(props) {
  return (
    <div className={classes["menu-page"]}>
      <SideMenu className={classes["menu-page-menu"]} />
      <div className={classes["menu-page-inner"]}>
        <div className={props.className}>{props.children}</div>
      </div>
    </div>
  );
}
