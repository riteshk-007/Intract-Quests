import { BookOpen } from "lucide-react";
import Image from "next/image";
import Tabs from "./Tabs";

const Dictionary = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-4 border-t border-b border-gray-700">
      <div className="text-center mb-4">
        <h1 className="text-xl font-semibold">Crypto Dictionary</h1>
        <p className="text-gray-400">
          Your one-stop to catch up on all crypto terms
        </p>
      </div>
      <div className="relative w-full max-w-6xl">
        <Image
          width={1000}
          height={600}
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
          alt="arcade machine with crypto theme"
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
        />
        <div className="absolute bottom-4 left-4  text-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Web3 + Degen Glossary</h2>
          <p className="text-muted-foreground text-gray-400">
            Your own crypto dictionary
          </p>
        </div>

        <BookOpen className="h-12 w-12 absolute bottom-4 right-4 text-white bg-gray-800/50 backdrop-blur-md p-2 rounded-full border border-gray-500 " />
      </div>
      <Tabs />
    </div>
  );
};

export default Dictionary;
