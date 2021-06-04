import React from "react";
import {
  PostHeaderCont,
  PostHeaderInner,
  HeaderProfileLink,
  HeaderImage,
  HeaderUsername,
} from "./post.styles";
export default function PostHeader({ username, avatar }) {
  return (
    <PostHeaderCont>
      <PostHeaderInner>
        <HeaderProfileLink to={`/p/${username}`}>
          <HeaderImage
            src={avatar ? avatar : `/images/avatars/default.png`}
            alt={`${username}'s profile`}
          />
          <HeaderUsername>{username}</HeaderUsername>
        </HeaderProfileLink>
      </PostHeaderInner>
    </PostHeaderCont>
  );
}
