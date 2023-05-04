import React, { useRef } from "react";
import "./App.css";
import ButtonAppBar from "./components/Navbar/ResponsiveAppBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Navbar/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <ButtonAppBar
      />
      <Element className="home" >
        <Home />
      </Element>
      <Element className="about">
        <About />
      </Element>
      <Element className="projects">
        <Projects />
      </Element>
      <Element className="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
