import React from "react";
import HeroImg from "../assets/HeroSection.webp";

const HeroSection = () => {
  return (
    <>
      <div className="w-full relative mt-[11vh]">
        <img src={HeroImg} />
        <p className="absolute top-[25%] text-sm md:text-2xl lg:text-4xl left-[5%] leading-none">
          Just Come And{" "}
          <span className="text-red-800 underline font-bold text-sm md:text-2xl lg:text-4xl italic">
            Explore
          </span>{" "}
          <br />
          the{" "}
          <span className="text-red-800 underline font-bold text-xs md:text-2xl lg:text-4xl italic">
            Large Varieties
          </span>{" "}
          of{" "}
          <span className="text-red-800 underline font-bold text-sm md:text-2xl lg:text-4xl italic">
            Products
          </span>{" "}
          <br /> Of{" "}
          <span className="text-red-800 underline font-bold text-sm md:text-2xl lg:text-4xl italic">
            All Category
          </span>{" "}
          under <br /> One Roof.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
