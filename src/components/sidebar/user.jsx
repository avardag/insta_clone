import React, { memo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const UserLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 1.5rem;
  gap: 1rem;
  align-items: center;
`;
const UserImgWrapper = styled.div`
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`;
const UserInfoBox = styled.div`
  p {
    line-height: 1.5;
    font-size: 0.875rem;
  }
  .username {
    font-weight: bold;
  }
`;

const RenderUserSkeleton = ({ ...props }) => (
  <div style={{ display: "flex" }}>
    <Skeleton
      circle={true}
      height={50}
      width={50}
      style={{ marginRight: "1rem" }}
    />
    <Skeleton count={1} height={50} width={150} />
  </div>
);

const User = ({ username, fullname }) => {
  return !username || !fullname ? (
    <RenderUserSkeleton />
  ) : (
    <UserLink to={`/p/${username}`}>
      <UserImgWrapper>
        <img src={`/images/avatars/${username}.jpg`} alt={username} />
      </UserImgWrapper>
      <UserInfoBox>
        <p className="username">{username}</p>
        <p className="fullname">{fullname}</p>
      </UserInfoBox>
    </UserLink>
  );
};

export default memo(User);
