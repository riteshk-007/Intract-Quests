import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CarouselItem = ({ image, title, subtitle, description, buttonText }) => (
  <div className="flex flex-col md:flex-row bg-gray-800/50 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden shadow-lg">
    <div className="w-full md:w-1/2 p-3">
      <Image
        width={800}
        height={500}
        src={image}
        alt={title}
        className="h-48 md:h-min w-full object-cover"
      />
    </div>
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <h3 className="text-xl text-purple-400 mb-4">{subtitle}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <hr />
        <div className="flex -space-x-2 my-5">
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
      <button className="bg-[#6435e9] text-white px-6 py-3 rounded hover:bg-[#6535e9e5] transition-colors">
        {buttonText}
      </button>
    </div>
  </div>
);

const Alpha = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-arrow slick-next  text-white" />,
    prevArrow: <div className="slick-arrow slick-prev  text-white" />,
  };

  const carouselItems = [
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/368cb474c44a4686bcaf6dc9e89f80dc.png",
      title: "Decoding the DeFi Oracle with DeBank",
      subtitle: "An adventure to maximize your portfolio",
      description:
        "DeBank is a comprehensive dashboard designed for tracking and managing your assets within the world of DeFi.",
      buttonText: "Begin your journey",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/ce207cd4fdbe49c1afc60981212ddda7.png",
      title: "Explore DeFi Opportunities",
      subtitle: "Discover new ways to grow your assets",
      description:
        "Learn about yield farming, liquidity pools, and decentralized exchanges. Stay updated on the latest DeFi trends and opportunities.",
      buttonText: "Start exploring",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/33374b00ba544987938636e469c53115.png",
      title: "DeFi Risk Management",
      subtitle: "Protect your investments",
      description:
        "Understand the risks associated with DeFi protocols and learn strategies to safeguard your assets while maximizing returns.",
      buttonText: "Learn more",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/18abe473d8ed481d86d934f38ecb3b77.png",
      title: "DeFi Risk Management",
      subtitle: "Protect your investments",
      description:
        "Understand the risks associated with DeFi protocols and learn strategies to safeguard your assets while maximizing returns.",
      buttonText: "Learn more",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/1e0d8d85157848368a43ada6326421f6.jpg",
      title: "DeFi Risk Management",
      subtitle: "Protect your investments",
      description:
        "Understand the risks associated with DeFi protocols and learn strategies to safeguard your assets while maximizing returns.",
      buttonText: "Learn more",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-8">
        Daily New Alpha for You
      </h1>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Alpha;
