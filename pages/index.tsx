import NavBar from "@/components/navigation/NavBar";

import Typewriter from "typewriter-effect";
import { Variants, motion } from "framer-motion";
import LogoList from "@/components/animations/LogoList";
import Footer from "@/components/common/Footer";
import { useEffect } from "react";
import ScrollYProgressBar from "@/components/animations/ScrollYProgressBar";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      // when:"beforeChildren"
      // staggerChildren:0.2
    },
  },
};

// const keyframesVariants: Variants = {
//   initial: {},
//   animate: {
//     x: [-20, 0, 20, 0],
//     transition: { repeat: Infinity },
//   },
// };
// animate routes
{
  /* <AnimatePresence mode='wait'>
  <motion.div exit={{ y: -1000 }}></motion.div>
</AnimatePresence>; */
}

export default function Home() {
  // Scroll to the top of the page at initial render
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <main>
      {/* <NavBar /> */}
      <ScrollYProgressBar />
      <div></div>

      {/* <div className=" w-full md:mt-[10rem]  mt-[5rem] ">
        <LogoList />
      </div> */}

      <div className="h-screen"></div>
      {/* <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ transition: { duration: 3 } }}
      >
        Hellloo
      </motion.h1> */}
      <div className="">
        {/* animate on scroll */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "some" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
          className="text-center font-bold bg-red-400 h-52"
        >
          Hello
        </motion.h1>
      </div>
      <Footer />
    </main>
  );
}
