import About from "@/components/About";
import BookADemo from "@/components/BookADemo";
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
      {<BookADemo/>}
    </main>
  
  );
}
