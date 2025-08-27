import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarButton from "./NavbarButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import FadeIn from "../../FramerMotion/variants";
import { motion } from "framer-motion";

const NavbarMain = () => {
  const [menu, setmenu] = useState(false);
  const handletoggleMenu = () => {
    setmenu(!menu);
  };
  return (
    <>
      <motion.nav
        variants={FadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-[1300px]  w-full mx-auto px-4 fixed left-[50%] -translate-x-[50%] z-20 text-white flex gap-4 h-[90px]"
      >
        <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto border-[0.5px] border-orange-400 bg-black rounded-r-full rounded-l-full px-2">
          <NavbarLogo />
          <div className={`${menu ? "block" : "hidden"} lg:block`}>
            <NavbarLinks setmenu={setmenu} menu={menu} />
          </div>
          <NavbarButton />
        </div>
        <div className="flex items-center rounded-full border-1 border-orange-400 p-6 bg-black lg:hidden">
          <button
            className="text-2xl rounded-full border border-orange-400 p-2 bg-black transition-all duration-300 ease-in-out"
            onClick={handletoggleMenu}
          >
            {menu ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default NavbarMain;
