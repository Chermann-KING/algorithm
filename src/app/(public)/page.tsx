import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { LearningPathSection } from "@/components/home/LearningPathSection";
import { StatsSection } from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LearningPathSection />
      <StatsSection />
    </>
  );
}
