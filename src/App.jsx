import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <main>
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={"About"} />
          <Route path="/contact" element={"contact"} />
        </Routes>
      </Router> */}
      <HomePage/>
    </main>
  );
}

export default App;
