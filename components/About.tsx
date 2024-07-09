import { founders } from "@/public/data";
import AboutMarquee from "./AboutMarquee";
import { AboutCard } from "./ui/AboutCard";

const About = () => {
    return (
      <div className="h-[100vh]">
        <AboutMarquee />
        <div className="flex w-full justify-between items-center md:px-8 px-2 gap-9 mt-9">
          {founders.map((founder) => (
            <AboutCard
              name={founder.name}
              description={founder.description}
              image={founder.image}
            />
          ))}
        </div>
      </div>
    );
}

export default About;