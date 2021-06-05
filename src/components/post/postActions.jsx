import React, { useContext, useState } from "react";
import UserAuthContext from "../../context/userAuth";
import { handleLike } from "../../helpers/firebase";

import {
  Actions,
  ActionsInner,
  StyledLikeSvg,
  StyledCommentSvg,
  TotalLikesContainer,
} from "./post.styles";

export default function PostActions({
  loggedInUserLiked,
  totalLikes,
  userId,
  docId,
}) {
  const { user } = useContext(UserAuthContext);
  const loggedInUserId = user.uid;

  const [toggleLiked, setToggleLiked] = useState(loggedInUserLiked);
  const [likes, setLikes] = useState(totalLikes);

  const handleToggleLiked = async () => {
    try {
      setToggleLiked((toggleLiked) => !toggleLiked);
      handleLike(loggedInUserId, userId, docId, toggleLiked);

      setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Actions>
        <ActionsInner>
          <StyledLikeSvg
            onClick={handleToggleLiked}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleToggleLiked();
              }
            }}
            liked={toggleLiked}
          />
          <StyledCommentSvg />
        </ActionsInner>
      </Actions>
      <TotalLikesContainer>
        <p>{likes === 1 ? `${likes} like` : `${likes} likes`}</p>
      </TotalLikesContainer>
    </>
  );
}
