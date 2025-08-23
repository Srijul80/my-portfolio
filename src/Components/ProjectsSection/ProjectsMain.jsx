import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import image1 from "../../Images/website-img-1.jpg";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";
const ProjectsMain = () => {
  const Projects = [
    {
      name: "Demo Project",
      Year: "2025",
      align: "right",
      image: image1,
      link: "#",
    },
    {
      name: "Demo Project",
      Year: "2025",
      align: "left",
      image: image1,
      link: "#",
    },
  ];
  return (
    <>
      <div id="projects">
        <ProjectsText />
        <div>
          {Projects.map((item, index) => {
            return (
              <motion.div
                variants={FadeIn(`${item.align}`, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: "auto" }}
              >
                <SingleProject
                  key={index}
                  name={item.name}
                  year={item.Year}
                  align={item.align}
                  image={item.image}
                  link={item.link}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsMain;
