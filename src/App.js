import "./App.css";
import ButtonAppBar from "./components/Navbar/ResponsiveAppBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects"


function App() {
  return (
    <>
    <ButtonAppBar />
      <Home />
      <About />
      <Projects />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/About" element={<About/>} />
    //     <Route path="Projects" element={<Projects/>} />
    //     <Route path="Contact" element={<Contact/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
