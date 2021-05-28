import React, { useEffect } from "react";
// import Sidebar from "../../components/sidebar";
// import Timeline from "../../components/timeline";
import { Timeline, Sidebar, Header } from "../../components";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      <Timeline />
      <Sidebar />
    </div>
  );
}
