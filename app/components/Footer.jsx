import React from "react";
import { Send, Music, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">intract.</h2>
            <p className="text-gray-400 text-sm">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">INTRACT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Explore Quests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Communities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Alpha Hub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">EARN</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Refer & Earn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Achievements
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Product Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sign up Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Growth Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Create your quest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-800 my-8" />
        <p className="text-gray-400 text-xs mb-8">
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
        <hr className="border-t border-gray-800 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            CREATED BY{" "}
            <a href="#" className="text-white hover:underline">
              INTRACT
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 p-2 text-blue-500 rounded-md hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-blue-500 p-2 rounded-md hover:text-white transition-colors"
            >
              <Send size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 text-blue-500 p-2 rounded-md hover:text-white transition-colors"
            >
              <Music size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
