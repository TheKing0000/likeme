import PricingCard from "@/components/pricing/PricingCard";

export default function Jobs() {
  return (
    <div className="min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-6 lg:container lg:mx-auto px-4 md:px-10">
        <PricingCard
          recurring={false}
          price="49"
          pricingType="basic"
          features={[
            "5 job postings",
            "Standard visibility",
            "Maximum 100 applications",
            "Email support",
          ]}
        />
        <PricingCard
          recurring={false}
          price="199"
          pricingType="premium"
          features={[
            "Unlimited job postings",
            "Premium visibility",
            "Unlimited  applications",
            "Priority phone & email support",
          ]}
        />
        <PricingCard
          recurring={false}
          price="99"
          pricingType="standard"
          features={[
            "10 job postings",
            "Enhanced visibility",
            "Maximum 300 applications",
            "Email support",
          ]}
        />
      </div>
    </div>
  );
}
