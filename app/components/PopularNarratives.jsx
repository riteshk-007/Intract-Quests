import Exploring from "./Exploring";

const PopularNarratives = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full">
      <Exploring
        head={"Exploring Lens Protocol"}
        pera={
          "Grass is a network of over 2 million people who are rewarded for helping AI developers access the internet. Its goal is to prevent the concentration of AI by allowing ordinary people to play a part and share in the benefits of its growth."
        }
        Quests={3}
        xps={70}
        cards={card1}
      />
      <Exploring
        head={"Exploring Lens Protocol"}
        pera={
          "Grass is a network of over 2 million people who are rewarded for helping AI developers access the internet. Its goal is to prevent the concentration of AI by allowing ordinary people to play a part and share in the benefits of its growth."
        }
        Quests={3}
        xps={70}
        cards={cards2}
      />
      <Exploring
        head={"Exploring GRASS"}
        pera={
          "Grass is a network of over 2 million people who are rewarded for helping AI developers access the internet. Its goal is to prevent the concentration of AI by allowing ordinary people to play a part and share in the benefits of its growth."
        }
        Quests={1}
        xps={40}
        cards={cards3}
      />
    </div>
  );
};

export default PopularNarratives;

const card1 = [
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/125ffff4430441ebb904badccf01e89a.png",
    title: "Introduction to Lens Protocol",
    color: "bg-green-500",
  },
];
const cards2 = [
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/125ffff4430441ebb904badccf01e89a.png",
    title: "Introduction to Lens Protocol",
    color: "bg-green-500",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/3407575394924b6c8331b53a3842f3d3.png",
    title: "Exploring Dapps - Lensfrens",
    color: "bg-[#5038b0]",
  },
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/39b34dbae97d402bb24eb54b372bde1c.png",
    title: "Exploring Dapps - Lenstube",
    color: "bg-[#BB5E35]",
  },
];
const cards3 = [
  {
    img: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/b635538e4f7c4d0cb80926f8c2028562.png",
    title: "Introduction To Grass",
    color: "bg-green-500",
  },
];
