import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  height: 4rem;
  padding: 0 4rem;
  background-color: #fff;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  margin-bottom: 2rem;
  /* display: flex; */
  /* align-items: center; */
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
    height: 2.4rem;
    margin-top: 0.5rem;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
///////////////////////
// // SVGs
//////////////////
const CamIconDiv = styled.div`
  margin-right: 3rem;
  svg {
    width: 2rem;
    height: 2rem;
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
  margin-right: 3rem;
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
  margin-left: 2rem;
  img {
    object-fit: cover;
    height: 2.6rem;
    width: 2.6rem;
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
