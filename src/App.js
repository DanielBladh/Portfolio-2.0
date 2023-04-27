import React, { useRef } from "react";
import "./App.css";
import ButtonAppBar from "./components/Navbar/ResponsiveAppBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Navbar/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Element } from "react-scroll";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="App">
      <ButtonAppBar
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />
      <Element name="home" ref={homeRef}>
        <Home />
      </Element>
      <Element name="about" ref={aboutRef}>
        <About />
      </Element>
      <Element name="projects" ref={projectsRef}>
        <Projects />
      </Element>
      <Element name="contact" ref={contactRef}>
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
