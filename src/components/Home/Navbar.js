import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

const Navbar = () => {
  const navLink = [
    { name: "home", to: "/" },
    { name: "about", to: "/about" },
    { name: "work", to: "/work" },
    { name: "blog", to: "/blog" },
    { name: "profiles", to: "/profile" },
    { name: "contact", to: "/contact" },
  ];
  const location = useLocation();
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse: false,
  }));

  //   useEffect(()=>{
  //     api.start({
  //         from : { y : 0 } ,
  //         to : { y : 5 } ,
  //     })
  //   } , []) ;

  return (
    <div className="grid grid-cols-12 w-[100vw] gap-16 justify-between items-center p-4 bg-[#f0f0f0]">
      <animated.div
        style={{ ...spring }}
        className="grid grid-cols-5 col-span-6"
      >
        Vaishali
      </animated.div>
      <animated.div style={{ ...spring }} className="flex col-span-6 gap-8">
        {navLink.map((element) => (
          <Link
            to={element.to}
            className="uppercase text-sm font-extralight grid col-span-1 hover:text-gray-600 focus:underline active:underline"
            style={
              location.pathname === element.to
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            {element.name}
          </Link>
        ))}
      </animated.div>
    </div>
  );
};

export default Navbar;
