import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-12 p-32 mt-8 bg-[#121212] text-white">
      <div
        className="flex flex-col text-8xl font-black justify-center items-center col-start-3 col-end-11 uppercase"
        style={{ fontFamily: "Fontsfree net xillian, sans-serif" }}
      >
        <span className="text-center m-2">Have an Idea?</span>
        <button className="rounded-full uppercase py-4 px-8 border-[1px] border-white hover:bg-[#e4eae4da] hover:text-black">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Contact;
