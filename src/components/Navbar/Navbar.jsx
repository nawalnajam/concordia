import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaHome, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showProgrammesDropdown, setShowProgrammesDropdown] = useState(false);

  return (
    <header className="header-container">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        
        {/* Left Side: Phone + WhatsApp */}
        <div className="top-bar-left">
          <FaPhoneAlt className="icon-phone" />
          <span className="phone-numbers">
            0332-5438326 | 0301-5323082
          </span>
          <a
            href="https://wa.me/923325438326"
            target="_blank"
            rel="noopener noreferrer"
            className="top-whatsapp-link"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        {/* Right Side: Admissions Dropdown + Home Icon */}
        <div className="top-bar-right">
          
          {/* Admissions Dropdown */}
          <div className="top-link dropdown-container">
            <span className="nav-link-text-top">
              Admissions <span className="arrow">▼</span>
            </span>
            <ul className="dropdown-menu-top">
              <li><Link to="/admissions">Apply Now</Link></li>
              <li><Link to="/admissions#requirements">Required Documents</Link></li>
              <li><Link to="/programmes/intermediate">Intermediate Programs</Link></li>
              <li><Link to="/programmes/undergraduate">Undergraduate Programs</Link></li>
              <li><Link to="/contact">Contact Admissions</Link></li>
            </ul>
          </div>

          {/* Home Icon */}
          <Link to="/" className="home-icon-link" title="Home">
            <FaHome className="icon-home" />
          </Link>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="main-navbar">
        
        {/* Logo Area */}
        <div className="logo-container">
          <img 
            src="/sirhad.png" 
            alt="Concordia Colleges Logo" 
            className="logo-image" 
          />
          <div className="logo-text-group">
            <span className="logo-text-main">CONCORDIA</span>
            <span className="logo-text-sub">COLLEGES</span>
            <span className="logo-text-tagline">A Project of Beaconhouse</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          
          {/* Home */}
          <li className="nav-item">
            <Link to="/" className="nav-link-text">Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li
            className="nav-item dropdown-container"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <span className="nav-link-text">
              About Us <span className="arrow">▼</span>
            </span>
            {showAboutDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/about#institute">About the Institute</Link></li>
                <li><Link to="/about#why-choose-us">Why Choose Us</Link></li>
                <li><Link to="/about#vision">Our Vision</Link></li>
              </ul>
            )}
          </li>

          {/* Programmes Dropdown */}
          <li
            className="nav-item dropdown-container"
            onMouseEnter={() => setShowProgrammesDropdown(true)}
            onMouseLeave={() => setShowProgrammesDropdown(false)}
          >
            <span className="nav-link-text">
              Programmes <span className="arrow">▼</span>
            </span>
            {showProgrammesDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/programmes/undergraduate">Undergraduate</Link></li>
                <li><Link to="/programmes/intermediate">Intermediate</Link></li>
              </ul>
            )}
          </li>

          {/* Admissions */}
          <li className="nav-item">
            <Link to="/admissions" className="nav-link-text">Admissions</Link>
          </li>

          {/* Facilities */}
          <li className="nav-item">
            <Link to="/facilities" className="nav-link-text">Facilities</Link>
          </li>

          {/* Contact Us */}
          <li className="nav-item">
            <Link to="/contact" className="nav-link-text">Contact Us</Link>
          </li>

          {/* Downloads */}
          <li className="nav-item">
            <Link to="/downloads" className="nav-link-text">Downloads</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;