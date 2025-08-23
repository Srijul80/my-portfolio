import React from "react";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";
const ProjectsText = () => {
  return (
    <>
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-[100px] flex flex-col gap-4 px-2"
      >
        <h2 className="text-4xl text-cyan-400 text-center">Projects</h2>
        <p className="text-white text-center text-xl">
          Project will update soon
        </p>
      </motion.div>
    </>
  );
};

export default ProjectsText;
