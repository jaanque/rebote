import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">rebote</h3>
          <p className="footer-tagline">Own the moment.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Host a space</a></li>
            <li><a href="#">Find a space</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-subheading">Connect</h4>
          <ul className="footer-socials">
            <li><a href="#" aria-label="Facebook">F</a></li>
            <li><a href="#" aria-label="Instagram">I</a></li>
            <li><a href="#" aria-label="Twitter">T</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-subheading">Contact</h4>
          <p>Email: support@rebote.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} rebote. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
