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

  return (
    <BrowserRouter>
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
