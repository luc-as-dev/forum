import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import classes from "./SignUpForm.module.css";

export default function SignUpForm() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dobInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    signUp(
      {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        dateOfBirth: dobInputRef.current.value,
      },
      (user) => {
        console.log(user);
        navigate("/");
      },
      (err) => {
        //TODO fix error messages
        console.log(err);
      }
    );
  }
  return (
    <Card className={classes["sign-up-container"]}>
      <form>
        <h1>Sign up</h1>
        <Input id="name" label="Name" type="text" ref={nameInputRef} />
        <Input id="email" label="Email" type="email" ref={emailInputRef} />
        <Input
          id="password"
          label="Password"
          type="password"
          ref={passwordInputRef}
        />
        <Input
          id="dob"
          label="Date of birth"
          type="date"
          ref={dobInputRef}
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
