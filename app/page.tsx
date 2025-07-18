import { SmallPricingModule } from "@/components/pricing/small-pricing";
import FeaturesSection from "./feature-card";
import HeroSection from "./hero-section";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      <SmallPricingModule />
    </>
  );
}
