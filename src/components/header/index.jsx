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
  StyledCamSvg,
  StyledCompassSvg,
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
                <Link to={ROUTES.UPLOAD}>
                  <StyledCamSvg />
                </Link>
                <Link to={ROUTES.EXPLORE}>
                  <StyledCompassSvg />
                </Link>
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
                        src={user?.photoURL || "/images/avatars/default.png"}
                        alt={`${user?.displayName} profile`}
                      />
                    </Link>
                  </AvatarWrapper>
                )}
              </>
            ) : (
              <>
                <HeaderAuthBtn to={ROUTES.LOGIN} primary={"true"}>
                  Log In
                </HeaderAuthBtn>
                <HeaderAuthBtn to={ROUTES.SIGN_UP} secondary={"true"}>
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
