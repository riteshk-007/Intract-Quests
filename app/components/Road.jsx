"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Road = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full  flec flex-col items-center justify-center bg-gradient-to-b from-black to-[#151415] p-5 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        {/* 1st card */}
        <div
          onClick={() => setOpen(!open)}
          className="p-5 bg-[#151415]/50  cursor-pointer backdrop-blur-md w-[500px] shadow-lg mx-auto transition-all duration-200 hover:bg-[#1d1b1d] rounded-lg relative flex items-center justify-center flex-col"
        >
          <div className=" p-4 rounded-lg  flex items-center space-x-4 w-full">
            <div className="w-full ">
              <div className="bg-[#101010] p-2 border-[#151415] shadow rounded-lg relative">
                <Image
                  width={200}
                  height={200}
                  src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
                  alt="crypto-icon"
                  className="rounded-lg "
                />
                <div className="absolute bottom-2 left-0 right-0 bg-black/70 rounded-full  w-min mx-auto text-nowrap  text-center py-3 px-5  text-xs font-semibold">
                  6 Quests
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Basics of Crypto</h2>
              <p className="text-muted-foreground mt-1 ">
                The safest and easiest place to start your crypto journey!
              </p>
              <hr className="border-b border-dashed border-[#3a3a3a] my-2" />
              <div className="mt-4 flex items-center space-x-2">
                <Image
                  width={20}
                  height={20}
                  src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                  alt="coin-icon"
                  className="inline-block h-5 w-5"
                />
                <span className=" py-1 bg-[#1e1d1e] px-2 rounded-full shadow-lg border-[#171717] border">{`1490 XPs`}</span>
              </div>
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 absolute top-2 right-2 transition-transform duration-200 ${
              !open ? "transform rotate-180" : ""
            }`}
          />
          {!open && (
            <div className="bg-[#222122] p-4">
              <div className="h-80 overflow-y-auto space-y-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg shadow-md bg-[#151415] relative"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={card.img}
                      alt={card.title}
                      className="w-24 h-16 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-semibold truncate text-gray-300">
                        {card.title}
                      </div>
                      <div className="text-sm text-muted-foreground text-gray-400">
                        {card.task}
                      </div>
                      <div className="mt-2">
                        <div className="w-full bg-muted h-2 rounded-full">
                          <div
                            className="bg-[#1f1e1f] h-3 rounded-full border-2 border-[#545252]"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <button className="absolute top-10 right-4 flex items-center justify-center w-6 h-6 bg-secondary rounded-full text-secondary-foreground">
                      ✔️
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* 2nd card */}
        <div className="w-full h-full border"></div>
      </div>
    </div>
  );
};

export default Road;

const cards = [
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
    title: "#1: But what is crypto and web3?",
    task: "11 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg",
    title: "#2: Setting up your own web3 wallet!",
    task: "8 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg",
    title: "#3: What the heck is a blockchain?",
    task: "8 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg",
    title: "#4: Swapping and bridging? What’s that?",
    task: "10 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg",
    title: "#5: NFTs and why they’re cool ;)",
    task: "6 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg",
    title: "#6: Doing quests and winning rewards!",
    task: "8 Tasks",
  },
];
