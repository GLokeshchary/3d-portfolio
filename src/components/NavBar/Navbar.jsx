import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiFishingBoat } from "react-icons/gi";
import "./NavBar.css";
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
const Navbar = () => {
  return (
    <header className="nav-header">
      <Link to="/">
        <GiFishingBoat className="logo" />
      </Link>
      <nav className="nav-conatiner">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <span>About</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span>Projects</span>
        </NavLink>
        <div className="dropdown-container">
          <span>Resume</span>
          <div className="dropdown-content">
            <div className="resume-box">
              <FaFileAlt />
              <a href="/assests/CharyResume.pdf" target="_blank">
                VIEW RESUME
              </a>
            </div>
            <div className="resume-box">
              <IoMdDownload />
              <a href="/assests/CharyResume.pdf" download="LokeshCharyResume.pdf">
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
