import React from "react";
import classes from "./SignUp.module.css";
import SignUpForm from "../components/User/SignUp/SignUpForm";
import Page from "./template/Page";

export default function SignUp() {
  return (
    <Page className={classes["sign-up-container"]}>
      <SignUpForm />
    </Page>
  );
}
