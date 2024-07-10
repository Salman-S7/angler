import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  const words = ["Distributors", "Retailers", "Brands", "Marketplaces"];

  return (
    <>
      <div className="h-[100lvh] z-20 relative flex justify-center items-center px-4 flex-col gap-[4%]">
        <span className="flex w-full items-center justify-center text-neutral-400  gap-4">
          Backed by{" "}
          <img
            src="https://www.vectorlogo.zone/logos/ycombinator/ycombinator-ar21.svg"
            alt=""
          />
        </span>
        <div className="lg:text-8xl md:text-7xl text-4xl font-bold text-center mx-auto text-white">
          Catalog Management For
          <br />
          <FlipWords words={words} /> <br />
          <p className="sm:text-4xl text-xl font-light sm:px-16">
            Create a rich, standardized, and accurate product catalog to drive{" "}
            <span className="text-sky-400 font-bold"> more sales.</span>
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-[6vh]">
          <button className="relative inline-flex h-12 w-56 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:text-neutral-300">
              Book A Demo
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
