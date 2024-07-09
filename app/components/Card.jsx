"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Card = ({ img, title, color }) => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isHovering) return;

    const scrollContent = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scrollContent, 20);

    return () => clearInterval(intervalId);
  }, [isHovering]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="bg-[#1e1e1e] rounded-xl overflow-hidden w-64 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:bg-[#222222]"
    >
      <div className="relative p-3">
        <div className={`${color} p-4 relative rounded-lg overflow-hidden `}>
          <div className="grid grid-cols-8 grid-rows-8 gap-1 absolute inset-0">
            {[...Array(64)].map((_, i) => (
              <div key={i} className={`${color} bg-opacity-20`}></div>
            ))}
          </div>
          <div className="relative z-10 p-5">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt="Intro to the GetGrass"
                width={150}
                height={100}
                layout="responsive"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-white/20 p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <hr className="border-gray-600 w-full" />
        <div
          className="flex justify-start gap-3 overflow-hidden"
          ref={scrollContainerRef}
        >
          {[...Array(8)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400 text-xs">2 Tasks</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1 whitespace-nowrap">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-400 text-xs">40 XPs</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
