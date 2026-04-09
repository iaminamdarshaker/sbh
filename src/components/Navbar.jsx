import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <img src="/assets/logo.jpeg" alt="Scholar's Biology House Logo" className="logo" />
          <div className="brand">
            <span className="brand-name">Scholar's Biology House</span>
          </div>
        </div>
        <div className="nav-actions">
          <a href="tel:+917020730419" className="btn btn-outline nav-call-btn">
            <PhoneCall size={18} />
            <span>Call Now</span>
          </a>
          <a href="#demo" className="btn btn-primary">Book Free Demo</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
