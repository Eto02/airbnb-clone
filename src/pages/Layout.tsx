import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-screen  overflow-y-scroll">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
