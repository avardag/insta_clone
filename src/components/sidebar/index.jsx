import React from "react";
import useUserInfo from "../../hooks/useUserInfo";

import User from "./user";
import Suggestions from "./suggestions";
import { SidebarWrapper } from "./sidebar.styles.js";

export default function Sidebar() {
  const { fullname, username, userId, following } = useUserInfo();

  return (
    <SidebarWrapper>
      <User username={username} fullname={fullname} />
      <Suggestions userId={userId} usersFollowings={following} />
    </SidebarWrapper>
  );
}
