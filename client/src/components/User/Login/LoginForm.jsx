import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Form from "../../UI/Form";
import Input from "../../UI/Input";

const SUCCESS_REDIRECT = "/";

export default function LoginForm({ className }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    login(
      {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      },
      (user) => {
        console.log(user);
        navigate(SUCCESS_REDIRECT);
      },
      (err) => {
        //TODO fix error messages
        console.log(err);
      }
    );
  }
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
        <Button type="submit" onClick={submitHandler}>
          Log in
        </Button>
      </Form>
    </Card>
  );
}
