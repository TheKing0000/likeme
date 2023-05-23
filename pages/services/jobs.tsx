import FeatureHero from "@/components/pages/features/hero/FeatureHero";
import PricingCard from "@/components/pages/features/pricing/PricingCard";

export default function Jobs() {
  return (
    <div>
      <div>
        <FeatureHero
          name="Job Search"
          desc="Welcome to our dynamic Job Search feature, designed to connect startups with talented individuals who are passionate about joining your team. Post job openings, attract ambitious individuals with an entrepreneurial spirit, and build a motivated team dedicated to your startup's success. Access a diverse talent pool, find skilled team members willing to contribute their expertise for equity, and accelerate your startup's growth."
          imageUrl="/images/communityvalidation.jpg"
        />
      </div>

      <div className="min-h-[20vh]"></div>
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
