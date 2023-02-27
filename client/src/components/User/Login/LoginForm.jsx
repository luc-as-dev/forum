import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorMessage from "../../UI/ErrorMessage";
import Form from "../../UI/Form";
import Input from "../../UI/Input";

const LOGGED_IN_REDIRECT = "/";

export default function LoginForm({ className }) {
  const { user, login, error } = useAuth();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    login({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
  }

  if (user) return <Navigate to={LOGGED_IN_REDIRECT} />;

  return (
    <Card className={className}>
      <Form>
        <h1>Log in</h1>
        <Input id="email" label="Email" type="email" ref={emailInputRef} />
        <Input
          id="password"
          label="Password"
          type="password"
          ref={passwordInputRef}
        />
        {error && error.login && (
          <ErrorMessage>{error.login.message}</ErrorMessage>
        )}
        <Button type="submit" onClick={submitHandler}>
          Log in
        </Button>
      </Form>
    </Card>
  );
}
