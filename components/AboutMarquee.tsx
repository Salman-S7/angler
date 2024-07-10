import { expertsFrom } from "@/public/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const AboutMarquee = () => {
  return (
    <>
      <p className="md:text-5xl text-3xl font-bold text-sky-400 w-full text-center py-10">
        Built by catalog experts from
      </p>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={expertsFrom}
          direction="left"
          speed="normal"
        />
      </div>
    </>
  );
};

export default AboutMarquee;
