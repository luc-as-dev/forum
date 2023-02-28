import React from "react";
import { useAuth } from "../hooks/useAuth";
import User from "./User";

export default function UserMe() {
  const { user } = useAuth();
  return <User user={user} />;
}
