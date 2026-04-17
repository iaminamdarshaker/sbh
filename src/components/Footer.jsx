import React from 'react';
import './Footer.css';
import { Globe, Share2, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src="/assets/logo.jpeg" alt="Logo" className="footer-logo" />
              <span className="footer-brand-name">Scholar's Biology House</span>
            </div>
            <p className="footer-desc">
              Beed’s most trusted coaching institute. We build concepts, clear confusion, and prepare you for a bright future.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#courses">Our Courses</a></li>
              <li><a href="#demo">Book a Demo</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">About the Mentor</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Info</h4>
            <ul>
              <li>
                <MapPin size={18} className="f-icon" />
                <span>Zam zam colony, Kausar Nagar, Beside Aman Lawns, Beed – 431122</span>
              </li>
              <li>
                <Phone size={18} className="f-icon" />
                <span>+91 7276407734<br/>+91 7020730419</span>
              </li>
              <li>
                <Mail size={18} className="f-icon" />
                <span>amerfaraz.pharma@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Scholar's Biology House. All rights reserved.</p>
          <p className="designer-tag">Designed by Shakeroddin Inamdar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
