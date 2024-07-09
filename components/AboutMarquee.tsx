import { expertsFrom } from "@/public/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const AboutMarquee = () => {
  return (
    <>
      <p className="text-center md:text-6xl text-sky-400 font-bold pb-10">Built by catalog experts from</p>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={expertsFrom}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
};

export default AboutMarquee;
