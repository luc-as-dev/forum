import React from "react";
import UserSummary from "../components/User/UserInformation/UserSummary";
import MenuPage from "./template/MenuPage";
import classes from "./User.module.css";

export default function User({ user, auth }) {
  return (
    <MenuPage>{user ? <UserSummary user={user} /> : "Loading..."}</MenuPage>
  );
}
