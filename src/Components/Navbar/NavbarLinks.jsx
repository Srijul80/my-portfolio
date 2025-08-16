import React from "react";
import { Link } from "react-scroll";

const NavbarLinks = () => {
  const Links = [
    { link: "About Me", Section: "about" },
    { link: "Skills", Section: "skill" },
    { link: "Certification", Section: "certification" },
    { link: "Projects", Section: "projects" },
    { link: "Contact", Section: "contact" },
  ];
  return (
    <>
      <ul className="flex gap-6 font-bold text-center py-4 flex-col lg:flex-row absolute lg:relative left-0 top-25 lg:left-auto lg:top-auto bg-cyan-400/30 backdrop-blur-lg w-full lg:bg-black lg:backdrop-blur-none  ">
        {Links.map((link, index) => {
          return (
            <li key={index} className="group">
              <Link
                to={link.Section}
                smooth={true}
                duration={300}
                offset={-100}
                className="cursor-pointer hover:text-cyan-400"
              >
                {link.link}
              </Link>
              <div className="mx-auto bg-cyan-500 w-0 h-[1px] group-hover:w-full transition-all duration-500"></div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavbarLinks;
