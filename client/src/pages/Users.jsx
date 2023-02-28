import React, { useEffect, useState } from "react";
import { API_URL, fixUser } from "../../api/api";
import UsersFilter from "../components/Users/UsersFilter";
import UsersList from "../components/Users/UsersList";
import MenuPage from "./template/MenuPage";
import classes from "./Users.module.css";

export default function Users() {
  const [users, setUsers] = useState();

  async function getUsers() {
    try {
      const response = await fetch(`${API_URL}/users`);
      if (response.ok) {
        const users = await response.json();
        setUsers(users.map((user) => fixUser(user)));
      } else {
        const error = await response.json();
        console.log(error.users.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <MenuPage className={classes["user-page-container"]}>
      <h1>Users</h1>
      <UsersFilter />
      {users ? <UsersList users={users} /> : "Loading..."}
    </MenuPage>
  );
}
