interface IFeatureBenefits {
  benefitIcon: React.ReactNode;
  benefitText: React.ReactNode;
}

const FeatureBenefits = ({ benefitIcon, benefitText }: IFeatureBenefits) => {
  return (
    <div>
      <div className="flex justify-start items-center text-ff text-base md:text-lg">
        <span className="inline-block pr-3">{benefitIcon}</span> {benefitText}
      </div>
    </div>
  );
};

export default FeatureBenefits;
