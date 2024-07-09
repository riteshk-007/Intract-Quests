"use client";

import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Essentials");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky bottom-5 flex my-5 shadow-2xl bg-gray-800/50 backdrop-blur-md rounded-full mx-auto w-60">
      <button
        className={`transition duration-300 px-5 rounded-full ease-in-out transform hover:scale-105 py-2 ${
          activeTab === "Essentials"
            ? "font-bold bg-gray-700/60 text-white shadow-lg backdrop-blur-md"
            : "bg-secondary"
        }`}
        onClick={() => handleTabChange("Essentials")}
      >
        Essentials
      </button>
      <button
        className={`transition duration-300 ease-in-out transform hover:scale-105 px-5 rounded-full py-2 ${
          activeTab === "Alpha Hub"
            ? "font-bold bg-gray-700/60 text-white shadow-lg backdrop-blur-md"
            : "bg-secondary"
        }`}
        onClick={() => handleTabChange("Alpha Hub")}
      >
        Alpha Hub
      </button>
    </div>
  );
};

export default Tabs;
