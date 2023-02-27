import React from "react";
import classes from "./Home.module.css";
import MenuPage from "./template/MenuPage";

export default function Home() {
  return (
    <MenuPage className={classes["home-page"]}>
      <h1>Welcome to Wolfoverstack</h1>
      <div></div>
    </MenuPage>
  );
}
