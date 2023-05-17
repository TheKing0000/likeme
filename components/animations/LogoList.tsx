import React from "react";
import {
  BsApple,
  BsFacebook,
  BsGoogle,
  BsMicrosoft,
  BsTwitter,
} from "react-icons/bs";
import { SiNetflix } from "react-icons/si";
import LogoListItem from "./LogoListItem";

const logos = [
  {
    key: "google",
    companyIcon: (
      <BsGoogle className=" text-ff  cursor-pointer group-hover:scale-110 transition-all duration-300 hover:text-[#3da9fc] text-[2rem] md:text-[2.5rem] hover:-rotate-12" />
    ),
  },
  {
    key: "microsoft",
    companyIcon: (
      <BsMicrosoft className=" text-ff  cursor-pointer group-hover:scale-110 transition-all duration-300 hover:text-[#3da9fc] text-[2rem] md:text-[2.5rem] hover:rotate-12" />
    ),
  },
  {
    key: "facebook",
    companyIcon: (
      <BsFacebook className=" text-ff  cursor-pointer group-hover:scale-110 transition-all duration-300 hover:text-[#3da9fc] text-[2rem] md:text-[2.5rem] hover:-rotate-12" />
    ),
  },
  {
    key: "apple",
    companyIcon: (
      <BsApple className=" text-ff  cursor-pointer group-hover:scale-110 transition-all duration-300 hover:text-[#3da9fc] text-[2rem] md:text-[2.5rem] hover:rotate-12" />
    ),
  },
  {
    key: "netflix",
    companyIcon: (
      <SiNetflix className=" text-ff  cursor-pointer group-hover:scale-110 transition-all duration-300 hover:text-[#3da9fc] text-[2rem] md:text-[2.5rem] hover:-rotate-12" />
    ),
  },
  {
    key: "twitter",
    companyIcon: (
      <BsTwitter className=" text-ff  cursor-pointer group-hover:scale-110 transition-all duration-300 hover:text-[#3da9fc] text-[2rem] md:text-[2.5rem] hover:rotate-12" />
    ),
  },
];
function LogoList() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 container mx-auto gap-10 md:gap-15 lg:gap-20">
      {logos.map((logo) => {
        return <LogoListItem key={logo.key} companyIcon={logo.companyIcon} />;
      })}
    </div>
  );
}

export default LogoList;
