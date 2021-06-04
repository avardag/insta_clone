import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../helpers/firebase";
import SuggestedProfile from "./suggestedProfile";
import {
  SuggestionsContainer,
  SuggestionsTitle,
  SuggestionsList,
} from "./sidebar.styles";

export default function Suggestions({ userId, usersFollowings }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    const getProfiles = async () => {
      const ps = await getSuggestedProfiles(userId, usersFollowings);
      setProfiles(ps);
    };
    if (userId) {
      getProfiles();
    }
  }, [userId, usersFollowings]);

  //RETURN
  return !profiles ? (
    <Skeleton count={1} height={150} style={{ marginTop: "1.5rem" }} />
  ) : profiles.length > 0 ? (
    <SuggestionsContainer>
      <SuggestionsTitle>
        <h4>Suggestions for you</h4>
      </SuggestionsTitle>
      <SuggestionsList>
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.profileId}
            profileId={profile.profileId}
            userId={profile.userId}
            username={profile.username}
            avatar={profile.avatar}
            loggedInUserId={userId}
          />
        ))}
      </SuggestionsList>
    </SuggestionsContainer>
  ) : null;
}
