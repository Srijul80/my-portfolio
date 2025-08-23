import React from "react";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";
const CertificateText = () => {
  return (
    <>
      <motion.div
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-[100px] flex flex-col gap-4 px-2"
      >
        <h2 className="text-4xl text-cyan-400 text-center">Certification</h2>
        <p className="text-white text-center text-xl">
          Completed a 6-month Frontend Development course, gaining hands-on
          experience in HTML, CSS, JavaScript, React, and Tailwind CSS. This
          certification highlights my ability to create responsive, visually
          engaging, and high-performance web applications using modern
          development tools and best practices.
        </p>
      </motion.div>
    </>
  );
};

export default CertificateText;
