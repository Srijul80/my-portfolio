import React from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMeLeft = () => {
  return (
    <>
      <div className="w-full">
        <h2 className="text-3xl text-orange-500 mb-4">Get in Touch</h2>
        <p className="text-white">
          Interested in working together or have a question? Feel free to reach
          out and I’ll get back to you as soon as possible.
        </p>
        <ContactMeForm />
      </div>
    </>
  );
};

export default ContactMeLeft;
