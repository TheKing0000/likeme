import NavBar from "@/components/navigation/NavBar";

import Typewriter from "typewriter-effect";
import { Variants, motion } from "framer-motion";
import LogoList from "@/components/animations/LogoList";
import Footer from "@/components/common/Footer";
import { useEffect } from "react";
import ScrollYProgressBar from "@/components/animations/ScrollYProgressBar";
import Testimonialscontainer from "@/components/testimonials/Testimonialscontainer";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
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
  return (
    <main>
      <NavBar />
      <ScrollYProgressBar />
      <section>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="min-h-[100vh] flex justify-start items-center flex-col mt-[1rem] md:mt-[3rem] px-1 w-full">
            <div className=" bg-[#16161a] dark:bg-[#16161a] shadow-lg shadow-[#3da9fc] dark:shadow-[#3da9fc] w-[300px] rounded mb-[1rem] md:mb-0">
              <p className="text-center font-bold text-[#FBFBFB] dark:text-[#3da9fc]  ">
                <span className="text-sm">
                  Unleash Your Startup&apos;s Potential
                </span>
              </p>
            </div>

            <h1 className="uppercase mt-[2rem] md:mt-[6rem] mb-[2rem] text-[#16161a] dark:text-[#FBFBFB] text-center text-lg md:text-2xl ">
              <span className="block">
                Discover, connect, and thrive with our platform&apos;s unique
                blend of
              </span>
              <span className="text-[#3da9fc]  h-[5rem] w-[95%] mx-auto px-1 flex justify-center items-center leading-8">
                <Typewriter
                  options={{
                    strings: [
                      "community validation",
                      "talent search",
                      "targeted questionnaires",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <span className="block"> driving startup success.</span>
            </h1>
            <h2 className="md:w-[60%] w-[90%] text-center text-base">
              Fuel your startup&apos;s success with our innovative platform,
              designed to empower entrepreneurs through the seamless integration
              of community insights, data-driven decision-making, and targeted
              questionnaires, enabling you to unlock untapped opportunities,
              gain valuable market insights, and make informed strategic choices
              that drive accelerated growth and a competitive edge in the
              dynamic business landscape.
            </h2>
            <div className="mt-[2rem] md:mt-[5rem]">
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ delay: 1, type: "spring", stiffness: 130 }}
              >
                <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#3da9fc] px-6 text-base font-medium tracking-wide text-white shadow-md shadow-[#3da9fc] transition duration-300 hover:bg-[#3da9fc] hover:shadow-lg hover:shadow-[#3da9fc] focus:bg-[#3da9fc] focus:shadow-md focus:shadow-[#3da9fc] focus-visible:outline-none hover:scale-110 active:scale-95">
                  <span>Try for free</span>
                </button>
              </motion.div>
            </div>

            <div className=" w-full md:mt-[10rem]  mt-[5rem] ">
              <LogoList />
            </div>
          </div>
        </motion.div>
      </section>

      <div className=""></div>
      {/* <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ transition: { duration: 3 } }}
      >
        Hellloo
      </motion.h1> */}
      <div className="container mx-auto px-5 md:px-0 my-7">
        <Testimonialscontainer />
      </div>

      <Footer />
    </main>
  );
}
//ANIMATE ON SCROLL
// <div className="">
//   {/* animate on scroll */}
//   <motion.h1
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ amount: "some" }}
//     transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
//     className="text-center font-bold bg-red-400 h-52"
//   >
//     Hello
//   </motion.h1>
// </div>
