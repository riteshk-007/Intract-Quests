"use client";
import { Check, ChevronDown, LockKeyhole } from "lucide-react";
import Image from "next/image";
import React from "react";

const Road = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full  flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#151415] p-5 lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* 1st card */}
        <div
          onClick={() => setOpen(!open)}
          className="md:p-5 bg-[#151415]/50  h-min cursor-pointer backdrop-blur-md w-auto md:w-[500px] shadow-lg mx-auto transition-all duration-200 hover:bg-[#1d1b1d] rounded-lg relative flex items-center justify-center flex-col"
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
            <div className=" border-t-2 border-[#222122] p-4">
              <div className="h-80 overflow-y-auto space-y-4 overflow-x-auto">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center p-2 sm:p-4 rounded-lg shadow-md bg-[#2D2D2D] hover:bg-[#1a1a1a] relative"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={card.img}
                      alt={card.title}
                      className="w-16 h-10 sm:w-24 sm:h-16 object-cover rounded-lg mr-2 sm:mr-4"
                    />
                    <div className="flex-1 min-w-0 mt-2 sm:mt-0">
                      <div className="text-md sm:text-lg font-semibold truncate text-gray-300">
                        {card.title}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground text-gray-400">
                        {card.task}
                      </div>
                      <hr className="border-b border-dashed border-[#3a3a3a] mt-2 mb-3 sm:mb-5" />
                      <div className="mt-2">
                        <div className="w-full flex items-center justify-center h-2 rounded-full gap-2">
                          <div
                            className="bg-[#1f1e1f] h-3 rounded-full border-2 border-[#545252]"
                            style={{ width: "100%" }}
                          ></div>
                          <button className="flex items-center justify-center p-1 border border-[#4f4e4e] bg-[#383838] rounded-full text-[#545454] ">
                            <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* 2nd card */}
        <div className="w-full h-full  flex items-center justify-center sm:pl-52 pt-40">
          <div className="relative flex items-center flex-col justify-center">
            <span className="bg-[#1e1d1e] p-1 my-4 rounded-full shadow-lg border-[#333333] border backdrop-blur-md">
              <Check className="h-10 w-10 text-[#323132]" />
            </span>
            <div className="relative bg-[#1e1d1e] p-1 my-4 rounded-2xl">
              <Image
                src={
                  "https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
                }
                width={150}
                height={100}
                alt="intract-certified"
                className=" rounded-2xl"
              />
              <span className="absolute -bottom-4 -right-3 bg-[#1e1d1e] p-3 rounded-full shadow-lg border-[#333333] border backdrop-blur-md">
                <LockKeyhole className="h-5 w-5 text-[#5f5f5f]" />
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-gray-400 text-center">
                Intract Certified: Learner NFT
              </h1>
              <p className="text-sm flex-wrap text-gray-600 font-semibold">
                Your crypto black-belt <br /> certificate
              </p>
              <button className="bg-[#1e1d1e] text-gray-400 font-semibold py-2 px-4 rounded-lg my-4  cursor-not-allowed  shadow-lg border border-[#262626] ">
                Claim
              </button>
            </div>
          </div>
        </div>
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
