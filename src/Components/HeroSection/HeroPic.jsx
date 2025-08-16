import React from "react";
import { PiOctagonLight } from "react-icons/pi";
import myimg from "../../Images/myimg.png";

const HeroPic = () => {
  return (
    <>
      <div className=" flex items-center justify-center rounded-full relative mt-20 md:m-0 ">
        <img
          src={myimg}
          alt="Rijul Sharma"
          className="max-h-[250px] w-auto md:max-h-[350px]  "
        />

        <div className="flex justify-center items-center animate-pulse absolute  ">
          <PiOctagonLight
            color="cyan"
            className="  animate-[spin_20s_linear_infinite] blur-md w-auto  text-[370px] md:text-[470px] hidden sm:block "
          />
        </div>
      </div>
    </>
  );
};

export default HeroPic;
