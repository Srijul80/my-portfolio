import React from "react";
import subSkillImg from "../../Images/subSkills.jpg";

const SubSkills = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bg-gradient-to-r from-orange-400 to-cyan-400 h-full w-full opacity-50"></div>
        <img src={subSkillImg} alt="sub skill image" />
      </div>
    </>
  );
};

export default SubSkills;
