import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserPreview.module.css";

export default function UserPreview({ user }) {
  if (!user) {
    return (
      <div className={classes["user-preview-container"]}>
        <Link to={`/users`}>
          <img className={classes["user-preview-no-avatar"]} />
        </Link>
        <div>
          <Link className={classes["user-preview-no-name"]} to={`/users`}>
            Loading...
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={classes["user-preview-container"]}>
      <Link to={`/users/${user.id}`}>
        <img src={user.profile.avatar} />
      </Link>
      <div>
        <Link className={classes["user-preview-name"]} to={`/users/${user.id}`}>
          {user.name}
        </Link>
      </div>
    </div>
  );
}
