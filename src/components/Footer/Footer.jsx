import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <div className="linkbutton">
        <Link to="/contact" className="btn">
          <span>Contact</span>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
