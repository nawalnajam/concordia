import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaUserGraduate, FaBookReader, FaGlobe, FaTrophy } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'; // 👈 Import
import './About.css';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="about-page">
      
      {/* ================= PAGE BANNER (Now Animated) ================= */}
      <ScrollReveal direction="up">
        <section className="page-banner">
          <div className="banner-overlay">
            <h1>About Us</h1>
          </div>
        </section>
      </ScrollReveal>

    {/* ================= 1. ABOUT THE INSTITUTE ================= */}
{/* ================= 1. ABOUT THE INSTITUTE ================= */}
<ScrollReveal direction="up">
  <section id="institute" className="about-section about-institute">
    <div className="container">
      <div className="about-text-content">
        <h2 className="section-title">About Concordia Colleges</h2>
        <div className="title-underline"></div>
        <p>
          <strong>Concordia Colleges</strong>, a project of Beaconhouse — one of Pakistan's most 
          trusted and prestigious educational networks — is committed to delivering world-class 
          education that empowers students to excel academically and personally. With a legacy of 
          academic excellence and a forward-thinking approach, Concordia has established itself as 
          a leading institution dedicated to nurturing the leaders of tomorrow.
        </p>
        <p>
          Our campuses offer a diverse range of programs spanning Intermediate, Undergraduate, and 
          Professional studies, all designed to bridge the gap between classroom learning and 
          real-world application. Backed by highly qualified faculty, modern facilities, and a 
          student-centric learning environment, Concordia Colleges strives to develop critical 
          thinkers, creative problem-solvers, and responsible citizens. We believe in holistic 
          education that not only builds successful careers but also shapes strong character and 
          lifelong values.
        </p>
      </div>
      <div className="about-image-content">
         <img 
           src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
           alt="Concordia Colleges Campus" 
         />
      </div>
    </div>
  </section>
</ScrollReveal>
      {/* ================= 2. WHY CHOOSE US ================= */}
      <ScrollReveal direction="left">
        <section id="why-choose-us" className="about-section why-choose-us">
          <div className="container">
            <div className="section-header-centered">
              <h2 className="section-title">Why Choose Us?</h2>
              <div className="title-underline centered"></div>
              <p className="section-subtitle">
                We provide an environment where academic excellence meets practical innovation.
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <FaGraduationCap className="feature-icon" />
                <h3>Expert Faculty</h3>
                <p>Learn from highly qualified professionals and industry experts who bring years of academic and practical experience to the classroom.</p>
              </div>
              <div className="feature-card">
                <FaLaptopCode className="feature-icon" />
                <h3>Modern Facilities</h3>
                <p>Access state-of-the-art computer labs, modern science laboratories, a well-stocked library, and high-speed internet across the campus.</p>
              </div>
              <div className="feature-card">
                <FaUserGraduate className="feature-icon" />
                <h3>Career Focused</h3>
                <p>Our programs are designed in consultation with industry leaders to meet current market demands, ensuring high employability for our graduates.</p>
              </div>
              <div className="feature-card">
                <FaBookReader className="feature-icon" />
                <h3>Supportive Environment</h3>
                <p>We provide scholarships, mentorship programs, and a supportive campus culture to ensure that every student has the tools to succeed.</p>
              </div>
              <div className="feature-card">
                <FaGlobe className="feature-icon" />
                <h3>Global Exposure</h3>
                <p>Through our international programs like the GRE - USA Degree Program, we open doors for our students to compete on a global scale.</p>
              </div>
              <div className="feature-card">
                <FaTrophy className="feature-icon" />
                <h3>Proven Track Record</h3>
                <p>With hundreds of enrolled students and a growing alumni network, our graduates are making their mark in top organizations nationwide.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= 3. OUR VISION ================= */}
      <ScrollReveal direction="up">
        <section id="vision" className="about-section our-vision">
          <div className="container">
            <div className="vision-content">
              <h2 className="section-title text-white">Our Vision</h2>
              <div className="title-underline"></div>
              <p className="vision-statement">
                "To be a leading center of academic excellence, fostering innovation, research, and 
                character building to produce globally competitive professionals who contribute 
                positively to society."
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};

export default About;