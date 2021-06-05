import React from "react";
import { FooterInner } from "./post.styles";

export default function PostFooter({ username, caption }) {
  return (
    <FooterInner>
      {caption && (
        <p>
          <span>{username}</span> {caption}
        </p>
      )}
    </FooterInner>
  );
}
