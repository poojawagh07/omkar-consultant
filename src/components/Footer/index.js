import "./Footer.css";

import logo from "../../assets/Images/logo.jpg";
import fblogo from "../../assets/Images/facebook.logo.png";
import Twitter from "../../assets/Images/Twitter-Icon.png";
import Link from "../../assets/Images/Link-icon.png";
import instagram from "../../assets/Images/instagram-icon.png";
import mailIcon from "../../assets/Images/Mail-icon.png";
import contact from "../../assets/Images/Contact-icon.svg";
import location from "../../assets/Images/location.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* COLUMN 1 */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Omkar Consultancy" />
            </div>
            <p className="brand-desc">
              Your trusted partner in ISO certification and quality management
              excellence since 2010.
            </p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={fblogo} alt="facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={Link} alt="Linkedin" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">ISO Standards</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          {/* COLUMN 3 */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Gap Audit</a>
              </li>
              <li>
                <a href="#">Customized Training</a>
              </li>
              <li>
                <a href="#">Virtual Training</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Internal Audit</a>
              </li>
              <li>
                <a href="#">Supplier Audit</a>
              </li>
            </ul>
          </div>
          {/* COLUMN 4 */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <img src={contact} alt="contat" />
                +1 (234) 567-890
              </p>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={mailIcon} alt="Mail-icon" />
                </a>{" "}
                info@omkarconsultants.com
              </p>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={location} alt="location-icon" />
                </a>
                123 Business Park, City, State 12345
              </p>
            </div>
            <div className="newsletter">
              <h5>Newsletter</h5>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={mailIcon} alt="Mail-icon" />
                  </a>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2026 Omkar Consultancy. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
