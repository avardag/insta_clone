import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

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
} from "./signup.styles";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  useEffect(() => {
    document.title = "Signup - Instagram";
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push(ROUTES.DASHBOARD);
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

          <form action="POST" onSubmit={handleSignup}>
            <Input
              aria-label="Enter your preferred username"
              type="text"
              placeholder="Enter your preferred username"
              required
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <Input
              aria-label="Enter your Full name"
              type="text"
              placeholder="Full name"
              required
              onChange={({ target }) => setFullname(target.value)}
              value={fullname}
            />
            <Input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email Address"
              required
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
            <Input
              aria-label="Enter your Password"
              type="password"
              placeholder="Enter Password"
              required
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <Button disabled={isInvalid}>Sign Up</Button>
          </form>
        </LoginFormTop>

        <LoginFormBottom>
          <p>
            Have an account? <Link to={ROUTES.LOGIN}>Log in</Link>
          </p>
        </LoginFormBottom>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
