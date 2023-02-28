import React from "react";
import UserSummary from "../components/User/UserInformation/UserSummary";
import MenuPage from "./template/MenuPage";
import classes from "./User.module.css";
import { useParams } from "react-router-dom";

export default function User({ user, auth }) {
  if (!user) {
    return "User not found";
  }

  return (
    <MenuPage>
      <UserSummary user={user} />
    </MenuPage>
  );
}
