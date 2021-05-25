import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import FirebaseContext from "../../context/firebase";
import {
  LoginContainer,
  LoginImage,
  LoginImageWrapper,
  LoginFormWrapper,
  LogoWrapper,
  LogoImage,
  ErrorMessage,
  Input,
  Button,
  LoginFormBottom,
  LoginFormTop,
} from "./login.styles";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);
  return (
    <LoginContainer>
      <LoginImageWrapper>
        <LoginImage />
      </LoginImageWrapper>
      <LoginFormWrapper>
        <LoginFormTop>
          <LogoWrapper>
            <LogoImage />
          </LogoWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <form action="POST">
            <Input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email Address"
              required
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              aria-label="Enter your Password"
              type="password"
              placeholder="Enter Password"
              required
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button disabled={isInvalid}>Log In</Button>
          </form>
        </LoginFormTop>

        <LoginFormBottom>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </LoginFormBottom>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
