import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="max-w-[1300px] mx-auto gap-10 w-full flex flex-col md:flex-row  justify-center items-center text-center md:text-left md:justify-between "
    >
      {/* About Text  */}
      <motion.div
        variants={FadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <AboutMeText />
      </motion.div>

      {/* About Image  */}
      <motion.div
        variants={FadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
