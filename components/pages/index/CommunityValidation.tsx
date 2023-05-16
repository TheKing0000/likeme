import { FaComments, FaUsers } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { motion, Variants } from "framer-motion";
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

const benefitsContainerVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const benefitImageVariant: Variants = {
  initial: { opacity: 0, x: 100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CommunityValidation = ({}) => {
  return (
    <div>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={benefitsContainerVariants}
        viewport={{ amount: "some", once: true }}
      >
        <h4 className="text-xl md:text-2xl text-ff inline-block border-b-2 border-[#3da9fc] mb-4">
          Community Validation
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] md:min-h-[70vh] gap-12">
          <div className="">
            <div className="block md:flex md:flex-col md:h-full ">
              <p className="mb-[3rem] md:mb-12 md:mt-2 text-justify md:text-lg">
                Tap into the power of community validation. Showcase your
                startup to our vibrant community, gaining invaluable feedback
                and validation. Benefit from the collective insights and
                expertise of like-minded individuals to refine and elevate your
                ideas, products, or services.
              </p>
              <div className="md:flex-grow md:h-full  block md:flex md:flex-col md:space-y-4">
                <div className="md:flex-shrink-0 space-y-8 md:space-y-5 block md:flex md:flex-col md:justify-center my-[3rem] md:my-0">
                  <div className="my-5">
                    <motion.h5
                      variants={benefitsContainerVariants}
                      className="text-ff text-lg md:text-xl font-bold inline-block border-b-2 border-[#3da9fc]"
                    >
                      Benefits
                    </motion.h5>
                  </div>
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
                <div className="md:flex-grow">
                  <motion.div
                    variants={benefitsContainerVariants}
                    className="flex justify-center items-center h-full"
                  >
                    <Link
                      href={"/services/validation"}
                      className="w-full text-center mt-[3rem]  mb-[1.5rem] md:my-0"
                    >
                      <button className="  rounded-full bg-[#3da9fc] px-6 py-3 text-base font-medium tracking-wide  shadow-md shadow-[#3da9fc] transition duration-300 hover:bg-[#3da9fc] hover:shadow-lg hover:shadow-[#3da9fc] focus:bg-[#3da9fc] focus:shadow-md focus:shadow-[#3da9fc] focus-visible:outline-none hover:scale-110 active:scale-95 text-[#FBFBFB] w-[50%] mx-auto">
                        <span>Get Started</span>
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="block  md:flex md:h-full">
              <motion.div
                variants={benefitImageVariant}
                className="relative md:flex-grow h-[300px] md:h-full"
              >
                <Image
                  alt="community validation"
                  src="/images/communityvalidation.jpg"
                  fill={true}
                  className="object-contain rounded-md"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityValidation;
