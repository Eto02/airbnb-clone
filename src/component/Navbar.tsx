import { faBars, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
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
