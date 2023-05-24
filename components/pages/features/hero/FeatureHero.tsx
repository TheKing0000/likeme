import PricingCard from "@/components/pages/features/pricing/PricingCard";
import Image from "next/image";
interface IFeatureHero {
  name: string;
  desc: string;
  imageUrl: string;
}
export default function FeatureHero({ name, desc, imageUrl }: IFeatureHero) {
  return (
    <div className="">
      <div
        className={
          " relative h-[100vh] w-full md:h-[90vh] lg:h-[80vh]  bg-[url('/gifs/questionnaires.gif')]  bg-fixed"
        }
      >
        <div className="absolute top-0 left-0 w-full h-full z-[1]  bg-gradient-to-t from-[#16161a]/80  "></div>
        <div className="absolute w-full h-[90%] top-0 left-0  z-[4]  ">
          <div className="flex flex-col justify-evenly  items-start  h-full container mx-auto  ">
            <div className=" rounded-xl px-10 py-6 text-[#FBFBFB] ">
              <h1 className="text-lg md:text-2xl uppercase mb-8 tracking-wider inline-block border-b-2 border-[#3da9fc] ">
                {name}
              </h1>
              <h2 className="text-lg tracking-wider leading-relaxed text-justify ">
                {desc}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[300px] md:h-[400px] lg:h-[600px] bg-gradient-to-b from-[#16161a] dark:from-[#FBFBFB]/20 ">
        <Image
          priority
          alt="community validation"
          src={imageUrl}
          fill={true}
          className="object-contain object-top -mt-10  z-[2] px-2 aspect-video"
        />
      </div>
    </div>
  );
}
