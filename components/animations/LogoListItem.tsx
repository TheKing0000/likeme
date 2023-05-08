import React, { ReactNode } from "react";
import { Variants, motion } from "framer-motion";
type ILogoListItem = {
  companyIcon: ReactNode;
  index: number;
  numberoflogos: number;
};
function LogoListItem({ companyIcon, index, numberoflogos }: ILogoListItem) {
  const logoVariants: Variants = {
    start: {
      x: `calc( ${numberoflogos * 20}rem)`, // start from the right side of the screen
    },
    end: {
      x: `calc( -${numberoflogos * 20}rem)`, // move to the left side of the screen
      transition: {
        duration: 30,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    hover: {
      scale: 1.4,
      rotate: 360,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[13rem] h-32  m-4"
      variants={logoVariants}
      initial="start"
      animate="end"
      whileHover="hover"
    >
      <div className="flex justify-center items-center h-full">
        {companyIcon}
      </div>
    </motion.div>
  );
}

export default LogoListItem;
