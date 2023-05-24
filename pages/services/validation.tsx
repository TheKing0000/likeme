import FeatureHero from "@/components/pages/features/hero/FeatureHero";
import PricingCard from "@/components/pages/features/pricing/PricingCard";

export default function Validation() {
  return (
    <div>
      <div>
        <FeatureHero
          name="Community Validation"
          desc="Welcome to our vibrant Community Validation feature, where startups showcase their ideas and gain valuable validation. Engage with our active community, receive authentic user feedback, and refine your product or service. Increase brand visibility, build credibility, and leverage community validation to establish trust among your target audience."
          imageUrl="/images/features/communityvalidation.jpg"
        />
      </div>

      <div className="sectiondivider"></div>
      {/* PRICING */}
      <section>
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
      </section>
      <div className="sectiondivider"></div>
    </div>
  );
}
