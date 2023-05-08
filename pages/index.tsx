import NavBar from "@/components/navigation/NavBar";

import Typewriter from "typewriter-effect";
import { Variants, motion, AnimatePresence } from "framer-motion";
import LogoList from "@/components/animations/LogoList";
import Footer from "@/components/common/Footer";

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
      // when:"beforeChildren"
      // staggerChildren:0.2
    },
  },
};
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
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
      <motion.section
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="min-h-[100vh] flex justify-start  items-center flex-col mt-[1rem] md:mt-[3rem]"
      >
        <div className=" bg-[#16161a] dark:bg-[#16161a] shadow-lg shadow-[#3da9fc] dark:shadow-[#3da9fc] w-[300px] rounded">
          <p className="text-center font-bold text-[#FBFBFB] dark:text-[#3da9fc]  ">
            <span className="text-sm">
              Unleash Your Startup&apos;s Potential
            </span>
          </p>
        </div>

        <h1 className="uppercase mt-[2rem] md:mt-[6rem] mb-[2rem] text-[#16161a] dark:text-[#FBFBFB] text-center text-2xl ">
          <span className="block">
            Discover, connect, and thrive with our platform&apos;s unique blend
            of
          </span>
          <span className="text-[#3da9fc] block my-1">
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
        <h2 className="md:w-[60%] w-[90%] text-center">
          Fuel your startup&apos;s success with our innovative platform,
          designed to empower entrepreneurs through the seamless integration of
          community insights, data-driven decision-making, and targeted
          questionnaires, enabling you to unlock untapped opportunities, gain
          valuable market insights, and make informed strategic choices that
          drive accelerated growth and a competitive edge in the dynamic
          business landscape.
        </h2>
        <div className="mt-[2rem] md:mt-[5rem]">
          <motion.button
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.8,
                type: "spring",
                stiffness: 120,
              },
            }}
            whileHover={{
              scale: [1, 1.1, 1.15, 1.1, 1.2, 1.1, 1.25, 1.15, 1.1],
            }}
            className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#3da9fc] px-6 text-base font-medium tracking-wide text-white shadow-md shadow-[#3da9fc] transition duration-300 hover:bg-[#3da9fc] hover:shadow-lg hover:shadow-[#3da9fc] focus:bg-[#3da9fc] focus:shadow-md focus:shadow-[#3da9fc] focus-visible:outline-none "
          >
            <span>Try for free</span>
          </motion.button>
        </div>
        <div className=" w-full md:mt-[10rem]  mt-[10vh]">
          <LogoList />
        </div>
      </motion.section>

      <div className="h-screen"></div>
      <Footer />
    </main>
  );
}
