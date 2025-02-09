import Hobbies from "./components/pages/Hobbies.jsx";
import Home from "./components/pages/Home.jsx";
import Resume from "./components/pages/Resume.jsx";
import Projects from "./components/pages/Projects.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/BeyondCode" element={<Hobbies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
