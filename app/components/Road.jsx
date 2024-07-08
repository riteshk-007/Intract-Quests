import { Check, LockKeyhole } from "lucide-react";
import Image from "next/image";
import React from "react";
import DropCard from "./DropCard";

const Road = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#151415] p-5 ">
      {/* 1 block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* 1st card */}
        <DropCard
          imgSrc="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
          Quests="6"
          title="Basics of Crypto"
          desc=" The safest and easiest place to start your crypto journey!"
          XPs=" 1490"
          cards={cards}
        />
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
      {/* 2 block */}
      <div className="w-full items-center justify-center my-10 md:pr-10">
        <DropCard
          imgSrc="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
          Quests="4"
          title="Introduction to Airdrops"
          desc=" Your best bet to make it big in crypto!"
          XPs=" 1040"
          cards={cards2}
        />
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
const cards2 = [
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg",
    title: " #1: What are airdrops?",
    task: "7 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg",
    title: "#2: Types of airdrops",
    task: "10 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png",
    title: "#3: How to earn huge $$$ from airdrops?",
    task: "11 Tasks",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg",
    title: "#4: Things to keep in mind!",
    task: "7 Tasks",
  },
];
