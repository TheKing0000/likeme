interface IPricingCard {
  pricingType: "basic" | "standard" | "premium";
  features: string[];
  price: string;
  recurring: boolean;
}
import { TiTick } from "react-icons/ti";
const cardDesc = {
  basic: "Essential features at unbeatable price.",
  standard: "Enhanced features for growing businesses.",
  premium: "Advanced features for maximum growth.",
};
export default function PricingCard({
  pricingType,
  features,
  price,
  recurring,
}: IPricingCard) {
  const premium = pricingType === "premium";
  return (
    <>
      <div
        className={`${
          premium
            ? " shadow-xl hover:shadow-2xl shadow-[#3da9fc] dark:shadow-[#3da9fc] hover:shadow-[#3da9fc] dark:hover:shadow-[#3da9fc]"
            : "shadow hover:shadow-xl shadow-[#16161a] dark:shadow-[#fffffe] hover:shadow-[#3da9fc] dark:hover:shadow-[#3da9fc]"
        } min-h-[24rem] md:min-h-[30rem] rounded   transition-all duration-500`}
      >
        <div className="flex flex-col h-full p-3 md:p-5 space-y-4">
          <h3 className="text-xl font-bold text-ff">
            <span className="capitalize">{pricingType}</span>
            <span className="block text-sm font-normal ">
              {cardDesc[pricingType]}
            </span>
          </h3>
          <h4 className="text-ff">
            <span className="text-3xl">$</span>
            <span className="text-4xl font-bold tracking-tighter ">
              {price}
            </span>
            {recurring && <span className="text-sm"> / month</span>}
          </h4>
          <div className="flex-grow space-y-3 md:space-y-6 my-4">
            {features.map((feature) => {
              return (
                <p className="flex flex-row space-x-2" key={feature}>
                  <span className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full r-bg-ff">
                    <TiTick className="text-[1.5rem] r-text-ff" />
                  </span>
                  <span className="">{feature}</span>
                </p>
              );
            })}
          </div>
          <button
            className={`${
              premium
                ? "dark:bg-[#fffffe] bg-[#16161a] dark:text-[#16161a] text-[#fffffe]"
                : "bg-ff"
            } border-ff border-[1px]  h-12  px-6 text-sm font-medium tracking-wide text-ff  rounded shadow-sm whitespace-nowrap bg-ff  hover:shadow-lg  dark:shadow-[#fffffe] shadow-[#16161a] `}
          >
            <span>Select Plan</span>
          </button>
        </div>
      </div>
    </>
  );
}
