import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/Images/logo.jpg";
import fblogo from "../../assets/Images/facebook.logo.png";
import Twitter from "../../assets/Images/Twitter-Icon.png";
import LinkIcon from "../../assets/Images/Link-icon.png";
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
          {/* COLUMN 2 */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/services"> Services</Link>
              </li>
              <li>
                <Link to="/iso"> ISO Standards</Link>
              </li>
              <li>
                <Link to="/blog"> Blog</Link>
              </li>
              <li>
                <Link to="/careers"> Careers</Link>
              </li>
              <li>
                <Link to="/Feedback"> Feedback</Link>
              </li>
            </ul>
          </div>
          {/* COLUMN 3 */}
          <div className="footer-col">
            <h4>List The Standards</h4>
            <ul>
              <li>
                <Link to="IsoCertification"> ISO 9001:2015</Link>
              </li>
              <li>
                <Link to="IsoCertification">ISO 14001:2015</Link>
              </li>
              <li>
                <Link to="IsoCertification">ISO 45001:2018</Link>
              </li>
              <li>
                <Link to="IsoCertification"> IATF 16949:2016</Link>
              </li>
              <li>
                <Link to="IsoCertification"> IRIS 22163:2023</Link>
              </li>
              <li>
                <Link to="IsoCertification"> ISO 13485:2016</Link>
              </li>
              <li>
                <Link to="IsoCertification"> ISO 14064:2018</Link>
              </li>
            </ul>
          </div>
          {/* colum 4 */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link to="/service-details"> Gap Audit</Link>
              </li>
              <li>
                <Link to="/service-details"> Customized Training</Link>
              </li>
              {/* <li>
                <Link to='/service-details'> Virtual Training
                </Link>
              </li> */}
              <li>
                <Link to="/service-details"> Standard Trainings</Link>
              </li>
              <li>
                <Link to="/service-details"> Internal Audit</Link>
              </li>
              <li>
                <Link to="/service-details"> Supplier Audit</Link>
              </li>
              <li>
                <Link to="/service-details"> Documentation</Link>
              </li>
            </ul>
          </div>
          {/* COLUMN 4 */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <img src={contact} alt="contact" /> +91 9930054078
              </p>
              <p>
                <img src={mailIcon} alt="Mail-icon" /> info@omkarconsultants.com
              </p>
              <p>
                <img src={location} alt="location-icon" /> 394/4, Radha
                Apartment, Sai Section, Ambernath (East) – 421501, India
              </p>
            </div>
          </div>
        </div>
        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © 2026 Omkar Consultancy. All rights reserved. Designed By :
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
