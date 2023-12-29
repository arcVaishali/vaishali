import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center p-16">
      <span className="col-span-12 text-center text-7xl uppercase font-bold my-4">
        Contact Me
      </span>
      <form
        className="col-span-12 grid grid-rows-1 justify-center items-center"
        action=""
        name=""
        method="POST"
        noValidate
        autoComplete="true"
      >
        <div className="grid grid-rows-1 my-4 w-[600px]">
          <label className="text-[10px] uppercase font-semibold" for="name">
            Your Name
          </label>
          <input
            className="border-gray-800 border-[1px] bg-transparent text-[10px] p-2"
            type="text"
            placeholder="Your Name"
            id="name"
          />
        </div>

        <div className="grid grid-rows-1 my-4">
          <label className="text-[10px] uppercase font-semibold" for="name">
            Your Email
          </label>
          <input
            className="border-gray-800 border-[1px] bg-transparent text-[10px] p-2"
            type="text"
            placeholder="Type your email"
            id="name"
          />
        </div>

        <div className="grid grid-rows-1 my-4">
          <label className="text-[10px] uppercase font-semibold" for="name">
            Subject
          </label>
          <input
            className="border-gray-800 border-[1px] bg-transparent text-[10px] p-2"
            type="text"
            placeholder="Type subject"
            id="name"
          />
        </div>

        <div className="grid grid-rows-1 my-4">
          <label className="text-[10px] uppercase font-semibold" for="name">
            Message
          </label>
          <textarea
            className="border-gray-800 border-[1px] bg-transparent text-[10px] p-2"
            placeholder="Type your message..."
            id="name"
          />
        </div>

        <button className="grid cols-span-8 w-[600px] rounded-full bg-black text-white hover:bg-white hover:text-black border-2 border-black p-4 my-4">Send</button>
      </form>
    </div>
  );
};

export default Contact;
