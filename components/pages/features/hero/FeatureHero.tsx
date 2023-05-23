import PricingCard from "@/components/pages/features/pricing/PricingCard";
import Image from "next/image";

export default function FeatureHero() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center">
      <div className="bg-ff rounded-xl px-4 mx-4">
        <div className="max-w-xl min-h-[40vh]">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            ducimus quia laudantium vel inventore quasi sit nisi a totam error,
            provident molestiae consequatur. Minima veniam exercitationem,
            deleniti vitae voluptas tempore.
          </div>
        </div>
      </div>
      <Image
        alt="community validation"
        src="/images/communityvalidation.jpg"
        fill={true}
        className="object-cover -z-[1] "
      />
    </div>
  );
}
