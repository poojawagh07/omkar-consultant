import './Footer.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/Images/logo.jpg'
import fblogo from '../../assets/Images/facebook.logo.png'
import Twitter from '../../assets/Images/Twitter-Icon.png'
import LinkIcon from '../../assets/Images/Link-icon.png'
import instagram from '../../assets/Images/instagram-icon.png'
import mailIcon from '../../assets/Images/Mail-icon.png'
import contact from '../../assets/Images/Contact-icon.svg'
import location from '../../assets/Images/location.svg'

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='footer-grid'>
          {/* COLUMN 1 */}
          <div className='footer-col'>
            <div className='footer-logo'>
              <img src={logo} alt='Omkar Consultancy' />
            </div>
            <p className='brand-desc'>
              Your trusted partner in ISO certification and quality management excellence since 2010.
            </p>
            <div className='social-icons'>
              <a href='#'><img src={fblogo} alt='facebook' /></a>
              <a href='#'><img src={Twitter} alt='Twitter' /></a>
              <a href='#'><img src={LinkIcon} alt='Linkedin' /></a>
              <a href='#'><img src={instagram} alt='Instagram' /></a>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div className='footer-col'>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to='/'> Home
                </Link>
              </li>
              <li>
                <Link to='/about'> About Us
                </Link>
              </li>
              <li>
                <Link to='/services'> Services
                </Link>
              </li>
              <li>
                <Link to='/iso'> ISO Standards
                </Link>
              </li>
              <li>
                <Link to='/blog'> Blog
                </Link>
              </li>
              <li>
                <Link to='/careers'> Careers
                </Link>
              </li>
              <li>
                <Link to='/Feedback'> Feedback
                </Link>
              </li>
            </ul>
          </div>
          {/* COLUMN 3 */}
          <div className='footer-col'>
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link to='/service-details'> Gap Audit
                </Link>
              </li>
              <li>
                <Link to='/service-details'> Customized Training
                </Link>
              </li>
              <li>
                <Link to='/service-details'> Virtual Training
                </Link>
              </li>
              <li>
                <Link to='/service-details'> Documentation
                </Link>
              </li>
              <li>
                <Link to='/service-details'> Internal Audit
                </Link>
              </li>
              <li>
                <Link to='/service-details'> Supplier Audit
                </Link>
              </li>
            </ul>
          </div>
          {/* COLUMN 4 */}
          <div className='footer-col'>
            <h4>Contact Us</h4>
            <div className='contact-info'>
              <p>
                <img src={contact} alt='contact' /> +91 9930054078
              </p>
              <p>
                <img src={mailIcon} alt='Mail-icon' /> info@omkarconsultants.com
              </p>
              <p>
                <img src={location} alt='location-icon' /> 394/4, Radha Apartment, Sai Section, Ambernath (East) – 421501, India
              </p>
            </div>
            <div className='newsletter'>
              <h5>Newsletter</h5>
              <form className='newsletter-form'>
                <input type='email' placeholder='Your email' />
                <button type='submit'>
                  <img src={mailIcon} alt='Mail-icon' />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* FOOTER BOTTOM */}
        <div className='footer-bottom'>
          <p>
            © 2026 Omkar Consultancy. All rights reserved. Designed By :
            <a href='https://sirsonite.com/' target='_blank' rel='noopener noreferrer'>Sirsonite Solutions Pvt. Ltd.</a>
          </p>
          <div className='footer-links'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Service</a>
            <a href='#'>Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
