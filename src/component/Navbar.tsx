import { faBars, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user: boolean = false;

  return (
    <nav className="flex justify-between items-center h-[100px]">
      <div className="basis-3/5 flex items-center gap-[50px]">
        <a
          href="/"
          className=" transform hover:scale-105 transition-all duration-400 ease-in font-bold text-[20px] flex items-center  gap-[10px] "
        >
          <FontAwesomeIcon className="w-7" icon={faPaw} />
          <span className=" md:hidden lg:block">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </a>
        <a
          className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in"
          href="/"
        >
          Home
        </a>
        <a
          className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in"
          href="/"
        >
          About
        </a>
        <a
          className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in"
          href="/"
        >
          Contact
        </a>
        <a
          className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in"
          href="/"
        >
          Agents
        </a>
      </div>
      <div className="basis-2/5  flex items-center justify-end bg-transparent lg:bg-[#84DCC6] h-full">
        {!user ? (
          <div className="flex items-center font-bold">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-10 h-10 rounded-[50%] object-cover m-5"
              alt=""
            />
            <span className="hidden md:block">John Doe</span>
            <Link
              className="hidden md:block py-3 px-6  bg-[#FFFFFF] cursor-pointer border-0 m-5 relative"
              to="/profile"
            >
              <div className="top-[-8px] right-[-8px] absolute bg-red-600 text-white rounded-[50%] h-6 w-6 flex items-center justify-center">
                3
              </div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a
              className="hidden md:block py-[12px] px-[24px] m-[20px] transform hover:scale-105 transition-all duration-400 ease-in"
              href="/"
            >
              Sign in
            </a>
            <a
              className="hidden md:block py-[12px] px-[24px] m-[20px] transform hover:scale-105 transition-all duration-400 ease-in bg-[#FFFFFF]"
              href="/"
            >
              Sign up
            </a>
          </>
        )}
        <div className="md:hidden z-[999]">
          <FontAwesomeIcon
            onClick={() => setOpen((prev) => !prev)}
            className={`${
              open ? "text-white" : "text-black"
            } w-[36px] h-[36px] cursor-pointer`}
            icon={faBars}
          />
        </div>
        <div
          className={`${
            open ? "right-0" : "right-[-50%]"
          } absolute bg-black text-white h-screen w-1/2 top-0 transition-all duration-400 ease-in flex flex-col items-center justify-center gap-[5px]`}
        >
          <a
            className=" transform hover:scale-105 transition-all duration-400 ease-in"
            href="/"
          >
            Home
          </a>
          <a
            className=" transform hover:scale-105 transition-all duration-400 ease-in"
            href="/"
          >
            About
          </a>
          <a
            className=" transform hover:scale-105 transition-all duration-400 ease-in"
            href="/"
          >
            Contact
          </a>
          <a
            className=" transform hover:scale-105 transition-all duration-400 ease-in"
            href="/"
          >
            Agents
          </a>
          <a
            className=" transform hover:scale-105 transition-all duration-400 ease-in"
            href="/"
          >
            Sign in
          </a>
          <a
            className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in"
            href="/"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
