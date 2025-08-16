import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          console.log("SUCCESS!");
          toast.success("Message sent successfully ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast(error.text);
        }
      );
  };

  const form = useRef();
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col [&>*]:text-gray-200 [&>*]:mb-5 bg-amber-900/20 p-5 rounded-xl mt-3"
      >
        <input
          type="text"
          name="form_name"
          placeholder="Your Name"
          required
          className="bg-orange-200/20 p-2 rounded-xl"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          name="form_email"
          placeholder="Your Email"
          required
          className="bg-orange-200/20 p-2 rounded-xl"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="bg-orange-200/20 p-2 rounded-xl"
          rows={8}
          cols={50}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button className="bg-cyan-500 p-2 rounded-xl hover:bg-cyan-600 transition-all duration-300 ease-in-out">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactMeForm;
