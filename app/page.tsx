import { SmallPricingModule } from "@/components/pricing/small-pricing";
import BenefitSection from "./benefit-section";
import SecuritySection from "./security-section";
import PersonaAgents from "./persona-agents";
import HeroSection from "./hero-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />

      <BenefitSection />
      <PersonaAgents />

      <SmallPricingModule />

      <SecuritySection />
    </>
  );
}
