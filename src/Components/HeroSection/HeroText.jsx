import React from "react";
import Typewriter from "typewriter-effect";
import myResume from "../../Files/Rijul-Resume.pdf";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <>
      <motion.div
        variants={FadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col gap-4 h-full justify-center items-center md:items-start  md:text-left text-center "
      >
        <h2 className="lg:text-2xl text-xl text-cyan-400 uppercase">
          <Typewriter
            options={{
              strings: ["front-end developer", " React Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h1 className="text-4xl md:text[2.8rem] lg:text-6xl font-bold font-special text-orange-400 uppercase">
          RIJUL SHARMA
        </h1>
        <p className="text-lg text-white mt-4">A passionate Web Developer</p>
        <button className=" px-4 py-2 text-md lg:text-xl rounded-full border border-cyan-400 flex items-center bg-gradient-to-l from-cyan-400 to-orange-400 hover:scale-110 duration-300 transition-all ease-in-out  hover:border-orange-400 hover:shadow-cyanshadow text-white w-50 cursor-pointer justify-center ">
          <a
            href={myResume}
            download={"rijul-cv.pdf"}
            aria-label="Download my resume as PDF"
          >
            Download CV
          </a>
        </button>
      </motion.div>
    </>
  );
};

export default HeroText;
