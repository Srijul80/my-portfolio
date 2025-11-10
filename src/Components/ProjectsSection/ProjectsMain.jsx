import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import image1 from "../../Images/webiste-img-1.png";
import image2 from "../../Images/website-img-2.webp";

const ProjectsMain = () => {
  const Projects = [
    {
      name: "Front-end Ecom Site",
      Year: "2025",
      align: "right",
      image: image1,
      link: "https://ecommerce-frontend-qxja.vercel.app/",
    },
    {
      name: "Demo Project",
      Year: "2025",
      align: "left",
      image: image2,
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
              <div>
                <SingleProject
                  key={index}
                  name={item.name}
                  year={item.Year}
                  align={item.align}
                  image={item.image}
                  link={item.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsMain;
