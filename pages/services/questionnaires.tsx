import FeatureHero from "@/components/pages/features/hero/FeatureHero";
import PricingCard from "@/components/pages/features/pricing/PricingCard";

export default function Questionnaires() {
  return (
    <div className="">
      <div>
        <FeatureHero
          name="Questionnaires"
          desc="Welcome to our powerful Questionnaires feature, designed to help
                you unlock valuable insights from your target audience. Connect
                with your specific target audience, gather actionable feedback,
                and make informed business decisions. Craft tailor-made surveys
                that resonate, capturing the information that drives growth.
                Streamline market research, customer opinions, and idea
                validation with our intuitive questionnaire builder."
          imageUrl="/images/features/questionnaires.jpg"
        />
      </div>

      <div className="sectiondivider"></div>
      {/* PRICING */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-6 lg:container lg:mx-auto px-4 md:px-10">
          <PricingCard
            recurring={false}
            price="49"
            pricingType="basic"
            features={[
              "Access to pre-registered user base",
              "Maximum 40 expected completions",
              "Email support",
            ]}
          />
          <PricingCard
            recurring={false}
            price="199"
            pricingType="premium"
            features={[
              "Access to pre-registered user base",

              "Unlimited expected completions",
              "Priority phone & email support",
            ]}
          />
          <PricingCard
            recurring={false}
            price="99"
            pricingType="standard"
            features={[
              "Access to pre-registered user base",
              "Maximum 75 expected completions",
              "Email support",
            ]}
          />
        </div>
      </section>
      <div className="sectiondivider"></div>
    </div>
  );
}
