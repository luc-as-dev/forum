import React from "react";
import UserPreview from "../User/UserInformation/UserPreview";
import classes from "./UsersList.module.css";

const LIMIT = 36;

export default function UsersList({ users, limit }) {
  if (!users) {
    return (
      <div className={classes["users-list"]}>
        {Array(limit || LIMIT)
          .fill(null)
          .map((n, i) => (
            <UserPreview key={i} />
          ))}
      </div>
    );
  }
  return (
    <div className={classes["users-list"]}>
      {users.map((user) => (
        <UserPreview key={user.id} user={user} />
      ))}
    </div>
  );
}
