import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext, AuthContextType } from "../context/authContext";

const AuthLayout: React.FC = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
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
export default AuthLayout;
