import React, { useEffect } from "react";
// import Sidebar from "../../components/sidebar";
// import Timeline from "../../components/timeline";
import { Timeline, Sidebar, Header } from "../../components";
import { DashboardMain } from "./dashboard.styles";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      <DashboardMain>
        <Timeline />
        <Sidebar />
      </DashboardMain>
    </div>
  );
}
