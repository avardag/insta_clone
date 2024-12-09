import React from "react";

export default function PostImage({ imageSrc, caption }) {
  return (
    <img
      src={imageSrc}
      alt={caption}
      style={{ width: "100%", objectFit: "cover" }}
    />
  );
}
