import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const DropCard = ({ imgSrc, Quests, title, desc, XPs, cards }) => {
  const [open, setOpen] = React.useState(false);
  return (
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
              src={imgSrc}
              alt="crypto-icon"
              className="rounded-lg "
            />
            <div className="absolute bottom-2 left-0 right-0 bg-black/70 rounded-full  w-min mx-auto text-nowrap  text-center py-3 px-5  text-xs font-semibold">
              {Quests} Quests
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground mt-1 ">{desc}</p>
          <hr className="border-b border-dashed border-[#3a3a3a] my-2" />
          <div className="mt-4 flex items-center space-x-2">
            <Image
              width={20}
              height={20}
              src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
              alt="coin-icon"
              className="inline-block h-5 w-5"
            />
            <span className=" py-1 bg-[#1e1d1e] px-2 rounded-full shadow-lg border-[#171717] border">{`${XPs} XPs`}</span>
          </div>
        </div>
      </div>
      <ChevronDown
        className={`h-5 w-5 absolute top-2 right-2 transition-transform duration-200 ${
          !open ? "transform rotate-180" : ""
        }`}
      />
      {!open && (
        <div className="w-full border-t-2 border-[#222122] md:p-4">
          <div className="h-80 overflow-y-auto space-y-4 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex w-full flex-col sm:flex-row items-center p-2 sm:p-4 rounded-lg shadow-md bg-[#2D2D2D] hover:bg-[#1a1a1a] relative"
              >
                <Image
                  width={100}
                  height={100}
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-10 sm:w-24 sm:h-16 object-fill rounded-lg mr-2 sm:mr-4"
                />
                <div className="flex-1 min-w-0 mt-2 sm:mt-0">
                  <div className="text-sm sm:text-lg font-semibold truncate text-gray-300">
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
  );
};

export default DropCard;
