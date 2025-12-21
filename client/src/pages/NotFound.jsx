import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faHome,
  faArrowLeft,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import '../styles/notfound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            
            {/* Error Icon */}
            <div className="notfound-icon">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            
            {/* Error Code */}
            <h1 className="notfound-code">404</h1>
            
            {/* Error Title */}
            <h2 className="notfound-title">Page Not Found</h2>
            
            {/* Error Message */}
            <p className="notfound-message">
              Oops! The page you're looking for seems to have wandered off into the digital void.
              It might have been moved, deleted, or never existed in the first place.
            </p>
            
            {/* Search Suggestion */}
            <div className="notfound-search">
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search for something else..."
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="notfound-actions">
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/" className="btn btn-primary btn-lg">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Back to Home
                </Link>
                
                <button 
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => window.history.back()}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Go Back
                </button>
                
                <a href="mailto:support@industria.com" className="btn btn-outline-secondary btn-lg">
                  Contact Support
                </a>
              </div>
            </div>
            
            {/* Helpful Links */}
            <div className="notfound-links mt-5">
              <h5 className="mb-3">You might be looking for:</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <Link to="/" className="card card-hover text-decoration-none">
                    <div className="card-body text-center">
                      <h6 className="card-title">Home</h6>
                      <p className="card-text small text-muted">Back to the main page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mb-3">
                  <Link to="/bookings" className="card card-hover text-decoration-none">
                    <div className="card-body text-center">
                      <h6 className="card-title">Bookings</h6>
                      <p className="card-text small text-muted">Manage your bookings</p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mb-3">
                  <Link to="/login" className="card card-hover text-decoration-none">
                    <div className="card-body text-center">
                      <h6 className="card-title">Login</h6>
                      <p className="card-text small text-muted">Access your account</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Technical Info (for debugging) */}
            <div className="notfound-technical mt-4">
              <details className="technical-details">
                <summary className="technical-summary">
                  Technical Details
                </summary>
                <div className="technical-content mt-2">
                  <p className="small mb-1">
                    <strong>URL:</strong> {window.location.href}
                  </p>
                  <p className="small mb-1">
                    <strong>Timestamp:</strong> {new Date().toLocaleString()}
                  </p>
                  <p className="small mb-0">
                    <strong>User Agent:</strong> {navigator.userAgent}
                  </p>
                </div>
              </details>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;