import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MarketplaceSection } from "@/components/MarketplaceSection";
import { CommunitySection } from "@/components/CommunitySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MarketplaceSection />
      <CommunitySection />
    </>
  );
}
