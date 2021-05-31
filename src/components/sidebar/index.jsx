import React from "react";
import useUserInfo from "../../hooks/useUserInfo";

export default function Sidebar() {
  const { fullname, username, userId } = useUserInfo();

  return <div>I am Sidebar</div>;
}
