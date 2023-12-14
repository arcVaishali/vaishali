import React from "react";

const Profile = () => {
  const list = [
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/vaishali_p14",
      img: "",
    },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 px-32 py-16 m-8">
      <span className="col-span-12 text-7xl uppercase font-black">
        Socials and Profiles 
      </span>
      <div className="grid grid-cols-12 col-span-12 justify-center items-center mt-8 mb-8">
        <div className="grid grid-cols-6 col-span-6">
          {list.map((element, index) => (
            <div className="flex flex-row col-span-3 items-center border-t-[1px] border-black p-4">
              <div className="w-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  className="w-fill h-fill"
                />
              </div>
              <span className="text-base text-black font-extralight">
                {element.name} 
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 justify-center items-center">
        <span className="text-3xl font-light col-span-12 capitalize">Leetcode Stats</span>
        <div className="grid grid-cols-12 col-span-12">
         {
          
         }
        </div>
      </div>
    </div>
  );
};

export default Profile;
