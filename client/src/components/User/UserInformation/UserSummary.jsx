import React from "react";
import classes from "./UserSummary.module.css";

export default function UserSummary({ user }) {
  return (
    <div className={classes["summary-container"]}>
      <img className={classes["avatar"]} src={user.profile.avatar} />
      <div className={classes["information"]}>
        <h1>{user.name}</h1>
      </div>
    </div>
  );
}
