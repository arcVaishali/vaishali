import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import Logo from "../../assets/final_logo_design_4.png";
import { navLink } from "../../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse: false,
  }));
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      {showMenu === false ? (
        <div className="grid grid-cols-12 max-[600px]:mr-16 max-[600px]:-ml-16 w-[100vw] gap-16 justify-between items-center p-4 bg-[#f0f0f0]">
          <animated.div
            style={{ ...spring }}
            className="grid grid-cols-5 col-span-6"
          >
            <Link className="w-[150px] mt-4 ml-16" to="/">
              <img src={Logo} />
            </Link>
          </animated.div>
          <animated.div
            style={{ ...spring }}
            className="min-[200px]:hidden max-[900px]:hidden lg:flex lg:col-span-6 lg:gap-8 xl:ml-64"
          >
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
          <animated.div
            style={{ ...spring }}
            className="flex col-span-1 justify-end col-start-9 lg:hidden"
          >
            <FontAwesomeIcon
              className="text-4xl cursor-pointer"
              icon={faHamburger}
              onClick={() => setShowMenu(true)}
            />
          </animated.div>
        </div>
      ) : (
        ""
      )}

      {showMenu === true ? (
        <animated.div
          style={{ ...spring }}
          className="h-full w-[850px] bg-gradient-to-tr from-[#f0f0f0] to-[#ffffff] border-[1px] border-gray-400 rounded-md p-[50px]"
        >
          <div className="grid grid-rows-5 gap-4">
            {navLink.map((element) => (
              <Link
                to={element.to}
                className="uppercase text-sm font-extralight grid col-span-1 hover:text-gray-600 focus:underline active:underline"
                style={
                  location.pathname === element.to
                    ? { textDecoration: "underline" }
                    : { textDecoration: "none" }
                }
                onClick={() => setShowMenu(false)}
              >
                {element.name}
              </Link>
            ))}
          </div>
        </animated.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
