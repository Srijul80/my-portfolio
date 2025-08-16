import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-scroll";
const NavbarButton = () => {
  return (
    <Link to="contact" smooth={true} duration={300} offset={-100}>
      <button className="px-4 py-2 text-md lg:text-xl rounded-full border border-cyan-400 flex items-center justify-center bg-gradient-to-l from-cyan-400 to-orange-400 hover:scale-110 duration-300 transition-all ease-in-out  hover:border-orange-400 hover:shadow-cyanshadow cursor-pointer ">
        Hire Me <GoArrowDownRight className="hidden md:block" />
      </button>
    </Link>
  );
};

export default NavbarButton;
