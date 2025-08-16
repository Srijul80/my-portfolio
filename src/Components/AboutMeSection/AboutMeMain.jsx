import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

const AboutMeMain = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col md:flex-row gap-10 justify-center items-center text-center md:text-left  py-5 "
      >
        <div>
          <AboutMeText />
        </div>
        <div>
          <AboutMeImage />
        </div>
      </div>
    </>
  );
};

export default AboutMeMain;
