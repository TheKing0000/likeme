import { motion, Variants } from "framer-motion";
interface IFeatureBenefits {
  benefitIcon: React.ReactNode;
  benefitText: React.ReactNode;
}
const benefitVariant: Variants = {
  initial: { opacity: 0, x: -30 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 130,
    },
  },
};
const FeatureBenefits = ({ benefitIcon, benefitText }: IFeatureBenefits) => {
  return (
    <div>
      <motion.div
        variants={benefitVariant}
        className="flex justify-start items-center text-ff text-base md:text-lg"
      >
        <span className="inline-block pr-3">{benefitIcon}</span> {benefitText}
      </motion.div>
    </div>
  );
};

export default FeatureBenefits;
