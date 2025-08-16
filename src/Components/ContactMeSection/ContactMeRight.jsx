import React from "react";
import contactImg from "../../Images/email-image.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";

const ContactMeRight = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-7 ">
        <div>
          <img
            src={contactImg}
            alt="contact image"
            className="h-60 md:h-auto"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-white flex justify-center items-center gap-2">
            <HiOutlineMail />
            srijul80@gmail.com
          </p>
          <p className="text-white flex justify-center items-center gap-2">
            <IoIosCall />
            88946-38018
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactMeRight;
