import React from "react";
import usePhotos from "../../hooks/usePhotos";
import Skeleton from "react-loading-skeleton";
import { FollowMessage } from "./timeline.styles";
import Post from "../post";

export default function Timeline() {
  //loggedInUsers photos
  //skeleton on loading the photos
  //if no photos: suggestion to create photos
  //if have photos, render them

  const { photos } = usePhotos();
  console.log("🚀 ~ Timeline ~ photos", photos);

  //RETURN
  if (!photos)
    return (
      <Skeleton
        count={5}
        width={640}
        height={500}
        style={{ marginBottom: "2rem" }}
      />
    );
  if (photos.length < 1)
    return <FollowMessage>Follow People to see photos</FollowMessage>;

  return (
    <div>
      {photos.map((photo) => (
        <Post key={photo.docId} photo={photo} />
      ))}
    </div>
  );
}
