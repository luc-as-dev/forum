import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserPreview.module.css";

export default function UserPreview({ user }) {
  return (
    <div className={classes["user-preview-container"]}>
      <Link to={`/users/${user.id}`}>
        <img src={user.profile.avatar} />
      </Link>
      <div>
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}
