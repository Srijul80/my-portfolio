import React from "react";
import AllSkills from "./AllSkills";
import SkillText from "./SkillText";
import AllSkillsSm from "./AllSkillsSm";
import SubSkills from "./SubSkills";

const SkillMain = () => {
  return (
    <>
      <div
        id="skill"
        className="relative overflow-hidden min-h-[500px] mt-[100px]"
      >
        <SkillText />
        <div className="absolute bottom-[50px] left-[50%] -translate-x-[50%]  hidden lg:block ">
          <AllSkills />
        </div>
        <AllSkillsSm />
      </div>
      <SubSkills />
    </>
  );
};

export default SkillMain;
