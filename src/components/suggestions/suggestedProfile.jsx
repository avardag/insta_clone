import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUsersFollowers,
  updateOtherUsersFollowings,
} from "../../helpers/firebase";
import { ProfileWrapper, ProfileLeft, FollowBtn } from "./suggestions.styles";

export default function SuggestedProfile({
  profileId,
  userId,
  username,
  loggedInUserId,
  avatar,
}) {
  //to set follow. remove from list after followed
  const [followedByUser, setFollowedByUser] = useState(false);

  const handleFollowuUser = async () => {
    try {
      await updateOtherUsersFollowings(loggedInUserId, userId, false);
      await updateLoggedInUsersFollowers(loggedInUserId, profileId, false);
      setFollowedByUser(true);
    } catch (error) {
      console.log("🚀 ~ handleFollowuUser ~ error", error);
    }
  };

  return !followedByUser ? (
    <ProfileWrapper>
      <ProfileLeft>
        <img src={avatar ? avatar : `/images/avatars/default.png`} alt="" />
        <Link to={`/p/${username}`}>
          <p>{username}</p>
        </Link>
      </ProfileLeft>
      <FollowBtn type="button" onClick={() => handleFollowuUser()}>
        Follow
      </FollowBtn>
    </ProfileWrapper>
  ) : null;
}
