import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "../src/components/Home/Navbar";
import Footer from "../src/components/Home/Footer";
import Test from "../src/components/Home/Test";
import { useScroll, animated } from "@react-spring/web";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact2 from "./components/Home/Contact"

function App() {
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
        <Route path="/test" element={<Test />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
