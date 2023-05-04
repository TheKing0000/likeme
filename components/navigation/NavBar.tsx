import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineLike,
} from "react-icons/ai";

import { useEffect, useState } from "react";
import Link from "next/link";

import NavLink from "./NavLink";
import SetTheme from "./SetTheme";
const navLinks = ["Home", "Validation", "Jobs", "Questionnaires"];
const NavBar = () => {
  const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    if (mobileNavbarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileNavbarVisible]);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);
  return (
    <header>
      <nav>
        <div className="relative h-14  w-full mb-5">
          <div
            className={
              showShadow
                ? "fixed z-[98] h-14 bg-[#fffffe] dark:bg-[#16161a]  shadow-md shadow-[#3da9fc] w-full mb-5 duration-[200ms]"
                : "fixed z-[98] h-14 bg-[#fffffe] dark:bg-[#16161a] w-full mb-5 duration-[200ms]"
            }
          >
            {/* Mobil */}
            <div className="flex flex-row justify-between items-center h-full px-2 md:hidden">
              <h1 className="text-[#3da9fc] cursor-pointer">LikeMe</h1>
              <GiHamburgerMenu
                onClick={() => setMobileNavbarVisible(!mobileNavbarVisible)}
                className="text-[#3da9fc] dark:text-[#3da9fc] cursor-pointer"
                size={25}
              />
            </div>
            {/* Large Screen  */}
            <div className=" flex-row items-center h-full px-8 hidden md:flex">
              <div className="flex-none">
                {/* <h1 className="text-[#3da9fc] cursor-pointer">LikeMe</h1> */}
                <Link href="/">
                  <AiOutlineLike
                    className="text-[#16161a] dark:text-[#fffffe] cursor-pointer "
                    size={30}
                  />
                </Link>
              </div>
              <div className="space-x-7 flex-grow flex justify-end items-center pr-5">
                {navLinks.map((currentNavEL) => {
                  return (
                    <NavLink
                      key={currentNavEL}
                      hrefText="/"
                      linkText={currentNavEL}
                    />
                  );
                })}
              </div>
              <div className="flex-none">
                <div className="flex justify-center  items-center space-x-2">
                  <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#16161a] dark:bg-[#FBFBFB] px-4 text-sm font-medium tracking-wide  transition duration-300 dark:hover:bg-[#FBFBFB]/70 hover:bg-[#16161a]/80 focus:bg-[#FBFBFB] focus-visible:outline-none  ">
                    <span className="order-2 text-[#FBFBFB] dark:text-[#16161a]">
                      Get started
                    </span>
                    <span className="">
                      <AiOutlineUserAdd
                        className="text-[#FBFBFB] dark:text-[#16161a] cursor-pointer"
                        size={20}
                      />
                    </span>
                  </button>
                  <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#FBFBFB] dark:bg-[#16161a] px-4 text-sm font-medium tracking-wide  transition duration-300 hover:bg-[#16161a]  dark:hover:bg-[#FBFBFB]    group">
                    <span className="order-2  text-[#16161a] dark:text-[#FBFBFB] group-hover:text-[#FBFBFB] dark:group-hover:text-[#16161a]">
                      Login
                    </span>
                  </button>
                  <SetTheme />
                </div>
              </div>
            </div>
          </div>
          {/* mobile Navbar */}
          <div
            className={
              mobileNavbarVisible
                ? "z-[100] overflow-auto fixed top-0 left-0  w-[85%] sm:w-[75%]  h-screen bg-[#fffffe] dark:bg-[#0f0e17]  ease-in duration-500"
                : "fixed left-[-100%] top-0 "
            }
          >
            <div>
              <AiOutlineClose
                onClick={() => setMobileNavbarVisible(false)}
                className="text-[#3da9fc] dark:text-[#3da9fc] cursor-pointer"
                size={25}
              />
            </div>
          </div>
          {/* OverLay */}
          <div
            className={
              mobileNavbarVisible
                ? "fixed top-0 right-0 bottom-0 left-0 bg-[#0f0e17]/60  dark:bg-[#0f0e17]/60 z-[99] ease-in duration-[600ms]"
                : "fixed  left-[-100%] top-0 "
            }
            onClick={() => setMobileNavbarVisible(false)}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
