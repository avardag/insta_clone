import { useState, useContext } from "react";
import UserContext from "../../context/userAuth";
import { addCommentOnImage } from "../../helpers/firebase";
import {
  AddCommentCont,
  AddCommentForm,
  AddCommentInput,
  AddCommentBtn,
} from "./comments.styles";

export default function AddComment({
  docId,
  userId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState("");
  const {
    user: { displayName },
  } = useContext(UserContext); //loggedInUser's displayName. Comes from firebase.Auth()

  //Handle comment submit
  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      await addCommentOnImage(displayName, userId, docId, comment);
      setComments([...comments, { displayName, comment }]); //set comments on Comment component.
      setComment(""); //reset the comment input

      return;
    } catch (error) {
      console.log(error);
      setComment(""); //reset the comment input
    }
  };

  return (
    <AddCommentCont>
      <AddCommentForm
        onSubmit={(event) =>
          comment.length >= 1
            ? handleSubmitComment(event)
            : event.preventDefault()
        }
      >
        <AddCommentInput
          aria-label="Add a comment"
          autoComplete="off"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <AddCommentBtn
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </AddCommentBtn>
      </AddCommentForm>
    </AddCommentCont>
  );
}
