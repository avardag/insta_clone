import React from "react";
import PostHeader from "./postHeader";
import { PostContainer } from "./post.styles";
import PostImage from "./postImage";
export default function Post({ photo }) {
  return (
    <PostContainer>
      <PostHeader username={photo.username} avatar={photo.avatar} />
      <PostImage imageSrc={photo.imageSrc} caption={photo.caption} />
    </PostContainer>
  );
}
