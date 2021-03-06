import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  height: 3.5rem;
  padding: 0 4rem;
  background-color: #fff;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  margin-bottom: 2rem;
  /* display: flex; */
  /* align-items: center; */
  @media (max-width: 736px) {
    padding: 0 1rem;
  }
`;
export const HeaderContainer = styled.div`
  height: 100%;
  max-width: 980px;
  margin: 0 auto;
`;
export const HeaderNavs = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  text-align: center;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  & img {
    height: 2rem;
    margin-top: 0.4rem;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
  }
`;
///////////////////////
// // SVGs
//////////////////
const CamIconDiv = styled.div`
  margin-right: 1.2rem;
  svg {
    /* cursor: pointer; */
    color: ${({ theme }) => `${theme.colors.blueMedium}`};
  }
`;
export const StyledCamSvg = ({ className, ...props }) => (
  <CamIconDiv {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </CamIconDiv>
);
const CompassIconDiv = styled.div`
  margin-right: 1.2rem;
  svg {
    width: 1.4rem;
  }
`;
export const StyledCompassSvg = ({ className, ...props }) => (
  <CompassIconDiv {...props}>
    <svg
      focusable="false"
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path
        fill="currentColor"
        d="M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"
      ></path>
    </svg>
  </CompassIconDiv>
);

const HomeSvg = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const StyledHomeSvg = styled(HomeSvg)`
  color: ${({ theme }) => `${theme.colors.blackLight}`};
  margin-right: 1.2rem;
`;

const LogoutSvg = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

export const StyledLogoutSvg = styled(LogoutSvg)`
  color: ${({ theme }) => `${theme.colors.blackLight}`};
`;

export const SignOutBtn = styled.button`
  background: none;
  border: none;
`;
export const AvatarWrapper = styled.div`
  cursor: poiner;
  margin-left: 1.5rem;
  img {
    object-fit: cover;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
`;

export const HeaderAuthBtn = styled(Link)`
  display: inline-block;
  background-color: ${({ theme, primary }) =>
    primary ? `${theme.colors.blueMedium}` : `#fff`};
  color: ${({ theme, primary }) =>
    primary ? `#fff` : `${theme.colors.blueMedium}`};
  font-weight: bold;
  border-radius: 0.4rem;
  width: 6rem;
  height: 2rem;
  line-height: 2rem;
  padding: 0;
  margin: 0 0.6rem;
  font-size: 0.9rem;
  text-align: center;
`;
