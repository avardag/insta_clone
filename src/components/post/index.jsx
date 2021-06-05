import React from "react";
import PostHeader from "./postHeader";
import { PostContainer } from "./post.styles";
import PostImage from "./postImage";
import PostActions from "./postActions";
import PostFooter from "./postFooter";

/*
photo:  {
  avatar: "https://ar?alt=media&token=8edd7d72-1068-4fc4-bab7-50fd968463f4"
  ​caption: "default photo"
  ​comments:  []
  ​dateCreated: 1622803969404
  ​docId: "s6LfdP5i7Av23MbWghMv"
  ​imageSrc: "https://2c-4130-8739-83814582426f"
  ​likes:  []
  ​loggedInUserLiked: false
  ​userId: "AWDxW2A87fcw19oRoqSkRWG4mnv1"
  ​userLattitude: ""
  ​userLongitude: ""
  ​username: "arsen"
}
*/

export default function Post({ photo }) {
  const {
    username,
    avatar,
    imageSrc,
    caption,
    loggedInUserLiked,
    likes,
    userId,
    docId,
  } = photo;
  return (
    <PostContainer>
      <PostHeader username={username} avatar={avatar} />
      <PostImage imageSrc={imageSrc} caption={caption} />
      <PostActions
        loggedInUserLiked={loggedInUserLiked}
        totalLikes={likes.length}
        userId={userId}
        docId={docId}
      />
      <PostFooter caption={caption} username={username} />
    </PostContainer>
  );
}
