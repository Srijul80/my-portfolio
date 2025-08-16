import React from "react";

const SingleSkill = ({ skill, icon }) => {
  return (
    <>
      <div className="hover:-translate-y-10 duration-300 transition-all relative">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <div className="h-[100px] w-[100px] rounded-full bg-white flex items-center justify-center border-4 border-amber-500 text-cyan-400 text-6xl hover:text-gray-600 hover:scale-105 transition-all duration-300">
            {icon}
          </div>
          <p className="text-white">{skill}</p>
        </div>
        <div className="bg-amber-500 h-[200px] w-[100px] -z-10 absolute top-[50px] "></div>
      </div>
    </>
  );
};

export default SingleSkill;
