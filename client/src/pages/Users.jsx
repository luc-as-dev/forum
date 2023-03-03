import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_URL, fixUser } from "../../api/api";
import UsersFilter from "../components/Users/UsersFilter";
import UsersList from "../components/Users/UsersList";
import UsersPageSelector from "../components/Users/UsersPageSelector";
import MenuPage from "./template/MenuPage";
import classes from "./Users.module.css";

const LIMIT = 36;
const QUERIES_EMPTY = {
  search: "name:^",
  skip: 0,
  sortBy: "",
};

export default function Users() {
  const [queries, setQueries] = useState(QUERIES_EMPTY);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [users, setUsers] = useState();

  useEffect(() => {
    const search = searchParams.get("search");
    const skip = searchParams.get("skip");
    const sortBy = searchParams.get("sortBy");
    if (search) queries.search = search;
    if (skip) queries.skip = skip;
    if (sortBy) queries.sortBy = sortBy;
  }, []);

  useEffect(() => {
    const usedQueries = {};
    Object.keys(queries).forEach((key) => {
      if (queries[key] !== QUERIES_EMPTY[key]) usedQueries[key] = queries[key];
    });
    setSearchParams(usedQueries);
    getUsers();
  }, [queries]);

  function updateQueryHandler(update) {
    setQueries((preQueries) => {
      return { ...preQueries, ...update };
    });
  }

  async function getUsers() {
    let qs = "";
    Object.keys(queries).forEach((key) => {
      if (queries[key] !== "") qs = `${qs}&${key}=${queries[key]}`;
    });
    try {
      const response = await fetch(`${API_URL}/users?limit=${LIMIT}${qs}`);
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
    <MenuPage className={classes["users-page-container"]}>
      <h1>Users</h1>
      <UsersFilter queries={queries} onFilterChange={updateQueryHandler} />
      <UsersList users={users} />
      <UsersPageSelector />
    </MenuPage>
  );
}
