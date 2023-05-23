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
      <div className="relative h-[100vh] md:h-[90vh] lg:h-[80vh] w-full">
        <div className="absolute top-0 left-0 w-full h-full z-[1]  bg-gradient-to-t from-[#FBFBFB]  dark:from-[#16161a] dark:to-[#16161a]/50 "></div>
        <video
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          src="/videos/proba.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute w-full h-[90%] top-0 left-0  z-[4]  ">
          <div className="flex flex-col justify-evenly  items-start  h-full container mx-auto  ">
            <div className="backdrop-blur-md  rounded-xl px-10 py-6 text-ff ">
              <h1 className="text-lg md:text-2xl uppercase mb-8 tracking-wider inline-block border-b-2 border-[#3da9fc] ">
                {name}
              </h1>
              <h2 className="text-lg tracking-wider leading-relaxed text-justify ">
                {desc}
              </h2>
            </div>
            {/* <div className="text-center mt-10">
              <button className="rounded-lg bg-[#3da9fc] px-8 py-3 md:px-8 md:py-3 text-base font-medium tracking-wide  shadow-md shadow-[#3da9fc] transition duration-300 hover:bg-[#3da9fc] hover:shadow-lg hover:shadow-[#3da9fc] focus:bg-[#3da9fc] focus:shadow-md focus:shadow-[#3da9fc]   text-[#FBFBFB] ">
                Get started
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative h-[300px] md:h-[400px] lg:h-[600px] ">
        <Image
          alt="community validation"
          src={imageUrl}
          fill={true}
          className="object-contain object-top -mt-10  z-[2] px-2"
        />
      </div>
    </div>
  );
}
