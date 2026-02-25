import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

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
              {/* <a href="/" className="nav-link active">
                <b>Home</b>
              </a> */}
              <Link to="/" className="nav-link"><b>Home</b></Link>
            </li>
            <li>
              {/* <a href="/about" className="nav-link">
                <b>About Us</b>
              </a> */}
              <Link to="/about" className="nav-link"><b>About Us</b></Link>
            </li>
            <li>
              {/* <a href="/services" className="nav-link">
                <b>Services</b>
              </a> */}
              <Link to="/services" className="nav-link"><b>Services</b></Link>
            </li>
            <li>
              {/* <a href="/iso" className="nav-link">
                <b>ISO Standards</b>
              </a> */}
              <Link to="/iso" className="nav-link"><b>ISO Standards</b></Link>
            </li>
            <li>
              {/* <a href="/blog" className="nav-link">
                <b>Blog</b>
              </a> */}
              <Link to="/blog" className="nav-link"><b>Blog</b></Link>
            </li>
            <li>
              {/* <a href="/careers" className="nav-link">
                <b>Careers</b>
              </a> */}
              <Link to="/careers" className="nav-link"><b>Careers</b></Link>
            </li>
          </ul>
          {/* <a href="/ContactUs" className="btn-contact">
            Contact Us
          </a> */}
          <Link to="/ContactUs" className="btn-contact">Contact Us</Link>

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
