import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="grid w-[550px] lg:w-screen grid-cols-12 p-16 lg:p-32 mt-8 bg-[#121212] text-white">
      <div
        data-aos="fade-up-left"
        className="flex flex-col text-4xl lg:text-8xl font-black justify-center items-center col-start-3 col-end-11 uppercase"
        style={{ fontFamily: "Fontsfree net xillian, sans-serif" }}
      >
        <span data-aos="fade-up-left" className="text-center m-2">
          Have an Idea?
        </span>
        <Link
          to="/contact"
          className="rounded-full uppercase p-4 lg:py-4 lg:px-8 border-[1px] border-white hover:bg-[#e4eae4da] hover:text-black"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Contact;
