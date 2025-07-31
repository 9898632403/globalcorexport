import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="brand-section">
          <h2 className="brand-name">Globlecorexport</h2>
          <p className="tagline">We Deliver Trust Across Borders</p>
        </div>

        <nav className="footer-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="social-media">
          <a href="https://www.instagram.com/globalcore_exports?igsh=MWFtaWE3bnN3amd1dA==" aria-label="Instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="http://linkedin.com/in/neel-kothari-5b8940377" aria-label="LinkedIn" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/message/IUD3FQJUUFZCK1" aria-label="WhatsApp" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>

        <div className="copyright">
          <p>© 2025 Globalcorexport. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;