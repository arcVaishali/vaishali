import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "../src/components/Home/Navbar";
import Footer from "../src/components/Home/Footer";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
      once: false,
      anchorPlacement: "top-center",
    });
    AOS.refresh();
  }, []);

  /*
 ⁡⁢⁢⁢​‌‍‌‍‍‍ React Animated Cursor- 𝗔 𝗥𝗲𝗮𝗰𝘁 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 𝘁𝗵𝗮𝘁 𝗿𝗲𝗽𝗹𝗮𝗰𝗲𝘀 𝘁𝗵𝗲 𝗻𝗮𝘁𝗶𝘃𝗲 𝗰𝘂𝗿𝘀𝗼𝗿 𝘄𝗶𝘁𝗵 𝗮 𝗰𝘂𝘀𝘁𝗼𝗺 𝗮𝗻𝗶𝗺𝗮𝘁𝗲𝗱 𝗷𝗮𝘄𝗻. 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗼𝗽𝘁𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗽𝗿𝗼𝗽𝘀 𝗮𝗹𝗹𝗼𝘄 𝘆𝗼𝘂 𝘁𝗼 𝗲𝗮𝘀𝗶𝗹𝘆 𝗰𝗿𝗮𝗳𝘁 𝗮 𝘂𝗻𝗶𝗾𝘂𝗲 𝗰𝘂𝗿𝘀𝗼𝗿 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲.​⁡ */

  return (
    <BrowserRouter>
      <AnimatedCursor
        // color="0, 0, 0"
        innerSize={30}
        outerSize={54}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={false}
        innerStyle={{
          backgroundColor: "rgb(255 , 255 , 255)",
        }}
        outerStyle={{
          backgroundColor: "rgb( 255 , 255 , 255)",
          mixBlendMode: "exclusion",
        }}
        // trailingSpeed={}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
