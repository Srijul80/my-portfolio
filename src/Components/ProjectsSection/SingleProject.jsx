import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";
const SingleProject = ({ name, year, image, align, link }) => {
  return (
    <>
      <motion.div
        variants={FadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className={`flex flex-col-reverse items-center gap-8 ${
          align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end mt-20 `}
      >
        {/* Text section  */}
        <div
          className={`text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          <h2 className="text-2xl md:text-3xl text-orange-500 ">{name}</h2>
          <h2 className="text-white text-xl">{year}</h2>

          <a href={link} className="text-cyan-400 text-lg">
            <div
              className={`flex gap-2 items-center justify-center ${
                align === "left" ? "md:justify-end" : "md:justify-start"
              }`}
            >
              View
              <BsArrowUpRightCircle color="cyan" className="text-xl" />
            </div>
          </a>
        </div>
        {/* Image section \ */}
        <div className="h-[150px] w-[300px] md:h-[200px] md:w-[400px]  rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out relative">
          <img src={image} alt="Project Image" className="w-full h-full " />
          <div className="h-full w-full bg-cyan-400 opacity-20 absolute top-0 left-0 hover:opacity-0 transition-all duration-300"></div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProject;
