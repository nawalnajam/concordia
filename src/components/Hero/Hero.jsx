import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaUser, FaBook } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* EXISTING HERO CONTENT */}
      <div className="hero-main-content">
        <div className="hero-content">
          <h1 className="hero-title">
            Shape Your Future with <span className="animated-title">Concordia</span>
          </h1>
          <p className="hero-subtitle">
            Join a community of learners and leaders. Explore our diverse programs designed to help you succeed in a rapidly changing world.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/admissions')}>
              Apply Now
            </button>
            <button className="btn-secondary" onClick={() => navigate('/programmes/undergraduate')}>
              Explore Programs
            </button>
          </div>
        </div>
        
        {/* SINGLE STATIC IMAGE */}
        <div className="hero-image-container">
          <img 
            src="step.png" 
            alt="Students collaborating on campus" 
            className="hero-image"
          />
        </div>
      </div>

      {/* FEATURES BAR (Kept unchanged) */}
      <div className="hero-features-bar">
        <div className="feature-item">
          <div className="feature-text">
            <h3>Scholarship Facility</h3>
            <p>Providing assistance for deserving students.</p>
          </div>
          <FaGraduationCap className="feature-icon" />
        </div>

        <div className="feature-item">
          <div className="feature-text">
            <h3>Skilled Lecturers</h3>
            <p>Learn from experienced and talented professionals.</p>
          </div>
          <FaUser className="feature-icon" />
        </div>

        <div className="feature-item">
          <div className="feature-text">
            <h3>Library & Labs</h3>
            <p>Access an extensive library and educational materials.</p>
          </div>
          <FaBook className="feature-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;