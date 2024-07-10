import { MovingBorders } from "./ui/moving-borders";

const BookADemo = () => {
    return (
      <div className="w-full h-[32vh] md:px-8 px-2 my-12">
        <MovingBorders duration={10000}>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="block md:text-5xl text-3xl font-bold text-sky-400 w-full text-center">
              You want to know more?
            </p>

            <p className="w-full text-center block sm:text-2xl">
              Discover how Angler can transform how you manage product data and
              accelerate your growth.{" "}
              <span className="text-sky-400 font-bold">Because this is the future.</span>
            </p>

            <button className="relative inline-flex h-12 w-56 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:text-neutral-300">
                Book A Demo
              </span>
            </button>
          </div>
        </MovingBorders>
      </div>
    );
}

export default BookADemo;