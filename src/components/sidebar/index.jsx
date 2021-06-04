import React from "react";
import useUserInfo from "../../hooks/useUserInfo";

import User from "./user";
import Suggestions from "./suggestions";
import { SidebarWrapper } from "./sidebar.styles.js";

export default function Sidebar() {
  const { fullname, username, userId, following, avatar } = useUserInfo();
  return (
    <SidebarWrapper>
      <User username={username} fullname={fullname} avatar={avatar} />
      <Suggestions userId={userId} usersFollowings={following} />
    </SidebarWrapper>
  );
}
