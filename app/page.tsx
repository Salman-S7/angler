import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["Distributors", "Retailers", "Brands", "Marketplaces"];
  return (
    <div className="h-[200dvh] flex justify-center items-center px-4">
      <div className="text-6xl font-bold mx-auto text-white dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
