import { GiHamburgerMenu } from "react-icons/gi";

import {
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineLike,
} from "react-icons/ai";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

import NavLinkDesktop from "./NavLinkDesktop";
import SetTheme from "./SetTheme";
import NavLinkMobile from "./NavLinkMobile";

const navLinks = [
  { linkText: "Home", hrefText: "/" },
  { linkText: "Validation", hrefText: "/services/validation" },
  { linkText: "Jobs", hrefText: "/services/jobs" },
  { linkText: "Questionnaires", hrefText: "/services/questionnaires" },
];
const mobileNavContainerVariant: Variants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

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
  const handleNavbarClose = () => {
    setMobileNavbarVisible(false);
  };
  return (
    <header>
      <nav>
        <div className="relative h-14  w-full mb-5">
          <div
            className={
              showShadow
                ? "fixed top-0 left-0 right-0 z-[98] h-14  bg-ff   shadow-md shadow-[#3da9fc]  mb-5 transition duration-[200ms]"
                : "fixed top-0 left-0 right-0 z-[98] h-14  bg-ff   mb-5 transition duration-[200ms]"
            }
          >
            {/* Mobil */}
            <div className="flex flex-row justify-between items-center h-full px-2 md:hidden">
              <Link href={"/"}>
                <h1 className="text-ff cursor-pointer">LikeMe</h1>
              </Link>

              <GiHamburgerMenu
                onClick={() => setMobileNavbarVisible(!mobileNavbarVisible)}
                className=" text-ff  cursor-pointer"
                size={25}
              />
            </div>
            {/* Large Screen  */}
            <div className=" flex-row items-center h-full px-8 hidden md:flex">
              <div className="flex-none">
                {/* <h1 className="text-[#3da9fc] cursor-pointer">LikeMe</h1> */}
                <Link href="/">
                  {/* <AiOutlineLike
                    className=" text-ff  cursor-pointer "
                    size={30}
                  /> */}
                  <h1 className="font-bold  text-ff  hover:text-[#3da9fc] dark:hover:text-[#3da9fc] transition-colors duration-500">
                    LikeMe
                  </h1>
                </Link>
              </div>
              <div className="space-x-7 flex-grow flex justify-end items-center pr-5">
                {navLinks.map(({ linkText, hrefText }) => {
                  return (
                    <NavLinkDesktop
                      key={linkText}
                      hrefText={hrefText}
                      linkText={linkText}
                    />
                  );
                })}
              </div>
              <div className="flex-none">
                <div className="flex justify-center  items-center space-x-2">
                  <Link href="/signup">
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
                  </Link>
                  <Link href="/login">
                    <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#FBFBFB] dark:bg-[#16161a] px-4 text-sm font-medium tracking-wide  transition duration-300 hover:bg-[#16161a]  dark:hover:bg-[#FBFBFB]    group">
                      <span className="order-2  text-[#16161a] dark:text-[#FBFBFB] group-hover:text-[#FBFBFB] dark:group-hover:text-[#16161a]">
                        Login
                      </span>
                    </button>
                  </Link>
                  <SetTheme />
                </div>
              </div>
            </div>
          </div>
          {/* mobile Navbar */}
          {mobileNavbarVisible && (
            <div>
              <motion.div
                initial="initial"
                animate="animate"
                variants={mobileNavContainerVariant}
                className={
                  "z-[100] overflow-y-auto fixed top-0 left-0  w-[85%] sm:w-[90%]   bg-[#fffffe] dark:bg-[#0f0e17]  h-screen"
                }
              >
                <div className="relative flex flex-col  items-center p-4 h-screen">
                  <div className="flex justify-between items-center w-full ">
                    <AiOutlineClose
                      onClick={() => setMobileNavbarVisible(false)}
                      className="text-[#16161a] dark:text-[#FBFBFB] cursor-pointer"
                      size={25}
                    />

                    <SetTheme />
                  </div>
                  <div className=" grow">
                    <div className="justify-center h-full items-center flex w-full overflow-y-auto">
                      <div className="   overflow-x-hidden w-full space-y-11 text-center flex flex-col justify-evenly  ">
                        {navLinks.map(({ linkText, hrefText }) => {
                          return (
                            <NavLinkMobile
                              handleNavbarClose={handleNavbarClose}
                              key={linkText}
                              hrefText={hrefText}
                              linkText={linkText}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex  justify-center  items-center space-x-2">
                      <Link href="/signup">
                        <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#16161a] dark:bg-[#FBFBFB] px-4   tracking-wide  transition duration-300 dark:hover:bg-[#FBFBFB]/70 hover:bg-[#16161a]/80 focus:bg-[#FBFBFB] focus-visible:outline-none  font-bold">
                          <span className="order-2 text-[#FBFBFB] dark:text-[#16161a]">
                            <Link href="/signup">Get started</Link>
                          </span>
                          <span className="">
                            <AiOutlineUserAdd
                              className="text-[#FBFBFB] dark:text-[#16161a] cursor-pointer"
                              size={20}
                            />
                          </span>
                        </button>
                      </Link>
                      <Link href="/login">
                        <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#FBFBFB] dark:bg-[#16161a] px-4   tracking-wide  transition duration-300 hover:bg-[#16161a]  dark:hover:bg-[#FBFBFB] font-bold   group">
                          <span className="order-2  text-[#16161a] dark:text-[#FBFBFB] group-hover:text-[#FBFBFB] dark:group-hover:text-[#16161a]">
                            Login
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

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
