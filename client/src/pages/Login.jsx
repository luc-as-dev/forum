import React from "react";
import LoginForm from "../components/User/Login/LoginForm";
import Page from "./template/Page";
import classes from "./Login.module.css";

function Login() {
  return (
    <Page>
      <LoginForm className={classes["log-in-form"]} />
    </Page>
  );
}

export default Login;
