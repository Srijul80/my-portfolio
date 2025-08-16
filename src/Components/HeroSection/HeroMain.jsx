import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import SubHeroSection from "./SubHeroSection";

const HeroMain = () => {
  return (
    <>
      <div className="pb-16 pt-35  max-w-[1200px] m-auto w-full px-2">
        <div className=" flex justify-between items-center w-full flex-col md:flex-row gap-8 overflow-hidden  sm:p-10">
          <HeroText />
          <HeroPic />
        </div>
        <div className="mt-15">
          <SubHeroSection />
        </div>
      </div>
    </>
  );
};

export default HeroMain;
