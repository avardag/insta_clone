import React, { useContext } from "react";
import FirebaseContext from "../../context/firebase"; //for SignOut functionality
import UserAuthContext from "../../context/userAuth";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import {
  Header as StyledHeader,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderNavs,
  LogoWrapper,
  StyledHomeSvg,
  StyledLogoutSvg,
  SignOutBtn,
  AvatarWrapper,
  HeaderAuthBtn,
} from "./header.styles";

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserAuthContext);

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderNavs>
          <HeaderLeft>
            <LogoWrapper>
              <Link to={ROUTES.DASHBOARD}>
                <img src="/images/logo.png" alt="Instagram Logo" />
              </Link>
            </LogoWrapper>
          </HeaderLeft>
          <HeaderRight>
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD}>
                  <StyledHomeSvg />
                </Link>
                <SignOutBtn
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <StyledLogoutSvg />
                </SignOutBtn>
                {user && (
                  <AvatarWrapper>
                    <Link to={`/p/${user?.displayName}`}>
                      <img
                        src={`./images/avatars/${user?.displayName.toLowerCase()}.jpg`}
                        alt={`${user?.displayName} profile`}
                      />
                    </Link>
                  </AvatarWrapper>
                )}
              </>
            ) : (
              <>
                <HeaderAuthBtn to={ROUTES.LOGIN} primary>
                  Log In
                </HeaderAuthBtn>
                <HeaderAuthBtn to={ROUTES.SIGN_UP} secondary>
                  Sign Up
                </HeaderAuthBtn>
              </>
            )}
          </HeaderRight>
        </HeaderNavs>
      </HeaderContainer>
    </StyledHeader>
  );
}
