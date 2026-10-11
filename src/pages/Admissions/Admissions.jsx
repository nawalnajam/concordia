import React from 'react';
import { FaFileAlt, FaClipboardCheck, FaMoneyCheckAlt, FaUserGraduate, FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Admissions.css';

const admissionSteps = [
  {
    id: 1,
    icon: <FaFileAlt />,
    title: "Fill Online Form",
    description: "Complete the online admission form with accurate personal and academic details."
  },
  {
    id: 2,
    icon: <FaClipboardCheck />,
    title: "Submit Documents",
    description: "Provide your Matric/FSc result cards, CNIC/B-Form, and passport size photographs."
  },
  {
    id: 3,
    icon: <FaUserGraduate />,
    title: "Entry Test / Interview",
    description: "Appear for the entry test or interview (where applicable) to assess your eligibility."
  },
  {
    id: 4,
    icon: <FaMoneyCheckAlt />,
    title: "Pay Admission Fee",
    description: "Once selected, pay the admission fee to confirm and secure your seat."
  }
];

const requirements = [
  "Matric / O-Level Result Card (Attested)",
  "FSc / A-Level Result Card (Attested) — for Undergraduate",
  "CNIC or B-Form (Student & Father/Guardian)",
  "4 Passport Size Photographs",
  "Character Certificate from last institution",
  "Migration Certificate (if applicable)"
];

const Admissions = () => {
  const navigate = useNavigate();

  return (
    <div className="admissions-page">
      {/* ================= PAGE BANNER ================= */}
      <ScrollReveal direction="up">
        <section className="page-banner">
          <div className="banner-overlay">
            <h1>Admissions</h1>
            <p>Begin your journey to academic excellence today</p>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= INTRO SECTION ================= */}
      <ScrollReveal direction="up">
        <div className="admissions-intro">
          <div className="intro-content">
            <h2>Admissions Open</h2>
            <div className="intro-underline"></div>
            <p>
              Concordia Colleges welcomes students who are passionate about learning and ready to 
              shape their future. Our admission process is simple, transparent, and designed to 
              help you get started on your academic journey with ease.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ================= ADMISSION PROCESS ================= */}
      <div className="admissions-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <h2>How to Apply</h2>
            <div className="section-underline"></div>
            <p>Follow these four simple steps to complete your admission</p>
          </div>
        </ScrollReveal>

        <div className="steps-grid">
          {admissionSteps.map((step, index) => (
            <ScrollReveal key={step.id} direction="up" delay={index * 100}>
              <div className="step-card">
                <div className="step-number">{step.id}</div>
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ================= REQUIREMENTS SECTION ================= */}
      <ScrollReveal direction="up">
        <div className="requirements-section">
          <div className="requirements-container">
            <div className="requirements-text">
              <h2>Required Documents</h2>
              <div className="section-underline-left"></div>
              <p className="requirements-subtitle">
                Please bring the following documents when submitting your application.
              </p>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index}>
                    <FaCheckCircle className="req-icon" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="requirements-image">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Admission Documents" 
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ================= CTA SECTION ================= */}
      <ScrollReveal direction="up">
        <div className="admissions-cta">
          <div className="cta-content">
            <h2>Ready to Apply?</h2>
            <p>Our admissions team is here to help you every step of the way.</p>
            <div className="cta-buttons">
              <button onClick={() => navigate('/contact')} className="cta-btn primary">
                <FaPhoneAlt /> Contact Admissions
              </button>
              <a 
                href="https://wa.me/923325438326" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-btn whatsapp"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Admissions;