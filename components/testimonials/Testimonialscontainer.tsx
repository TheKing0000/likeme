import Testimonials from "./Testimonials";
import { AiOutlineDrag } from "react-icons/ai";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "This platform provided invaluable feedback for my startup. The community engagement and reviews helped me understand market demand and refine my product. A must-have resource!",
    name: "Tim Cook",
    company: "CEO of Applee",
  },
  {
    text: "Finding talent was effortless with this platform. I received high-quality applicants willing to work for equity. Highly recommended!",
    name: "Satya Nadella",
    company: " CEO of Microsoftt",
  },
  {
    text: "Running targeted questionnaires made easy. Connect with our target audience, gather insights, and make data-driven decisions. A fantastic tool for market research!",
    name: "Elon Musk",
    company: " CEO of Teslaa",
  },
  {
    text: "Participating in surveys through this platform was a win-win experience. Share opinions, earn cash rewards. Make my voice heard and earn extra income!",
    name: "Christian Klein",
    company: " CEO of SAPP",
  },
];
const Testimonialscontainer = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
        viewport={{ amount: "some", once: true }}
      >
        <h3 className="text-lg md:text-xl text-center font-bold  flex w-full justify-center items-center text-[#16161a] dark:text-[#FBFBFB] mb-6">
          <span>See why our clients love working with us:</span>
        </h3>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 md:gap-12 my-5 md:my-10">
        {testimonials.map(({ text, name, company }, index) => {
          return (
            <Testimonials
              text={text}
              name={name}
              company={company}
              key={company}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonialscontainer;
