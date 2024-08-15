import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/authContext";
import useNotifStore from "../lib/notificationStore";
import myAxios from "@/lib/axiosConfig";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Section {
  id?: string;
  title?: string;
  component: React.FC;
  bgColor: string;
  isExternal: boolean;
  url?: string;
}
interface NavbarProps {
  sections: Section[];
  handleScroll: (id: string | undefined) => void;
}
const Navbar: React.FC<NavbarProps> = ({ sections, handleScroll }) => {
  console.log(sections);
  const [open, setOpen] = useState<boolean>(false);
  const [avatarOpen, setAvatarOpen] = useState<boolean>(false);
  const { currentUser, updateUser } = useContext(
    AuthContext
  ) as AuthContextType;
  const nav = useNavigate();
  const location = useLocation();
  const fetch = useNotifStore((state) => state.fetch);
  const number = useNotifStore((state) => state.number);

  useEffect(() => {
    if (currentUser) fetch();
  }, [currentUser, fetch]);

  const handleLogout = async (): Promise<void> => {
    try {
      await myAxios.post("/api/auth/logout");
      updateUser(null);
      setAvatarOpen(false);
      setOpen(false);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderMenuItems = () => {
    return sections.map((section) => {
      return (
        <li key={section.id}>
          {section.isExternal ? (
            <a
              href={section.url}
              rel="noopener noreferrer"
              className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                location.pathname === section.url ? "text-blue-700" : ""
              }`}
            >
              {section.title}
            </a>
          ) : (
            <button
              onClick={() => handleScroll(section.id)}
              className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                location.pathname === section.url ? "text-blue-700" : ""
              }`}
            >
              {section.title}
            </button>
          )}
        </li>
      );
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full shadow-md top-0 start-0 border-b border-gray-200 dark:border-gray-600 z-20">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <FontAwesomeIcon
            className="w-7 text-teal-700"
            size="2xl"
            icon={faPaw}
          />
          <span className="md:hidden lg:block text-teal-700 font-extrabold">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {currentUser ? (
            <div className="relative ml-3">
              <button
                onClick={() => setAvatarOpen((prev) => !prev)}
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  src={currentUser.avatar || "/noavatar.jpg"}
                  className="h-8 w-8 rounded-full"
                  alt=""
                />
                {number > 0 && (
                  <div className="top-[-12px] right-[-12px] absolute bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center">
                    {number}
                  </div>
                )}
              </button>

              <div
                className={`${
                  avatarOpen ? "block" : "hidden"
                } z-[999] absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Your Profile
                </Link>
                <Link
                  to="/saved"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Saved
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between gap-2">
              <Link
                to="/register"
                type="button"
                className="text-black bg-white border border-gray-400 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                type="button"
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </Link>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${open ? "hidden" : "block"} w-5 h-5`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className={`${open ? "block" : "hidden"} w-5 h-5`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {renderMenuItems()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
