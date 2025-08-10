import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTrafficLight, FaChartLine, FaVideo, FaInfoCircle, FaTachometerAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaTrafficLight className="navbar-icon" />
          <span>Smart Traffic</span>
        </Link>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" onClick={toggleNavbar}>
              <FaTachometerAlt className="nav-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/analytics" className="nav-link" onClick={toggleNavbar}>
              <FaChartLine className="nav-icon" />
              <span>Analytics</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cameras" className="nav-link" onClick={toggleNavbar}>
              <FaVideo className="nav-icon" />
              <span>Cameras</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signals" className="nav-link" onClick={toggleNavbar}>
              <FaTrafficLight className="nav-icon" />
              <span>Signals</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleNavbar}>
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;