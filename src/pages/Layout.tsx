import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="h-screen  overflow-y-scroll">
      <Navbar />
      <div>
        <div className="px-20 pb-5 h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
