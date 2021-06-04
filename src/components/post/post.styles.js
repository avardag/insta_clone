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
`;
export const HeaderUsername = styled.p`
  font-weight: bold;
`;
