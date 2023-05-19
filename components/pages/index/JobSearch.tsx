import { FaHandshake, FaBullhorn } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

import FeatureBenefits from "@/components/common/FeatureBenefits";
import Image from "next/image";
import Link from "next/link";
interface IJobSearch {}
const benefits = [
  {
    key: "individuals",
    benefitText: (
      <p>
        Post job openings and attract{" "}
        <span className="text-[#3da9fc] font-bold  tracking-wide">
          ambitious individuals
        </span>{" "}
        with an entrepreneurial spirit.
      </p>
    ),
    benefitIcon: <FaBullhorn className="text-[#3da9fc] text-[2.5rem]" />,
  },
  {
    key: "talentpool",
    benefitText: (
      <p>
        Access a diverse{" "}
        <span className="text-[#3da9fc] font-bold  tracking-wide">
          talent pool
        </span>{" "}
        of innovative thinkers and self-starters.
      </p>
    ),
    benefitIcon: <AiOutlineTeam className="text-[#3da9fc] text-[2.5rem]" />,
  },
  {
    key: "motivated",
    benefitText: (
      <p>
        Find{" "}
        <span className="text-[#3da9fc] font-bold  tracking-wide">
          motivated team
        </span>{" "}
        members willing to contribute their skills in exchange for equity.
      </p>
    ),
    benefitIcon: <FaHandshake className="text-[#3da9fc] text-[2.5rem]" />,
  },
];

const JobSearch = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh] lg:min-h-[70vh] gap-12">
        {/* LEFT */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <div>
            <h4 className=" text-xl md:text-2xl text-ff inline-block border-b-2 border-[#3da9fc] mb-4">
              Job Search
            </h4>
          </div>
          <p className="mb-[3rem]  lg:mt-2 md:text-lg text-justify">
            Unlock your startup&apos;s potential with our Job Search feature.
            Connect with motivated individuals who are passionate about joining
            your venture, offering their skills and expertise in exchange for
            equity. Find the perfect team members to drive your startup towards
            success.
          </p>
          <div>
            <div className="my-5">
              <h5 className="text-ff text-lg md:text-xl font-bold inline-block border-b-2 border-[#3da9fc]">
                Benefits
              </h5>
            </div>
            <div className="flex flex-col justify-start items-center">
              <div className="">
                <div className="flex flex-col space-y-6 md:space-y-7">
                  {benefits.map(({ key, benefitText, benefitIcon }) => {
                    return (
                      <FeatureBenefits
                        key={key}
                        benefitIcon={benefitIcon}
                        benefitText={benefitText}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="mt-[3rem] md:mt-[5rem]">
                <div className="flex justify-center items-center h-full">
                  <Link href={"/services/jobs"} className=" ">
                    <button className="  rounded-lg bg-[#3da9fc] px-8 py-3 md:px-12 md:py-4 text-base font-medium tracking-wide  shadow-md shadow-[#3da9fc] transition duration-300 hover:bg-[#3da9fc] hover:shadow-lg hover:shadow-[#3da9fc] focus:bg-[#3da9fc] focus:shadow-md focus:shadow-[#3da9fc] focus-visible:outline-none hover:scale-110 active:scale-95 text-[#FBFBFB]    ">
                      <span>Get Started</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className=" order-2 lg:order-1">
          <div className="flex h-full">
            <div className="relative h-[300px] lg:h-full w-full">
              <Image
                alt="community validation"
                src="/images/jobsearch.jpg"
                fill={true}
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
