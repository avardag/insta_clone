import React from "react";
import Header from "../../components/header";
import Suggestions from "../../components/suggestions";
import useUserInfo from "../../hooks/useUserInfo";
import { ExploreContainer } from "./explore.styles";

export default function Explore() {
  const { userId, following } = useUserInfo();
  return (
    <>
      <Header />
      <ExploreContainer>
        <Suggestions userId={userId} usersFollowings={following} moreBtn />
      </ExploreContainer>
    </>
  );
}
