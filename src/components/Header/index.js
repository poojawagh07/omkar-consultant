import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container header-flex">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul className="nav-menu">
            <li>
              <a href="/" className="nav-link active">
                <b>Home</b>
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                <b>About Us</b>
              </a>
            </li>
            <li>
              <a href="/services" className="nav-link">
                <b>Services</b>
              </a>
            </li>
            <li>
              <a href="/iso" className="nav-link">
                <b>ISO Standards</b>
              </a>
            </li>
            <li>
              <a href="/blog" className="nav-link">
                <b>Blog</b>
              </a>
            </li>
            <li>
              <a href="/careers" className="nav-link">
                <b>Careers</b>
              </a>
            </li>
          </ul>

          <button className="btn-contact">Contact Us</button>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
