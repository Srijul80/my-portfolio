import React from "react";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";
const SkillText = () => {
  return (
    <>
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-[100px] flex flex-col gap-4 px-2"
      >
        <h2 className="text-4xl text-cyan-400 text-center">My Skills</h2>
        <p className="text-white text-center text-xl">
          I use HTML to build the structure of a website and CSS or Tailwind to
          make it look great on any screen. JavaScript adds the interactive
          features, while React helps me create fast and reusable parts of the
          site. I also use Bootstrap to quickly make designs that are consistent
          and mobile-friendly.
        </p>
      </motion.div>
    </>
  );
};

export default SkillText;
