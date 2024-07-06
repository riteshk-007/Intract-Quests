import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const words = ["Academy", "Intract"];
  return (
    <div className="w-full h-full relative">
      <Image
        src={
          "https://www.intract.io/assets/intract-academy-background-5547a705.png"
        }
        alt="hero"
        width={1920}
        height={1080}
      />
      <div className="absolute top-2/3 md:top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="xl:w-1/4 flex-col flex items-start">
              <h1 className="text-lg md:text-xl text-zinc-100">Intract</h1>
              <div className="text-2xl md:text-5xl font-serif">
                <FlipWords words={words} duration={2500} />
              </div>

              <hr className="w-full md:mt-4 border-2 border-zinc-700" />
            </div>
            <p className="md:mt-4 text-sm md:text-lg text-zinc-400 text-center xl:w-1/3 font-semibold space-x-2">
              <span className="font-bold text-white">Intract users</span> have
              together made more than{" "}
              <span className="font-bold text-white">$100 million</span> in
              web3. Join them and{" "}
              <span className="font-bold text-white">
                learn how to earn crypto!
              </span>
            </p>
            <button className="mt-2 md:mt-8 bg-[#7041eb] py-1 md:py-2 text-xs md:text-sm px-7 md:px-10 text-white rounded bg-opacity-60 hover:bg-[#572ebd] transition">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
