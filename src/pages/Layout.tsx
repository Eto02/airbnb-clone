import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-screen  overflow-y-scroll">
      <Navbar />
      <div>
        <div className="px-20 pb-5 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
