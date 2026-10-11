import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaChevronUp, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          
          {/* Column 1: About Institute */}
          <div className="footer-column">
            <h3 className="footer-heading">About Institute</h3>
            <ul className="footer-links">
              {/* 2. Replace <a> with <Link> and point to actual routes */}
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/admissions">Online Admission</Link></li>
              <li><Link to="/about#institute">General Information</Link></li>
              <li><Link to="/downloads">Fee Structure</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/admissions">Scholarships</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Explore Courses */}
          <div className="footer-column">
            <h3 className="footer-heading">Explore Courses</h3>
            <ul className="footer-links">
              <li><Link to="/programmes/undergraduate">Programs</Link></li>
              <li><Link to="/programmes/undergraduate">Arts and Design</Link></li>
              <li><Link to="/programmes/undergraduate">Computer Science and IT</Link></li>
              <li><Link to="/programmes/undergraduate">Management Sciences</Link></li>
              <li><Link to="/programmes/undergraduate">Education and Sports Sciences</Link></li>
              <li><Link to="/admissions">Eligibility / Doc's Required</Link></li>
              <li><Link to="/admissions">Admission Procedure</Link></li>
              <li><Link to="/contact">Visitor Feedback</Link></li>
            </ul>
          </div>

          {/* Column 3: Contacts (No changes needed here, it's just text) */}
          <div className="footer-column">
            <h3 className="footer-heading">Contacts</h3>
            <ul className="footer-contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <strong>Location: Plot # 14, Street # 2, Shamas Colony, Capital Homes, H-13, Islamabad, Pakistan.</strong><br />
                </div>
              </li>
             {/* Contacts Column mein */}
<li>
  <FaPhoneAlt className="contact-icon" />
  <div>
    <strong>Call Us :</strong><br />
    0332-5438326 | 0301-5323082
  </div>
</li>
             
            </ul>
          </div>

        </div>
      </div>

      {/* ... Footer Bottom and Floating buttons remain the same ... */}
      <div className="footer-bottom">
        <div className="footer-socials">
         {/* Facebook */}
<a 
  href="https://www.facebook.com/Concordia.College.Islamabad/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-icon" 
  title="Facebook"
>
  <FaFacebookF />
</a>
         <a 
  href="https://wa.me/923325438326" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="whatsapp-float"
  title="Chat on WhatsApp"
>
  <FaWhatsapp />
</a>
        </div>
        
        <div className="footer-copyright">
          <p>© Copyright Concordia Institute 2026. Designed and Developed by <strong>Step-School</strong></p>
        </div>
      </div>

      <div className="floating-buttons">
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaChevronUp />
        </button>
      
      </div>
    </footer>
  );
};

export default Footer;