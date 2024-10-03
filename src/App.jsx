import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { HomePage } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Project from "./pages/Project";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <main>
      <ToastContainer />
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
    </main>
  );
}

export default App;
