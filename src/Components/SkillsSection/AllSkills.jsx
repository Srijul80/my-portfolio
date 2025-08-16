import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const AllSkills = () => {
  const skills = [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3 },
    { skill: "JavaScript", icon: FaJs },
    { skill: "React", icon: FaReact },
    { skill: "Bootstrap", icon: FaBootstrap },
    { skill: "Tailwind", icon: SiTailwindcss },
  ];
  return (
    <>
      <div className="flex justify-center gap-2">
        {skills.map((item, index) => (
          <SingleSkill key={index} skill={item.skill} icon={<item.icon />} />
        ))}
      </div>
    </>
  );
};

export default AllSkills;
