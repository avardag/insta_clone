import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import FirebaseContext from "../../context/firebase";
import UserAuthContext from "../../context/userAuth";

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
  const location = useLocation();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserAuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // history.push(ROUTES.DASHBOARD);
      //check if user. If user, check if redirected from protected route. and send him back to that route
      if (user) {
        const { from } = location.state || {
          from: { pathname: ROUTES.DASHBOARD },
        };
        history.replace(from);
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };
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

          <form action="POST" onSubmit={handleLogin}>
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
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
          </p>
        </LoginFormBottom>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
