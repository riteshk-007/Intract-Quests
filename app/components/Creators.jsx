"use client";

import { BookOpen, PlayIcon, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Tabs from "./Tabs";

const Creators = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleCardClick = (index) => {
    if (activeVideo === index) {
      setActiveVideo(null);
    } else {
      setActiveVideo(index);
    }
  };

  const handleCloseVideo = (e) => {
    e.stopPropagation();
    setActiveVideo(null);
  };

  return (
    <>
      <div className="border-t border-b border-gray-700">
        {/* first */}
        <div className="flex w-full items-center justify-center flex-col p-5 mt-5  relative">
          <h1 className="text-gray-100 text-sm md:text-xl font-semibold tracking-wider">
            Top Crypto Creators and Projects to Follow
          </h1>
          <p className="text-gray-400 text-xs md:text-sm">
            Answers to your crypto doubts, straight from the experts
          </p>
        </div>
        {/* second */}
        <div className="w-full md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 p-5 relative">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => handleCardClick(index)}
            >
              {activeVideo === index ? (
                <div
                  className="relative w-full h-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={video.visrc}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                  <button
                    className="absolute top-2 right-2 z-10 text-white hover:text-gray-300 transition-colors"
                    onClick={handleCloseVideo}
                  >
                    <XCircle className="h-8 w-8" />
                  </button>
                </div>
              ) : (
                <>
                  <Image
                    width={1920}
                    height={1080}
                    src={video.imsrc}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 p-2 w-full text-white font-semibold text-lg md:text-xl text-wrap bg-gradient-to-t from-black to-transparent">
                    {video.text}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                    <PlayIcon className="h-12 w-12 text-white md:opacity-0 group-hover:opacity-100 bg-gray-800/50 backdrop-blur-md p-2 rounded-full border border-gray-500 translate-y-2 group-hover:-translate-y-3 transition-all duration-300" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {/* third */}
        <div className="bg-background text-foreground md:min-h-screen flex flex-col items-center justify-center p-4">
          <div className="text-center mb-4">
            <h1 className="text-xl font-semibold">Crypto Dictionary</h1>
            <p className="text-gray-400">
              Your one-stop to catch up on all crypto terms
            </p>
          </div>
          <div className="relative w-full max-w-6xl">
            <Image
              width={1000}
              height={800}
              src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
              alt="arcade machine with crypto theme"
              className="w-full md:h-auto rounded-lg shadow-lg cursor-pointer"
            />
            <div className="absolute bottom-0 left-0  md:bottom-4 md:left-4  text-white p-4 rounded-lg">
              <h2 className="text-base md:text-xl font-semibold">
                Web3 + Degen Glossary
              </h2>
              <p className="text-muted-foreground text-sm md:text-base text-gray-400">
                Your own crypto dictionary
              </p>
            </div>

            <BookOpen className="md:h-12 md:w-12 h-8 w-8 absolute bottom-4 right-4 text-white bg-gray-800/50 backdrop-blur-md p-2 rounded-full border border-gray-500 " />
          </div>
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default Creators;

const videos = [
  {
    visrc:
      "https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    imsrc:
      "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
    text: "How to plan your retirement with crypto?",
  },
  {
    visrc:
      "https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    imsrc:
      "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
    text: "Why are there limited Bitcoin?",
  },
  {
    visrc:
      "https://www.youtube.com/embed/9fyVLvY3P14?si=-02HNwqzZE3jXMz4&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    imsrc:
      "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
    text: "How does Uniswap actually work?",
  },
  {
    visrc:
      "https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1",
    imsrc:
      "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
    text: "How to spot crypto projects to invest in?",
  },
];
