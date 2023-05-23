import PricingCard from "@/components/pages/features/pricing/PricingCard";

export default function Validation() {
  return (
    <div className="min-h-screen">
      <div className="min-h-[20vh]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-6 lg:container lg:mx-auto px-4 md:px-10">
        <PricingCard
          recurring={true}
          price="49"
          pricingType="basic"
          features={[
            "Feature listing on website",
            "Limited visibility within the community",
            "Maximum 49 likes per month",
            "Email support",
          ]}
        />
        <PricingCard
          recurring={true}
          price="199"
          pricingType="premium"
          features={[
            "Priority placement and additional marketing support",
            "Highest visibility within the community",
            "Unlimited  likes",
            "Priority phone & email support",
          ]}
        />
        <PricingCard
          recurring={true}
          price="99"
          pricingType="standard"
          features={[
            "Featured listing with increased exposure",
            "Enhanced visibility within the community",
            "Maximum 99 likes per month",
            "Email support",
          ]}
        />
      </div>
    </div>
  );
}
