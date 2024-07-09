import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext, AuthContextType } from "../context/authContext";

const AuthLayout: React.FC = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className=" xl:bg-[#fff]  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  h-screen   mx-auto px-5">
      <Navbar />
      <div style={{ height: "calc(100vh - 100px)", marginTop: "75px" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
