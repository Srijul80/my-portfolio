import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <>
      <div id="contact" className="mt-[100px]">
        <h2 className="text-4xl text-center text-cyan-400 mb-3">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center p-5 gap-20  bg-amber-600/20 rounded-xl">
          <ContactMeLeft />
          <ContactMeRight />
        </div>
      </div>
    </>
  );
};

export default ContactMeMain;
