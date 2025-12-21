import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faShieldAlt,
  faUsers,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="industria-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <FontAwesomeIcon icon={faCalendarCheck} className="footer-brand-icon" />
              <span className="ms-2">Industria</span>
            </div>
            <p className="footer-description mt-3">
              Professional booking system for artspaces and workspaces. 
              Streamline your creative workflow with our intuitive platform.
            </p>
            <div className="footer-contact mt-4">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                <span>123 Creative District, Art City</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <span>info@industria.com</span>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/spaces">Spaces</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Features</h5>
            <ul className="footer-features">
              <li>
                <FontAwesomeIcon icon={faClock} className="me-2" />
                <span>Real-time Availability</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                <span>Secure Booking</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} className="me-2" />
                <span>Team Management</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCog} className="me-2" />
                <span>Advanced Controls</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Stay Updated</h5>
            <p className="footer-newsletter-text">
              Subscribe to get updates on new features and announcements.
            </p>
            <div className="newsletter-form mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Email"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">
                &copy; {currentYear} Industria Booking System. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/cookies">Cookie Policy</Link>
                <Link to="/sitemap">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;