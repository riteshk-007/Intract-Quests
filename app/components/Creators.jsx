"use client";
import {
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Info,
  MoveRight,
  PlayIcon,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import DropCard from "./DropCard";
import SmallCards from "./SmallCards";
import PopularNarratives from "./PopularNarratives";

const Creators = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hub, setHub] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

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

  useEffect(() => {
    const targetDate = new Date().getTime() + 11 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border-t border-b border-gray-700">
        {/* A1 */}
        {!hub ? (
          <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#0e0d0e] p-5 relative">
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
            <div className="grid  grid-cols-1 md:grid-cols-3 w-full md:mt-10">
              <div className="col-span-1  flex items-end ">
                <SmallCards
                  imgsrc="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
                  desc="Your proof of airdrop expertise"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <div className="w-full items-center justify-center  md:p-5  md:pr-20">
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
              </div>
            </div>
            {/* rewardws timer */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full md:mt-10">
              <div className="col-span-2  p-2 flex items-end md:pr-20 justify-end flex-col gap-4">
                {/* countdown */}
                <div className="bg-[#151415]/70 backdrop-blur-md flex flex-col p-3 w-full md:w-72 rounded-md shadow-lg">
                  <span className="flex items-center justify-start gap-3">
                    <Clock className="p-1 w-6 h-6 bg-[#0b0b0b] rounded-full text-orange-400" />
                    <h1 className="font-semibold md:text-base">
                      Reward unlocks in
                    </h1>
                  </span>
                  <hr className="border-gray-500 w-full my-2 border-dashed" />
                  <div className="flex items-center justify-center gap-2">
                    <div className="border w-full items-center justify-evenly flex rounded-md py-2 border-[#323131] bg-[#262525] shadow-2xl">
                      <span className="text-2xl md:text-4xl flex flex-col items-center justify-center font-semibold text-gray-500">
                        {timeLeft.days}
                        <p className="text-xs md:text-sm">days</p>
                      </span>
                      <span className="text-2xl md:text-4xl flex flex-col items-center justify-center font-semibold text-gray-500">
                        {timeLeft.hours}
                        <p className="text-xs md:text-sm">Hrs</p>
                      </span>
                      <span className="text-2xl md:text-4xl flex flex-col items-center justify-center font-semibold text-gray-500">
                        {timeLeft.minutes}
                        <p className="text-xs md:text-sm">Mins</p>
                      </span>
                      <span className="text-2xl md:text-4xl flex flex-col items-center justify-center font-semibold text-gray-500">
                        {timeLeft.seconds}
                        <p className="text-xs md:text-sm">Secs</p>
                      </span>
                    </div>
                  </div>
                </div>
                {/* leaderboard */}
                <div className="bg-[#151415]/70 backdrop-blur-md flex flex-col p-3 md:w-72 rounded-md shadow-lg">
                  <div className="relative">
                    <Image
                      src={
                        "https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                      }
                      alt="leaderboard"
                      width={600}
                      height={500}
                      className="rounded-md"
                    />
                    <div className="absolute top-2 right-2 bg-[#151415]/70 backdrop-blur-md rounded-md text-sm px-2 py-1">
                      Lucky Draw
                    </div>
                  </div>
                  <div className="flex w-full items-center mt-2 justify-between">
                    <span className="text-gray-500 text-sm  font-semibold ">
                      Exclusive Community
                    </span>
                    <div className="flex items-center gap-2 justify-center text-sm">
                      <Image
                        src={
                          "https://www.svgrepo.com/show/353655/discord-icon.svg"
                        }
                        height={20}
                        width={20}
                        alt="discord"
                        className="rounded-full p-1 bg-[#262525]"
                      />
                      Earndrop
                    </div>
                  </div>
                  <hr className="border-gray-500 w-full my-2 border-dashed" />
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-500 text-xs  font-semibold  cursor-pointer hover:text-gray-300 transition-colors duration-300">
                      Complete all Essential quests
                    </span>
                    <span className="rounded-full p-1 bg-[#262525] cursor-pointer hover:bg-gray-800 transition-colors duration-300">
                      <Check className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-500 text-xs  font-semibold  cursor-pointer hover:text-gray-300 transition-colors duration-300">
                      Complete at least 1 Alpha Hub quest today
                    </span>
                    <span className="rounded-full p-1 bg-[#262525] cursor-pointer hover:bg-gray-800 transition-colors duration-300">
                      <Check className="h-4 w-4 text-gray-400" />
                    </span>
                  </div>
                  <button className="bg-[#262525] flex items-center justify-center gap-2 text-gray-400 text-sm font-semibold rounded-md py-3 mt-2 hover:bg-gray-800 transition-colors duration-300">
                    Claim Now <MoveRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="col-span-1  p-2">
                <div className=" p-4 rounded-lg shadow-md max-w-sm border border-[#313131]">
                  <div className="flex items-center mb-2 border-b border-[#313131] p-2">
                    <span className="text-sm text-gray-600 font-semibold mr-1">
                      Reward info
                    </span>
                    <Info className="h-5 w-5 text-gray-600" />
                  </div>
                  <h2 className="text-sm font-semibold mb-2 text-gray-300">
                    Free access to paid KOL (crypto earning) communities!
                  </h2>
                  <p className="text-sm mb-2 text-gray-600">
                    Win access to exclusive earning communities of some of the
                    the greatest earners in crypto for a month, every 24 hours.
                    Get access to unmatched insights, a close-knit community of
                    the best airdrop earners, and more.
                  </p>
                  <p className="text-sm mb-2 text-gray-600">
                    To win: make sure you&apos;ve connected your Twitter and
                    Discord accounts - and follow our criteria!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center border-t border-b  border-[#252525] justify-center bg-gradient-to-b from-black to-[#0e0d0e] p-5 relative">
            <PopularNarratives />
            <div className="w-64 mt-5">
              <button className="bg-gray-800 text-gray-300 py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300 w-full text-center">
                See More
              </button>
            </div>
            <div className="w-full lg:w-4/5 flex flex-col items-center justify-center">
              {/* Narratives header */}
              <div className="w-full flex justify-between items-center my-4">
                <span className="text-xl text-[#d6d5d5] font-semibold">
                  Recommended Narratives
                </span>
                <div className="flex gap-1 text-sm items-center justify-center cursor-pointer text-[#727272] font-semibold">
                  <h1>See all</h1>
                  <ChevronRight size={17} />
                </div>
              </div>
              {/* cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NarrativesCard.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#151415]/50 cursor-pointer backdrop-blur-md w-full shadow-lg mx-auto transition-all duration-200 hover:bg-[#1d1b1d] rounded-3xl relative flex flex-col"
                  >
                    <div className="p-4 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                      <div className="w-full sm:w-1/3">
                        <div className="bg-[#101010] p-2 border-[#151415] shadow rounded-lg relative">
                          <Image
                            width={200}
                            height={200}
                            src={card.img}
                            alt="crypto-icon"
                            className="rounded-lg object-cover w-full h-max"
                          />
                          <div className="absolute bottom-2 left-0 right-0 bg-black/70 rounded-full w-min mx-auto text-nowrap text-center py-2 px-3 text-xs font-semibold">
                            {card.quests} Quests
                          </div>
                        </div>
                      </div>
                      <div className="sm:w-2/3 space-y-2">
                        <h2 className="text-lg font-semibold">{card.title}</h2>
                        <p className="text-sm font-semibold text-gray-600 line-clamp-3">
                          {card.desc}
                        </p>
                        <hr className="border-b border-dashed border-[#3a3a3a] my-2" />
                        <div className="flex items-center space-x-2">
                          <span className="py-1 bg-[#1e1d1e] px-2 rounded-full shadow-lg border-[#171717] border flex items-center gap-2 justify-center">
                            <Image
                              width={20}
                              height={20}
                              src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                              alt="coin-icon"
                              className="inline-block h-5 w-5"
                            />
                            <span className="text-sm">{`${card.xps} XPs`}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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

        <Tabs setHub={setHub} hub={hub} />
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

const NarrativesCard = [
  {
    img: "https://static.highongrowth.xyz/enterprise/enterpriseId/ad662db14acc46d5a6cb1dc0fb0cb93e.png",
    quests: 5,
    title: "Exploring Scroll",
    desc: "Scroll seamlessly extends Ethereum’s capabilities through zero knowledge tech and EVM compatibility. The L2 network built by Ethereum devs for Ethereum devs.",
    xps: 390,
  },
  {
    img: "https://intract-dashboard-files.s3.amazonaws.com/enterprise/641d73fb135bf4a73d7c1c83/34bfdb0c7bb84b20a3f6432a828016a3.png",
    quests: 3,
    title: "Exploring BASE",
    desc: "Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain.",
    xps: 170,
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/enterpriseId/ff9898828d0f4b23b292521d702f23a6.jpg",
    quests: 4,
    title: "Exploring SocialFi Drops",
    desc: "Explore SocialFi drops. SocialFi drops fuse finance with social media, empowering creators",
    xps: 380,
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/enterpriseId/ffa3e75f9a7a486e9214a5d3de6b1c44.png",
    quests: 2,
    title: "Get onboarded on Bitcoin",
    desc: "Bitcoin: the first decentralized digital currency, enabling direct transactions on a peer-to-peer network without central authority, powered by blockchain technology for secure, transparent, and immutable exchanges. 🌍💼🔒",
    xps: 180,
  },
  {
    img: "https://storage.googleapis.com/intract-test-storage/enterprise/undefined/daf0c5dac69547eda904c4b0744a6df2.png",
    quests: 4,
    title: "Trending",
    desc: "Explore the Latest Trends: Discover Projects on the Verge of Mainnet Launch or with Exciting Airdrop Opportunities.",
    xps: 280,
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/enterpriseId/fed46d7bf36741edb0bcb4f101266bb1.png",
    quests: 5,
    title: "EExploring Solana",
    desc: "Solana: A blazing-fast blockchain with speeds up to 65,000 transactions per second, surpassing Bitcoin and Ethereum. Low transaction fees and minimal energy consumption make it cost-effective and sustainable. Explore Solana’s ecosystem for cutting-edge development! 🚀💡🔗",
    xps: 480,
  },
];
