import Image from "next/image";
import React from "react";
import Card from "./Card";

const Exploring = ({ head, pera }) => {
  return (
    <div className="bg-[#1c1c1c] text-white  rounded-xl shadow-lg md:max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side content */}
        <div className="flex-1 space-y-4 p-6 hover:bg-[#232323]">
          <h2 className="text-3xl font-bold">{head}</h2>
          <p className="text-gray-400 text-sm line-clamp-4">{pera}</p>
          <div className="flex items-center gap-2">
            <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
              1 Quests
            </span>
            <div className="flex -space-x-2">
              <div className="flex items-center -space-x-4">
                <Image
                  width={50}
                  height={50}
                  alt="user 1"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={50}
                  height={50}
                  alt="user 2"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                  className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={50}
                  height={50}
                  alt="user 3"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                  className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={50}
                  height={50}
                  alt="user 4"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                  className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={50}
                  height={50}
                  alt="user 5"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                  className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
              </div>
            </div>
          </div>
          <hr className="border-gray-600 w-full border-dashed" />
          <div className="bg-gray-800 text-sm px-3 py-1 rounded-full w-fit flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
            40 XPs
          </div>
          <button className="w-full bg-[#6435e9] hover:bg-[#6535e9f7] text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Start here →
          </button>
        </div>

        {/* Right side content */}
        <div className="md:w-[60%]  overflow-hidden overflow-x-auto rounded bg-[#161616] flex  items-center gap-4 p-4">
          <Card
            img={
              "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/b635538e4f7c4d0cb80926f8c2028562.png"
            }
            title={"Introduction To Grass"}
            color={"bg-green-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default Exploring;
