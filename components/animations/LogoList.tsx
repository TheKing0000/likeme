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
    companyIcon: <BsGoogle className=" text-ff  cursor-pointer " size={33} />,
  },
  {
    key: "microsoft",
    companyIcon: (
      <BsMicrosoft className=" text-ff  cursor-pointer " size={33} />
    ),
  },
  {
    key: "facebook",
    companyIcon: <BsFacebook className=" text-ff  cursor-pointer " size={33} />,
  },
  {
    key: "apple",
    companyIcon: <BsApple className=" text-ff  cursor-pointer " size={33} />,
  },
  {
    key: "netflix",
    companyIcon: <SiNetflix className=" text-ff  cursor-pointer " size={33} />,
  },
  {
    key: "twitter",
    companyIcon: <BsTwitter className=" text-ff  cursor-pointer " size={33} />,
  },
];
function LogoList() {
  return (
    <div className="flex overflow-x-hidden">
      {logos.map((logo, index) => {
        return (
          <LogoListItem
            key={logo.key}
            companyIcon={logo.companyIcon}
            index={index}
            numberoflogos={logos.length}
          />
        );
      })}
    </div>
  );
}

export default LogoList;
