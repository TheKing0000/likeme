import Testimonials from "./Testimonials";
import { AiOutlineDrag } from "react-icons/ai";
const testimonials = [
  {
    text: "This platform provided invaluable feedback for my startup. The community engagement and reviews helped me understand market demand and refine my product. A must-have resource!",
    name: "Tim Cook",
    company: "CEO of Apple",
  },
  {
    text: "Finding talent was effortless with this platform. I received high-quality applicants willing to work for equity. Highly recommended!",
    name: "Satya Nadella",
    company: " CEO of Microsoft",
  },
  {
    text: "Running targeted questionnaires made easy. Connect with our target audience, gather insights, and make data-driven decisions. A fantastic tool for market research!",
    name: "Elon Musk",
    company: " CEO of Tesla",
  },
  {
    text: "Participating in surveys through this platform was a win-win experience. Share opinions, earn cash rewards. Make my voice heard and earn extra income!",
    name: "Christian Klein",
    company: " CEO of SAP",
  },
];
const Testimonialscontainer = () => {
  return (
    <div>
      <h3 className="text-lg font-bold  flex w-full justify-center items-center text-[#16161a] dark:text-[#FBFBFB]">
        <span>
          Please try to drag our Testimonials away if you agree with them
        </span>
        <span>
          <AiOutlineDrag
            className="text-[#16161a] dark:text-[#FBFBFB]"
            size={30}
          />
        </span>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 my-8">
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
