import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
interface ITestimonials {
  text: string;
  name: string;
  company: string;
  index: number;
}
export default function Testimonials({
  text,
  name,
  company,
  index,
}: ITestimonials) {
  return (
    <>
      {/*      <!-- Component: Simple basic centered lg sized testimonial --> */}
      <div className="h-full flex cursor-pointer">
        <motion.div
          initial={{ opacity: 0, y: 220 }}
          whileInView={{
            opacity: 1,
            y: 0,

            transition: {
              duration: 1.25,
              delay: (index + 1) / 10,
            },
          }}
          // viewport={{}}
          viewport={{ amount: "some", once: true }}
          transition={{
            delay: 0.5,
          }}
          // drag
          // dragSnapToOrigin
        >
          <div className=" text-center border dark:border-[#5f6c7b] border-[#5f6c7b]  rounded-xl shadow-md dark:shadow-[#5f6c7b] shadow-[#5f6c7b]  hover:rounded-3xl transition-all duration-300    md:hover:scale-105 group active:scale-95 h-full">
            <div className="   h-full flex">
              <div className=" flex flex-col items-center h-full">
                <div className="p-6 mt-4 text-lg md:text-xl leading-relaxed text-[#16161a] dark:text-[#FBFBFB]">
                  <p>{text}</p>
                </div>
                <div className="flex-grow w-full flex-row flex items-end justify-center">
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                </div>
                <div className="inline-block p-6 pt-2 text-sm text-[#16161a] dark:text-[#FBFBFB]">
                  <div className="iztems-center flex flex-col justify-center gap-1">
                    <span className="text-[#16161a] dark:text-[#FBFBFB]  text-sm    transition duration-300">
                      {name}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ffd803]"></span>
                    </span>
                    <span className="text-[#16161a] dark:text-[#FBFBFB]  text-sm    transition duration-300">
                      {company}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ffd803]"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/*      <!-- End Simple basic centered lg sized testimonial --> */}
    </>
  );
}
