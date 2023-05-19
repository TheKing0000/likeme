import Typewriter from "typewriter-effect";
import LogoList from "@/components/animations/LogoList";

import Testimonialscontainer from "@/components/testimonials/Testimonialscontainer";
import Image from "next/image";
import CommunityValidation from "@/components/pages/index/CommunityValidation";
import JobSearch from "@/components/pages/index/JobSearch";
import Questionnaires from "@/components/pages/index/Questionnaires";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div>
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
              <div>
                <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#3da9fc] px-6 text-base font-medium tracking-wide text-white shadow-md shadow-[#3da9fc] transition duration-300 hover:bg-[#3da9fc] hover:shadow-lg hover:shadow-[#3da9fc] focus:bg-[#3da9fc] focus:shadow-md focus:shadow-[#3da9fc] focus-visible:outline-none hover:scale-110 active:scale-95">
                  <span>Try for free</span>
                </button>
              </div>
            </div>

            <div className=" w-full md:mt-[10rem]  mt-[5rem] ">
              <LogoList />
            </div>
          </div>
        </div>
      </section>
      <div className="sectiondivider"></div>
      {/* FEATURES */}
      <section>
        <div className=" px-5 md:px-10 ">
          <div className="text-center ">
            <h3 className="text-lg md:text-2xl text-ff mb-[8rem] md:mb-[10rem] shadow-lg  shadow-[#3da9fc] px-4 pb-2 inline-block md:hover:shadow-xl md:hover:shadow-[#3da9fc] transition-all duration-300">
              Uncover the Hidden Gems of Our Platform
            </h3>
          </div>

          <div className="container mx-auto px-2">
            {/* Community validation */}
            <CommunityValidation />
            <div className="sectiondivider"></div>
            <JobSearch />
            <div className="sectiondivider"></div>
            <Questionnaires />
          </div>
        </div>
      </section>
      <div className="sectiondivider"></div>
      {/* TESTIMONIALS */}
      <section>
        <div className="container mx-auto px-5 md:px-0 py-5">
          <Testimonialscontainer />
        </div>
      </section>

      <div className="sectiondivider"></div>
    </>
  );
}
