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
      <div className="flex h-full cursor-move">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: (index + 1) / 10 },
          }}
          viewport={{ amount: "some" }}
          transition={{
            delay: 0.5,
          }}
          drag
          dragSnapToOrigin
        >
          <div className=" text-center border dark:border-[#FBFBFB] border-[#16161a]  rounded-xl shadow-lg dark:shadow-[#FBFBFB] shadow-[#16161a]  hover:rounded-3xl transition-all duration-300 hover:bg-[#3da9fc] hover:bg-opacity-90 hover:scale-105 group active:scale-95 overflow-hidden">
            <div className=" p-3 ">
              <figure className=" ">
                <blockquote className="p-6  text-lg md:text-2xl leading-relaxed text-[#16161a] dark:text-[#FBFBFB]">
                  <p>{text}</p>
                </blockquote>
                <div className="flex flex-grow w-full justify-center items-center">
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                  <AiFillStar className="text-[#ffd803]" size={30} />
                </div>
                <figcaption className="flex items-center gap-4 p-6 pt-2 text-sm text-[#16161a] dark:text-[#FBFBFB]">
                  <div className="mx-auto flex flex-col justify-center gap-1">
                    <span className="text-[#16161a] dark:text-[#FBFBFB]  text-sm    transition duration-300">
                      {name}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ffd803]"></span>
                    </span>
                    <span className="text-[#16161a] dark:text-[#FBFBFB]  text-sm    transition duration-300">
                      {company}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ffd803]"></span>
                    </span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.div>
      </div>
      {/*      <!-- End Simple basic centered lg sized testimonial --> */}
    </>
  );
}
