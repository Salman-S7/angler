"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function AboutCard({
  name,
  image,
  description,
}: {
  name: string;
  image: any;
  description: string;
}) {
  return (
    <div className="lg:w-1/2 w-full h-[76vh] group/card">
      <div
        className={cn(
          "overflow-hidden relative card rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4 w-full h-full bg-center",
          "bg-[url(https://images.unsplash.com/photo-1718844054447-fb4e6b4c7ea8?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="200"
            width="200"
            alt="Avatar"
            src={image}
            className="h-14 w-14 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg text-sky-400  relative z-10">
              {name}
            </p>
            <p className="text-sm text-white-400">co-founder</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="hidden sm:block font-bold text-xl md:text-2xl text-sky-400 relative z-10">
            {name}
          </h1>
          <p className="sm:font-sm leading-9 text-gray-300 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
