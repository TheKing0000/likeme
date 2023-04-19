import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
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
    <div className="relative h-14  w-full mb-5">
      {/* Mobil */}
      <div
        className={
          showShadow
            ? "fixed z-[98] h-14 bg-[#fffffe] dark:bg-[#16161a]  shadow-md shadow-[#3da9fc] w-full mb-5 duration-[400ms]"
            : "fixed z-[98] h-14 bg-[#fffffe] dark:bg-[#16161a] w-full mb-5"
        }
      >
        <div className="flex flex-row justify-between items-center h-full px-2">
          <h1 className="text-[#3da9fc] cursor-pointer">LikeMe</h1>
          <GiHamburgerMenu
            onClick={() => setMobileNavbarVisible(!mobileNavbarVisible)}
            className="text-[#3da9fc] dark:text-[#3da9fc] cursor-pointer"
            size={25}
          />
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
      {/* Large Screen  */}
    </div>
  );
};

export default NavBar;
