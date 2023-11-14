import React from "react";

const Hero = () => {
  const names = ["LinkedIn", "LinkedIn", "LinkedIn"];
  return (
    <div className="grid grid-cols-12 justify-center items-center">
      <span className="flex flex-col col-span-12 col-start-4 col-end-10 text-center font-black text-7xl mt-32">
        <span className="col-span-12 col-start-4 col-end-10 text-center font-extralight text-5xl m-2">
          Hey! I am Vaishali
        </span>
        Web Developer Based in Delhi
      </span>

      <span className="col-span-8 col-start-4 col-end-10 text-center text-sm m-2">
        Quis culpa culpa Lorem velit dolore.Esse elit irure minim ad est
        incididunt commodo eu nulla tempor labore dolor.
      </span>

      <button className="col-span-4 col-start-6 col-end-8 bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full px-4 py-2 m-2">
        Book a free call
      </button>

      <marquee className="mt-64 grid grid-cols-12 col-span-12 border-t-[1px] border-b-[1px] border-black p-4">
        {names.map((element, index) => (
          <span className="px-8">{element}</span>
        ))}
      </marquee>
    </div>
  );
};

export default Hero;
