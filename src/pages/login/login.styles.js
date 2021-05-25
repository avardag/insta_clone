import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 60rem;
  margin: 0 auto;
`;
export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 24rem;
  max-width: 24rem;
`;

export const LoginFormTop = styled.div`
  background: #fff;
  border: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  padding: 2rem;
`;

export const LoginFormBottom = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  background: #fff;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.875rem;
  text-align: center;
  /* width: 100%; */
  & a {
    color: ${({ theme }) => `${theme.colors.blueMedium}`};
  }
`;

export const LoginImageWrapper = styled.div`
  display: flex;
  width: 60%;
  /* width: 100%; */
`;
export const LoginImage = styled.img.attrs({
  src: "./images/iphone-with-profile.jpg",
  alt: "Login Image",
})`
  width: 80%;
`;

export const LogoWrapper = styled.div`
  /* display:flex; */
  width: 100%;
`;

export const LogoImage = styled.img.attrs({
  src: "./images/logo.png",
  alt: "Instagram Logo",
})`
  margin: 0.5rem auto 1rem;
  display: block;
  width: 50%;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => `${theme.colors.redPrimary}`};
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  font-size: 0.875rem;
  /* width: calc(100% - 2rem); */
  width: 100%;
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  background: #fff;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  padding: 1.25rem 1rem;
  height: 0.5rem;
  border: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  border-radius: 0.25rem;
  outline: 0;
  overflow: hidden;
`;

export const Button = styled.button`
  display: block;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: bold;
  /* background-color: #b2dffc; */
  background-color: ${({ theme }) => `${theme.colors.blueMedium}`};
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
