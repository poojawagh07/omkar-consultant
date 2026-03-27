import "./Footer.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import logo from "../../assets/Images/logo.jpg";
import fblogo from "../../assets/Images/facebook.logo.png";
import Twitter from "../../assets/Images/Twitter-Icon.png";
import LinkIcon from "../../assets/Images/Link-icon.png";
import instagram from "../../assets/Images/instagram-icon.png";
import mailIcon from "../../assets/Images/Mail-icon.png";
import contact from "../../assets/Images/Contact-icon.svg";
import location from "../../assets/Images/location.svg";

const Footer = () => {
  const [services, setServices] = useState([]);
  const [isoList, setIsoList] = useState([]);
  const [loadingISO, setLoadingISO] = useState(true);

  const createSlug = (text) => {
    return text
      ?.toLowerCase()
      .replace(/:/g, "") // remove only colon
      .trim()
      .replace(/\s+/g, "-"); // spaces → dash
  };

  useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/Services/home")
      .then((res) => res.json())
      .then((data) => setServices(data.data || []))
      .catch((err) => console.error("Services API Error:", err));
  }, []);

  useEffect(() => {
    const fetchISO = async () => {
      try {
        const res = await fetch(
          "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/courses",
        );

        const data = await res.json();

        console.log("Courses API:", data);

        if (data.status) {
          setIsoList(data.data); // 👈 full objects with slug
        } else {
          setIsoList([]);
        }
      } catch (err) {
        console.error("ISO API Error:", err);
        setIsoList([]);
      } finally {
        setLoadingISO(false);
      }
    };

    fetchISO();
  }, []);

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Omkar Consultancy" />
            </div>
            <p className="brand-desc">
              Your trusted partner in ISO certification and quality management
              excellence since 2010.
            </p>

            <div className="social-icons">
              <a href="#">
                <img src={fblogo} alt="facebook" />
              </a>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>

              <a
                href="https://www.linkedin.com/company/112436841/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkIcon} alt="LinkedIn" />
              </a>

              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/iso">ISO Standards</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/Feedback">Feedback</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>List The Standards</h4>
            <ul>
              {loadingISO ? (
                <li>Loading...</li>
              ) : isoList.length > 0 ? (
                isoList.slice(0, 4).map((item, index) => (
                  <li key={index}>
                    <Link to={`/iso/${item.slug}`}>{item.title}</Link>
                  </li>
                ))
              ) : (
                <li>No ISO Standards Found</li>
              )}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {services.length > 0 ? (
                services.map((item, index) => (
                  <li key={index}>
                    <Link to={`/service-details/${createSlug(item.title)}`}>
                      {item.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <img src={contact} alt="contact" /> +91 9930054078
              </p>
              <p>
                <img src={mailIcon} alt="mail" /> info@omkarconsultants.com
              </p>
              <p>
                <img src={location} alt="location" />
                394/4, Radha Apartment, Sai Section, Ambernath (East) – 421501,
                India
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Omkar Consultants. All rights reserved. Designed By :
            <a
              href="https://sirsonite.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sirsonite Solutions Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
