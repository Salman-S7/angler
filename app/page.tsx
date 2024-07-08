import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InfoCard from "@/components/InfoCard";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <main>
      {<HeroSection />}
      {<HowItWorksSection />}
      {<InfoSection/>}
    </main>
  
  );
}
