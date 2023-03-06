import React from "react";
import classes from "./SignUp.module.css";
import SignUpForm from "../components/User/SignUp/SignUpForm";
import Page from "./template/Page";

export default function SignUp() {
  return (
    <Page>
      <SignUpForm className={classes["sign-up-form"]} />
    </Page>
  );
}
