import React from "react";
import { LIMIT } from "../../pages/Users";
import UserPreview from "../User/UserInformation/UserPreview";
import classes from "./UsersList.module.css";

export default function UsersList({ users }) {
  if (!users) {
    return (
      <div className={classes["users-list"]}>
        {Array(LIMIT)
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
