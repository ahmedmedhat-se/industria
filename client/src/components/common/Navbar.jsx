import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarCheck,
    faUser,
    faHome,
    faSignOutAlt,
    faBars,
    faTimes,
    faDashboard,
    faUsersCog
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks/useAuth.jsx';
import '../../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const NavLinks = () => (
        <>
            <li className="nav-item">
                <Link
                    className={`nav-link ${isActive('/')}`}
                    to="/"
                    onClick={() => setIsOpen(false)}
                >
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Home
                </Link>
            </li>

            {user && (
                <>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive('/bookings')}`}
                            to="/bookings"
                            onClick={() => setIsOpen(false)}
                        >
                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                            My Bookings
                        </Link>
                    </li>

                    {user.role === 'admin' && (
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive('/admin')}`}
                                to="/admin"
                                onClick={() => setIsOpen(false)}
                            >
                                <FontAwesomeIcon icon={faUsersCog} className="me-2" />
                                Admin Panel
                            </Link>
                        </li>
                    )}

                    {user.role === 'admin' && (
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive('/dashboard')}`}
                                to="/dashboard"
                                onClick={() => setIsOpen(false)}
                            >
                                <FontAwesomeIcon icon={faDashboard} className="me-2" />
                                Dashboard
                            </Link>
                        </li>
                    )}
                </>
            )}
        </>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark industria-navbar">
            <div className="container">
                {/* Brand Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <FontAwesomeIcon icon={faCalendarCheck} className="navbar-brand-icon" />
                    <span className="ms-2">Industria</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>

                {/* Navbar Content */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLinks />
                    </ul>

                    {/* Right Side - Auth/User Section */}
                    <div className="d-flex align-items-center">
                        {user ? (
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                                    onClick={toggleUserMenu}
                                    aria-expanded={showUserMenu}
                                >
                                    <div className="user-avatar me-2">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <span className="user-name">{user.username}</span>
                                </button>

                                <div className={`dropdown-menu dropdown-menu-end ${showUserMenu ? 'show' : ''}`}>
                                    <div className="dropdown-header">
                                        <div className="d-flex align-items-center">
                                            <div className="user-avatar-large me-3">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">{user.username}</h6>
                                                <small className="text-muted">{user.email}</small>
                                                <div className="mt-1">
                                                    <span className={`badge bg-${user.role === 'admin' ? 'warning' : 'info'}`}>
                                                        {user.role}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/profile">
                                        <FontAwesomeIcon icon={faUser} className="me-2" />
                                        Profile
                                    </Link>
                                    <button className="dropdown-item" onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex gap-2">
                                <Link to="/login" className="btn btn-outline-light">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-primary">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;