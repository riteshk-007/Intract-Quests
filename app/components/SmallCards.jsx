import { Check, LockKeyhole } from "lucide-react";
import Image from "next/image";
import React from "react";

const SmallCards = ({ imgsrc }) => {
  return (
    <div className="relative flex items-center flex-col justify-center">
      <span className="bg-[#1e1d1e] p-1 my-4 rounded-full shadow-lg border-[#333333] border backdrop-blur-md">
        <Check className="h-10 w-10 text-[#323132]" />
      </span>
      <div className="relative bg-[#1e1d1e] p-1 my-4 rounded-2xl">
        <Image
          src={imgsrc}
          width={150}
          height={100}
          alt="intract-certified"
          className="rounded-2xl"
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
  );
};

export default SmallCards;
