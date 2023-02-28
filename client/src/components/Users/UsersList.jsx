import React from "react";
import UserPreview from "../User/UserInformation/UserPreview";
import classes from "./UsersList.module.css";

export default function UsersList({ users }) {
  return (
    <div className={classes["users-list-container"]}>
      {users.map((user) => (
        <UserPreview key={user.id} user={user} />
      ))}
    </div>
  );
}
