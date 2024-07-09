"use client";
import React, { useState } from "react";
import DropCard from "./DropCard";
import SmallCards from "./SmallCards";

const Road = () => {
  const [clickStates, setClickStates] = useState({
    first: true,
    second: true,
  });

  const handleClickState = (key) => {
    setClickStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#151415] p-5 relative">
      {/* 1st block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* 1st card */}
        <DropCard
          imgSrc="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
          Quests="6"
          title="Basics of Crypto"
          desc="The safest and easiest place to start your crypto journey!"
          XPs="1490"
          cards={cards}
          isOpen={clickStates.first}
          onToggle={() => handleClickState("first")}
        />
        {/* 2nd card */}
        <div className="w-full h-full flex items-center justify-center sm:pl-52 pt-40">
          <SmallCards
            imgsrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
            desc="Your crypto black-belt certificate"
          />
        </div>
      </div>
      {/* 2nd block */}
      <div className="w-full items-center justify-center my-10 md:pr-10">
        <DropCard
          imgSrc="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png"
          Quests="4"
          title="Introduction to Airdrops"
          desc="Your best bet to make it big in crypto!"
          XPs="1040"
          cards={cards2}
          isOpen={clickStates.second}
          onToggle={() => handleClickState("second")}
        />
      </div>
      <div className="w-auto flex items-start justify-start absolute -bottom-10 left-0">
        <SmallCards
          imgsrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
          desc="Your proof of airdrop expertise"
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
    title: "#1: What are airdrops?",
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
