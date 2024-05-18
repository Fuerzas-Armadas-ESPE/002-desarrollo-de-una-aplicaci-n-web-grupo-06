import React, { useState } from "react";
import logo from "../assets/logo-2.png";
import { navLinks } from "../Data/Data";
import { FiMenu } from "react-icons/fi";

const Nav = ({ nav, toggleModal }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header
      className={`w-full duration-500 ${
        nav ? "fixed bg-black top-0 left-0 z-30" : "absolute"
      }`}
    >
      <nav className="max-w-[1540px] m-auto py-6 px-6 max-lg:px-12 flex justify-between items-center gap-14 max-xl:gap-5 max-sm:py-4 max-sm:px-6">
        <a
          href="#home"
          className=" font-semibold text-5xl flex justify-center items-center text-white gap-5"
        >
          <img src={logo} alt="logo" width={60} height={60} />
          <span>ARES GYM</span>
        </a>

        <button
          className="flex items-center p-2 w-12 h-12 justify-center text-9xl text-white lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <FiMenu />
        </button>

        <ul
          className={`${
            openNav ? "max-lg:bg-[#000000d3] z-50" : ""
          } flex flex-1 justify-end items-center gap-10 max-xl:gap-7 max-lg:flex-col max-lg:text-white max-lg:pt-5 max-lg:pb-10 max-lg:px-4 max-lg:gap-6 max-lg:absolute max-lg:left-0 max-lg:top-24 max-lg:w-[100%] max-sm:top-20`}
        >
          {navLinks.map((val) => (
            <li
              key={val.label}
              className={`text-white font-medium hover:text-red-500 text-xl max-lg:text-lg 
              ${openNav ? "max-lg:block" : "max-lg:hidden"}`}
              onClick={() => setOpenNav(false)}
            >
              <a href={val.href}>{val.label}</a>
            </li>
          ))}
          <li>
            <a
              className={`${openNav ? "" : "max-lg:hidden"}`}
              href="#inscripcion"
              onClick={() => setOpenNav(false)}
            >
              <button className=" py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm"
              onClick={toggleModal}>
                <div className=" buttonDiv"></div>
                <span className="buttonSpan">INSCRIBETE AHORA</span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
