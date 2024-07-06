"use client";
import { Menu, Search, Tv } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" text-white p-2 md:p-3 flex items-center drop-shadow justify-between lg:justify-evenly border-b border-gray-500 font-sans z-50 sticky top-0 backdrop-blur-md">
        <a
          href="#"
          className="text-2xl lg:text-3xl font-bold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
        >
          intract.
        </a>
        <div
          className={`flex items-center justify-center space-x-4 xl:space-x-6 text-gray-400 transition-all duration-200 ${
            isSearchFocused ? "opacity-0 invisible" : "opacity-100"
          } lg:flex hidden`}
        >
          <a href="#" className="hover:text-zinc-200">
            Compass
          </a>
          <a href="#" className="hover:text-zinc-200">
            Explore
          </a>
          <a href="#" className="hover:text-zinc-200 relative flex text-white">
            Academy
            <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-lg mx-2 ">
              New
            </span>
            <span className="absolute -bottom-full right-0 w-full h-1  bg-white rounded-md"></span>
          </a>
          <a href="#" className="hover:text-zinc-200">
            NFTs
          </a>
          <a href="#" className="hover:text-zinc-200">
            For Projects
          </a>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="relative w-80 xl:w-96 items-center lg:flex hidden">
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc.,"
              className={`absolute right-0 bg-zinc-800 text-white rounded-full px-4 py-2 pl-10 focus:outline-none text-sm transition-all duration-200 ${
                isSearchFocused ? "w-[700px] xl:w-[800px]" : "w-full"
              }`}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <span
              className={`absolute  text-gray-400 transition-all duration-200 ${
                isSearchFocused ? "-left-full" : "left-3"
              }`}
            >
              <Search color="currentColor" size={17} />
            </span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-zinc-800 text-orange-600 rounded-full p-2 md:p-3 border border-orange-600 text-sm ">
              <Tv size={17} />
            </button>
            <button className="bg-white text-black rounded px-4 text-nowrap xl:px-5 py-2 text-xs md:text-sm font-semibold ">
              Sign In
            </button>
            <button
              className="lg:hidden block"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu color="white" size={24} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed bottom-0 bg-[#181818] p-1 rounded-t-3xl z-40 w-full h-4/5 flex justify-end lg:hidden transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-between p-6 rounded-lg w-full mx-auto">
          <div className="flex items-end justify-start mb-2 w-full h-full">
            <h2 className="text-xl font-bold">Compass</h2>
            <span className="bg-[#212121] border border-gray-700 ml-2 mb-3  text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-6 w-full border-t border-gray-700 p-1">
            {img.map((i, index) => (
              <div
                key={index}
                className="flex items-center relative cursor-pointer justify-center w-16 h-16 bg-gradient-to-br from-zinc-700 to-black rounded-xl group"
              >
                <Image
                  width={32}
                  height={32}
                  src={i.src}
                  alt={i.alt}
                  className="w-8 h-8 group-hover:-translate-y-2  transition-transform duration-300 ease-in-out"
                />
                <span className="absolute bottom-0 left-0 w-full text-center text-white  bg-opacity-70 py-2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 text-xs">
                  {i.alt}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <a href="#" className="flex items-center text-xl font-semibold">
              <span>Explore</span>
              <span className="ml-2">→</span>
            </a>
            <a href="#" className="flex items-center text-xl font-semibold">
              <span>Academy</span>
              <span className="ml-2">→</span>
            </a>
            <a href="#" className="flex items-center text-xl font-semibold">
              <span>NFTs</span>
              <span className="ml-2">→</span>
            </a>
            <a href="#" className="flex items-center text-xl font-semibold">
              <span>For Projects</span>
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
const img = [
  {
    src: "https://www.intract.io/assets/img/brands/linea.webp",
    alt: "linea",
  },
  {
    src: "https://www.intract.io/assets/base-logo-d4c3e698.svg",
    alt: "base",
  },
  {
    src: "https://www.intract.io/assets/img/brands/zksync.png",
    alt: "zksync",
  },
  {
    src: "https://www.intract.io/assets/img/brands/scroll.jpeg",
    alt: "scroll",
  },
  {
    src: "https://www.intract.io/assets/img/brands/mode.jpeg",
    alt: "mode",
  },
  {
    src: "https://www.intract.io/assets/img/brands/blast.png",
    alt: "blast",
  },
  {
    src: "https://www.intract.io/assets/img/brands/zora.png",
    alt: "zora",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/3cde17744ce9491a9dce0a7434d20c85.png",
    alt: "polygon zxEVM",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/5e025a633d7b4558bf6c59e18db71012.png",
    alt: "Abritrum",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/7ed3f0445cf34603bd4884af5b51acec.png",
    alt: "polygon",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/0588e08e99ff46ac9dfcc4d35cb6e3fa.png",
    alt: "BNB",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/8fa7ed6be3a049f2b129c4e9ca3d41b6.webp",
    alt: "Optimism",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/6325c064d0cc4a6ea76ec38c0edd642a.png",
    alt: "Solana",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/b38877fae64f42a49f3cb2df752f68e8.png",
    alt: "cosmos",
  },
  {
    src: "https://static.highongrowth.xyz/enterprise/enterpriseId/2ac5eb3d7d3c4d6dbe5b3bcfe51d28fd.png",
    alt: "Bitcoin",
  },
];
