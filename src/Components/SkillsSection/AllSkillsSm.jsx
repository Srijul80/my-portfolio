import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";

const AllSkillsSm = () => {
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
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={FadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "auto" }}
              key={index}
              className="flex items-center justify-center flex-col gap-4"
            >
              <div className="text-4xl text-orange-400">{<item.icon />}</div>
              <h2 className="text-white">{item.skill}</h2>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AllSkillsSm;
