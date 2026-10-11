import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaInstagram, FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apni backend API call laga sakte hain
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* ================= PAGE BANNER ================= */}
      <ScrollReveal direction="up">
        <section className="page-banner">
          <div className="banner-overlay">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Get in touch with us today!</p>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= CONTACT INFO CARDS ================= */}
      <div className="contact-cards-container">
        <div className="contact-cards-grid">
          <ScrollReveal direction="up" delay={0}>
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <p>Plot # 14, Street # 2, Shamas Colony, Capital Homes, H-13, Islamabad, Pakistan</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FaPhoneAlt />
              </div>
              <h3>Call Us</h3>
              <p>0332-5438326</p>
              <p>0301-5323082</p>
             
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <FaClock />
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ================= FORM & INFO SECTION ================= */}
      <div className="contact-main-container">
        <div className="contact-main-grid">

          {/* LEFT: Get In Touch Info */}
          <ScrollReveal direction="left">
            <div className="contact-side-info">
              <h2>Get In Touch</h2>
              <div className="contact-underline"></div>
              <p className="contact-side-text">
                Have questions about admissions, programs, or anything else? Our team is here to help. 
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="contact-feature">
                <div className="contact-feature-icon"><FaCheckCircle /></div>
                <div>
                  <h4>Quick Response</h4>
                  <p>We respond to all inquiries within 24 hours.</p>
                </div>
              </div>

              <div className="contact-feature">
                <div className="contact-feature-icon"><FaCheckCircle /></div>
                <div>
                  <h4>Expert Guidance</h4>
                  <p>Our counselors help you choose the right program.</p>
                </div>
              </div>

              <div className="contact-feature">
                <div className="contact-feature-icon"><FaCheckCircle /></div>
                <div>
                  <h4>Campus Tours</h4>
                  <p>Schedule a visit and see our campus first-hand.</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="contact-socials">
              <a 
  href="https://www.facebook.com/Concordia.College.Islamabad/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="contact-social-icon"
  title="Facebook"
>
  <FaFacebookF />
</a>
                <a 
                  href="https://wa.me/923325438326" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-icon whatsapp"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
               
              
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Contact Form */}
          <ScrollReveal direction="right">
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <div className="contact-underline"></div>

              {submitted && (
                <div className="form-success">
                  <FaCheckCircle /> Thank you! Your message has been sent successfully.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Enter your phone" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="Message subject" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea 
                    name="message" 
                    rows="6" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Type your message here..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ================= MAP SECTION ================= */}
      <ScrollReveal direction="up">
        <div className="contact-map">
          <iframe
            title="Comwave Institute Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.469!2d73.1214!3d33.5663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU4LjciTiA3M8KwMDcnMTcuMCJF!5e0!3m2!1sen!2s!4v1600000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </ScrollReveal>

    </div>
  );
};

export default ContactUs;