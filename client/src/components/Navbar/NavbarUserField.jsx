import React from "react";
import Button from "../UI/Button";
import classes from "./NavbarUserField.module.css";

export default function NavbarUserField({ user, onLogout }) {
  function logoutHandler() {
    onLogout();
  }

  return (
    <div className={classes["navbar-user-container"]}>
      <img src={user.profile.avatar} />
      <Button className={classes["log-out"]} onClick={logoutHandler}>
        Log out
      </Button>
    </div>
  );
}
