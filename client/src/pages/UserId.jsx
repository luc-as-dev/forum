import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, fixUser } from "../../api/api";
import User from "./User";

export default function UserId() {
  const { id } = useParams();
  const [user, setUser] = useState();

  async function getUser(id) {
    try {
      const response = await fetch(`${API_URL}/users/${id}`);
      if (response.ok) {
        const user = await response.json();
        setUser(fixUser(user));
        console.log(fixUser(user));
      } else {
        const error = await response.json();
        console.log(error.users.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser(id);
  }, [id]);

  return <User user={user} />;
}
