import { FaComments, FaUsers } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

import FeatureBenefits from "@/components/common/FeatureBenefits";
import Image from "next/image";
import Link from "next/link";
interface ICommunityValidation {}
const benefits = [
  {
    key: "community",
    benefitText: (
      <p>
        Build credibility and trust by leveraging{" "}
        <span className="text-[#3da9fc] font-bold  tracking-wide">
          community
        </span>{" "}
        validation.
      </p>
    ),
    benefitIcon: <FaUsers className="text-[#3da9fc] text-[2.5rem]" />,
  },
  {
    key: "feedback",
    benefitText: (
      <p>
        Receive authentic user{" "}
        <span className="text-[#3da9fc] font-bold  tracking-wide">
          feedback
        </span>{" "}
        and insights to refine your product or service.
      </p>
    ),
    benefitIcon: <FaComments className="text-[#3da9fc] text-[2.5rem]" />,
  },
  {
    key: "visibility",
    benefitText: (
      <p>
        Increase brand{" "}
        <span className="text-[#3da9fc] font-bold  tracking-wide">
          visibility
        </span>{" "}
        and awareness among a targeted audience.
      </p>
    ),
    benefitIcon: <MdVisibility className="text-[#3da9fc] text-[2.5rem]" />,
  },
];

const CommunityValidation = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh] lg:min-h-[70vh] gap-12">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <div>
            <h4 className=" text-xl md:text-2xl text-ff inline-block border-b-2 border-[#3da9fc] mb-4">
              Community Validation
            </h4>
          </div>
          <p className="mb-[3rem]  lg:mt-2 md:text-lg text-justify">
            Tap into the power of community validation. Showcase your startup to
            our vibrant community, gaining invaluable feedback and validation.
            Benefit from the collective insights and expertise of like-minded
            individuals to refine and elevate your ideas, products, or services.
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
                  <Link href={"/services/validation"} className=" ">
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
        <div>
          <div className="flex h-full">
            <div className="relative h-[300px] lg:h-full w-full">
              <Image
                alt="community validation"
                src="/images/communityvalidation.jpg"
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

export default CommunityValidation;
