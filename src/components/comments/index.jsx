import React, { useState } from "react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import { CommentsContainer, ViewMoreBtn, PostedText } from "./comments.styles";
import AddComment from "./addComment";

export default function Comments({
  docId,
  allComments,
  commentInput,
  dateCreated,
  userId,
}) {
  const [comments, setComments] = useState(allComments);
  const [commentsSlice, setCommentsSlice] = useState(3);

  const showNextComments = () => {
    setCommentsSlice(commentsSlice + 3);
  };

  return (
    <CommentsContainer>
      {comments.slice(0, commentsSlice).map((item) => (
        <p
          key={`${item.comment}-${item.displayName}`}
          style={{ marginBottom: "0.25rem" }}
        >
          <Link to={`/p/${item.displayName}`}>
            <span style={{ marginRight: "0.25rem", fontWeight: "bold" }}>
              {item.displayName}
            </span>
          </Link>
          <span>{item.comment}</span>
        </p>
      ))}
      {comments.length >= 3 && commentsSlice < comments.length && (
        <ViewMoreBtn
          type="button"
          onClick={showNextComments}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              showNextComments();
            }
          }}
        >
          View more comments
        </ViewMoreBtn>
      )}
      <PostedText>{formatDistance(dateCreated, new Date())} ago</PostedText>
      <AddComment
        docId={docId}
        userId={userId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </CommentsContainer>
  );
}
