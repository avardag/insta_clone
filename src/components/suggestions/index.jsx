import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../helpers/firebase";
import SuggestedProfile from "./suggestedProfile";
import {
  SuggestionsContainer,
  SuggestionsTitle,
  SuggestionsList,
  LoadMoreBtn,
} from "./suggestions.styles";

export default function Suggestions({ userId, usersFollowings, moreBtn }) {
  const [profiles, setProfiles] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);

  useEffect(() => {
    const getProfiles = async () => {
      const ps = await getSuggestedProfiles(userId, usersFollowings);
      const { profilesArray, latestDoc, isEmpty } = ps;
      setProfiles(profilesArray);
      setIsEmpty(isEmpty);
      setLastDoc(latestDoc);
    };
    if (userId) {
      getProfiles();
    }
  }, [userId, usersFollowings]);

  const handleLoadMore = async () => {
    const ps = await getSuggestedProfiles(userId, usersFollowings, lastDoc);
    const { profilesArray, latestDoc, isEmpty } = ps;
    setProfiles([...profiles, ...profilesArray]);
    setIsEmpty(isEmpty);
    setLastDoc(latestDoc);
  };

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
      {!isEmpty && moreBtn && (
        <LoadMoreBtn onClick={() => handleLoadMore()}>Load more</LoadMoreBtn>
      )}
    </SuggestionsContainer>
  ) : null;
}
