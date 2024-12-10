import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile";

function Home() {
  //custom Hooks
  const id = "keas7q4374sdjskjdfh";
  useGetProfile(id);

  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
}

export default Home;
