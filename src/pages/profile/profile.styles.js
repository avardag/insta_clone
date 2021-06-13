import styled from "styled-components/macro";

export const ProfilePageBG = styled.div`
  background-color: ${({ theme }) => `${theme.colors.grayBackground}`};
`;

export const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 980px;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

///////////////////////////////////////
// // PROFILE HEADER
//////////////////////////////////////

export const ProfileHeadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 2fr 2fr;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    img {
      height: 5rem;
      width: 5rem;
    }
  }
`;
export const ProfileInfo = styled.div`
  grid-column: 2 / span2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
  /* align-items: center; */
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;
export const ProfileInfoTop = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
export const ProfileStats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  p {
    margin-right: 3rem;

    span {
      font-weight: bold;
    }
  }
  @media (max-width: 600px) {
    margin-top: 1rem;
    p {
      margin-right: 1rem;
    }
  }
`;
export const ProfileFullName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  p {
    font-weight: 500;
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const FollowBtn = styled.button`
  display: inline-block;
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${({ theme, isFollowing }) =>
    isFollowing ? `${theme.colors.grayPrimary}` : `${theme.colors.blueLight}`};
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0 2rem;
  cursor: pointer;
`;

//////////////////////////////////////
// // PHOTOS GRID
/////////////////////////////////////
export const PhotosContainer = styled.div`
  height: 4rem;
  border-top: 1px solid ${({ theme }) => `${theme.colors.grayPrimary}`};
  margin-top: 3rem;
  padding-top: 1rem;
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  &:hover div {
    display: flex;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhotoStats = styled.div`
  display: none;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 100%;
`;

export const IconWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
`;

const IconSpan = styled.span`
  svg {
    width: 2rem;
    cursor: pointer;
    user-select: none;
    color: #fff;
  }
`;

export const StyledLikeSvg = ({ className, ...props }) => (
  <IconSpan {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  </IconSpan>
);
export const StyledCommentSvg = ({ className, ...props }) => (
  <IconSpan {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
        clipRule="evenodd"
      />
    </svg>
  </IconSpan>
);

export const NoPhotosText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
`;
//////////////////////////////////////
// // END PHOTOS GRID
/////////////////////////////////////
