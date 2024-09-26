import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { HomePage } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Project from "./pages/Project";
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Project/>} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
    </main>
  );
}

export default App;
