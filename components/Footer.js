import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Smart Traffic Management</h3>
          <p>AI-Powered Solution for Urban Mobility</p>
        </div>
        <div className="footer-section">
          <h3>Team CITian</h3>
          <ul>
            <li>Sadhu J</li>
            <li>Praju K K</li>
            <li>Madan Gowda B S</li>
            <li>Thirtha Prasad C N</li>
            <li>Sri Lakshmi</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/praju-k-gowda/"><FaGithub /></a>
            <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
            <a href="https://github.com/"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Project OMEGA 2025 - CITian Team. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;