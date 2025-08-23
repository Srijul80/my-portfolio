import React from "react";
import aboutImg from "../../Images/about-me.jpg";

const AboutMeImage = () => {
  return (
    <>
      <div className="h-[500px] w-[300px] relative ">
        <div className="h-[500px] w-[300px] rounded-[100px] overflow-hidden absolute">
          <img
            src={aboutImg}
            alt="about section image"
            className="h-full w-auto object-cover "
          />
        </div>
        <div className="h-[500px] w-[250px] bg-orange-400 absolute bottom-[-30px] left-[-30px] -z-10 rounded-tl-[20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px]"></div>
      </div>
    </>
  );
};

export default AboutMeImage;
