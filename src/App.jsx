"homepage";
"https://d-arteaga.github.io/darteaga";
import Hobbies from "./components/pages/Hobbies.jsx";
import Home from "./components/pages/Home.jsx";
import Resume from "./components/pages/Resume.jsx";
import Projects from "./components/pages/Projects.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Hobbies" element={<Hobbies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
