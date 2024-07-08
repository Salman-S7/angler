import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <main>
      {<HeroSection />}
      {<HowItWorksSection />}
      {<InfoSection />}
      {<About />}
    </main>
  
  );
}
