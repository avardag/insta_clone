import React, { useRef } from "react";
import PostHeader from "./postHeader";
import { PostContainer } from "./post.styles";
import PostImage from "./postImage";
import PostActions from "./postActions";
import PostFooter from "./postFooter";
import Comments from "../comments";

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
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  const {
    username,
    avatar,
    imageSrc,
    caption,
    loggedInUserLiked,
    likes,
    userId,
    docId,
    comments,
    dateCreated,
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
        handleFocus={handleFocus}
      />
      <PostFooter caption={caption} username={username} />
      <Comments
        docId={docId}
        userId={userId}
        allComments={comments}
        commentInput={commentInput}
        dateCreated={dateCreated}
      />
    </PostContainer>
  );
}
