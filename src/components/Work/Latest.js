import React from "react";

const Latest = () => {
  const img = [
    {
      category: "Development",
      image:
        "https://assets.website-files.com/64400efa17592edf6ae1a250/64e6f35a2dd4319151e11b5e_Rectangle%2041170-p-500.png",
      name: "MediCare",
    },
    {
      category: "Development",
      image:
        "https://assets.website-files.com/64400efa17592edf6ae1a250/64e6f35a2dd4319151e11b5e_Rectangle%2041170-p-500.png",
      name: "MediCare",
    },
    {
      category: "Development",
      image:
        "https://assets.website-files.com/64400efa17592edf6ae1a250/64e6f35a2dd4319151e11b5e_Rectangle%2041170-p-500.png",
      name: "MediCare",
    },
  ];
  return (
    <div className="grid grid-cols-12 justify-center items-center p-32">
      <span className="col-span-12 col-start-2 text-7xl uppercase font-black p-16 m-8">
        Latest Projects
      </span>
      <div className="grid grid-cols-12 col-span-12 gap-16 justify-center items-center">
        {img.map((element, index) => (
          <div className="flex flex-col col-span-4">
            <span className="border-l-8 border-black text-xs uppercase p-2 my-8">
              {element.category}
            </span>
            {/* <div className="rotate-6 col-span-3"> */}
            <div className="z-8 rotate-6">
              <img src={element.image} className="w-fill h-fill" />
            </div>
            <span className="relative -left-4 bg-black text-white text-l uppercase z-9 p-2 rotate-6">
              {element.name}
            </span>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
