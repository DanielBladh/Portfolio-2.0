import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/Navbar/ResponsiveAppBar";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
