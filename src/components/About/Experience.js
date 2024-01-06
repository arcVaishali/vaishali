import React from "react";

const Experience = () => {
  const exp = [
    {
      name: "Frontend Developer",
      post: "Cats In Tech",
      tenure: "12-12-12",
    },
    {
      name: "Web Developer",
      post: "Vaishali.com",
      tenure: "12-12-12",
    },
    {
      name: "Designer",
      post: "Design.OG",
      tenure: "12-12-12",
    },
    {
      name: "Developer",
      post: "Alice in Wonderland",
      tenure: "12-12-12",
    },
    {
      name: "Sr. Developer",
      post: "Fla Fla Fla",
      tenure: "12-12-12",
    },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 py-32 px-16 justify-center items-center bg-black text-white my-64">
      <span className="col-span-8 col-start-3 font-black uppercase text-7xl text-center">
        Job Experience
      </span>
      <div className="grid grid-cols-12 col-span-12 m-16">
        {exp.map((element, index) => (
          <div className="flex col-span-12 justify-between items-center border-t-[1px] border-gray-700 p-[20px] transition hover:scale-90 delay-150 duration-1000 cursor-pointer">
            <span className="uppercase font-semibold text-xl">
              {element.name}
            </span>
            <div className="flex justify-evenly items-center">
              <span className="uppercase font-semibold text-sm">
                {element.post}
              </span>
              <span className="uppercase font-semibold text-sm">
                {element.tenure}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
