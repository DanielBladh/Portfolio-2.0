import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/Navbar/ResponsiveAppBar";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <main>
      <ButtonAppBar />
      <Home />
      <About />
    </main>
  );
}

export default App;
