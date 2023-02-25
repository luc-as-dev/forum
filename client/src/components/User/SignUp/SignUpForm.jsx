import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import classes from "./SignUpForm.module.css";

export default function SignUpForm() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <Card className={classes["sign-up-container"]}>
      <form>
        <h1>Sign up</h1>
        <Input id="name" label="Name" type="text" />
        <Input id="email" label="Email" type="email" />
        <Input id="password" label="Password" type="password" />
        <Input
          id="dob"
          label="Date of birth"
          type="date"
          min="1900-01-01"
          max={new Date().toISOString().split("T")[0]}
        />
        <Button type="submit" onClick={submitHandler}>
          Sign up
        </Button>
      </form>
    </Card>
  );
}
