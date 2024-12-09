import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grayPrimary};
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 3rem;
`;
//PostHeader Styles
export const PostHeaderCont = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayPrimary};
  /* height */
  padding: 1rem 2rem;
  width: 100%;
`;
export const PostHeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;
export const HeaderUsername = styled.p`
  font-weight: bold;
`;

//////////////////////////////
//Actions
////////////////////////////////

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 1rem;
`;
export const ActionsInner = styled.div`
  display: flex;
`;

////////////////////////////////
// Like Icon SVG

const LikeIconDiv = styled.div`
  svg {
    width: 2rem;
    cursor: pointer;
    user-select: none;
    fill: ${(props) => (props.liked ? "#ed4956" : "#262626")};
    color: ${(props) => (props.liked ? "#ed4956" : "#262626")};
    &:focus {
      outline: none;
    }
  }
`;
export const StyledLikeSvg = ({ className, ...props }) => (
  <LikeIconDiv {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      tabIndex={0}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  </LikeIconDiv>
);

/////////////////////////////////////

///////////////////////////////////
// Comment Icon SVG

const CommentIconDiv = styled.div`
  svg {
    width: 2rem;
    cursor: pointer;
    user-select: none;
    color: ${({ theme }) => `${theme.colors.blackLight}`};
    &:focus {
      outline: none;
    }
  }
`;
export const StyledCommentSvg = ({ className, ...props }) => (
  <CommentIconDiv {...props}>
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      tabIndex={0}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  </CommentIconDiv>
);
///////////////////////////////////////////////////////

export const TotalLikesContainer = styled.div`
  padding: 0 1rem;
  p {
    font-weight: bold;
  }
`;

///////////////////////////////
// PostFooter
////////////////////

export const FooterInner = styled.div`
  padding: 0.5rem 1rem 0;
  span {
    font-weight: bold;
    margin-right: 0.25rem;
  }
`;
