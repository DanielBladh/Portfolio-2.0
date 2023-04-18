import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/Nav/ResponsiveAppBar";

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route exact path="" element />
        <Route exact path="" element />
      </Routes>
    </Router>
  );
}

export default App;
