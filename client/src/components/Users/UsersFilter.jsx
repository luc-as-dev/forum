import React, { useState } from "react";
import classes from "./UsersFilter.module.css";

export default function UsersFilter({ queries, onFilterChange }) {
  function searchChangeHandler(event) {
    onFilterChange({ search: `name:^${event.target.value}` });
  }

  return (
    <div className={classes["users-filter-container"]}>
      <input
        type="text"
        placeholder="Search..."
        value={queries.search === "" ? "" : queries.search.slice(6)}
        onChange={searchChangeHandler}
      />
    </div>
  );
}
