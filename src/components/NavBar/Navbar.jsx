import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiFishingBoat } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import "./NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setResumeOpen(false); // close resume menu when toggling
  };

  const toggleResume = (e) => {
    e.stopPropagation(); // prevent closing parent menu
    setResumeOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setResumeOpen(false);
  };

  return (
    <header className="nav-header">
      <Link to="/" onClick={closeMenus}>
        <GiFishingBoat className="logo" />
      </Link>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
        <NavLink to="/about" onClick={closeMenus}>
          <span>About</span>
        </NavLink>

        <NavLink to="/projects" onClick={closeMenus}>
          <span>Projects</span>
        </NavLink>

        <div className="dropdown-container">
          <span onClick={toggleResume}>Resume</span>
          <div className={`dropdown-content ${resumeOpen ? "show" : ""}`}>
            <div className="resume-box">
              <FaFileAlt style={{ color: "gold" }} />
              <a
                href="/CharyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
            <div className="resume-box">
              <IoMdDownload style={{ color: "gold" }} />
              <a href="/CharyResume.pdf" download="LokeshCharyResume.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
