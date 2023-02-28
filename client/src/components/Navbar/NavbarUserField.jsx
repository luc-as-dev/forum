import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./NavbarUserField.module.css";

export default function NavbarUserField({ user, onLogout }) {
  function logoutHandler() {
    onLogout();
  }

  return (
    <div className={classes["navbar-user-container"]}>
      <Link to="/users/me">
        <img src={user.profile.avatar} />
      </Link>
      <Button className={classes["log-out"]} onClick={logoutHandler}>
        Log out
      </Button>
    </div>
  );
}
