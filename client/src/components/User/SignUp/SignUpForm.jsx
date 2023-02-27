import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorMessage from "../../UI/ErrorMessage";
import Form from "../../UI/Form";
import Input from "../../UI/Input";

const LOGGED_IN_REDIRECT = "/";

export default function SignUpForm({ className }) {
  const { user, signUp, error } = useAuth();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dobInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    signUp({
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      dateOfBirth: dobInputRef.current.value,
    });
  }

  if (user) return <Navigate to={LOGGED_IN_REDIRECT} />;

  return (
    <Card className={className}>
      <Form>
        <h1>Sign up</h1>
        <Input id="name" label="Name" type="text" ref={nameInputRef} />
        {error && error.signUp && error.signUp.name && (
          <ErrorMessage>{error.signUp.name.message}</ErrorMessage>
        )}
        <Input id="email" label="Email" type="email" ref={emailInputRef} />
        {error && error.signUp.email && (
          <ErrorMessage>{error.signUp.email.message}</ErrorMessage>
        )}
        <Input
          id="password"
          label="Password"
          type="password"
          ref={passwordInputRef}
        />
        {error && error.signUp && error.signUp.password && (
          <ErrorMessage>{error.signUp.password.message}</ErrorMessage>
        )}
        <Input
          id="dob"
          label="Date of birth"
          type="date"
          ref={dobInputRef}
          min="1900-01-01"
          max={new Date().toISOString().split("T")[0]}
        />
        {error && error.signUp && error.signUp.dateOfBirth && (
          <ErrorMessage>{error.signUp.dateOfBirth.message}</ErrorMessage>
        )}
        <Button type="submit" onClick={submitHandler}>
          Sign up
        </Button>
      </Form>
    </Card>
  );
}
