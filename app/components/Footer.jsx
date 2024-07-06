import React from "react";
import { Send, Music, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">intract.</h2>
            <p className="text-gray-400">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">INTRACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Explore Quests
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Communities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Alpha Hub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">EARN</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Refer & Earn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Achievements
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Product Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Sign up Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Growth Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Create your quest
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-800 my-6" />
        <p className="text-gray-400 text-sm mb-6">
          <strong>Disclaimer:</strong> Crypto Products, Virtual Digital Assets,
          and NFTs are unregulated and can be highly risky. There may be no
          regulatory recourse for any loss from such transactions. We advise the
          viewer to proceed with caution. Nothing in this website or any
          communication published by us amounts to, is intended to be, or should
          be construed as investment or purchase advice of any kind or financial
          advice or promotion under any applicable laws. Any decision made based
          on the content provided on this website or any communication published
          by us shall not be attributable to us.
        </p>
        <hr className="border-t border-gray-800 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            CREATED BY{" "}
            <a href="#" className="text-white hover:underline">
              INTRACT
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 p-2  text-blue-500 rounded-md hover:text-white"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-blue-500 p-2 rounded-md hover:text-white"
            >
              <Send />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-blue-500 p-2 rounded-md hover:text-white"
            >
              <Music />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
