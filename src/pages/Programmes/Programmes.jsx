import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaFlask, FaLaptopCode, FaPalette,FaHeartbeat, FaBook, FaGlobe, FaBriefcase } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import '../../styles/SharedPage.css';
import './Programmes.css';

// ================= INTERMEDIATE PROGRAMS DATA =================
const intermediateData = [
  {
    id: 1,
    icon: <FaBook />,
    title: "Informal Education (Intermediate)",
    description: "Build a strong foundation for your future academic and professional career with our comprehensive intermediate programs.",
    programs: [
      "Pre-Engineering",
      "Pre-Medical",
      "F.A (Faculty of Arts)",
      "I.C.S (Computer Science)",
      "I.Com (Commerce)",
      "F.A I.T (Information Technology)"
    ]
  },
  {
    id: 2,
    icon: <FaPalette />,
    title: "Inter Tech Programs",
    description: "Develop practical, industry-relevant skills in creative and technical fields with our Inter Tech diplomas.",
    programs: [
      "Graphic Media",
      "Designing and Production",
      "Hairdressing and Beautician"
    ]
  },
  {
    id: 3,
    icon: <FaHeartbeat />,
    title: "Medical Tech & Nursing",
    description: "Start your journey in the healthcare sector with our specialized medical technology and nursing programs.",
    programs: [
      "Dispensing",
      "MLT (Medical Lab Technology)",
      "Nursing"
    ]
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "GRE - USA Degree Program",
    description: "An internationally recognized pathway that is equivalent to Intermediate / A-Levels, opening doors to global universities.",
    programs: [
      "Equivalent to Intermediate / A-Levels"
    ]
  }
];

// ================= UNDERGRADUATE PROGRAMS DATA =================
const undergradData = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "Education Programs",
    description: "Shape the future of education with our comprehensive teaching and educational leadership degrees.",
    programs: [
      "BS Education",
      "B.Ed (1 Year)",
      "B.Ed (1.5 Years)",
      "ADP Education"
    ]
  },
  {
    id: 2,
    icon: <FaBook />,
    title: "English Programs",
    description: "Master the English language and literature to unlock career opportunities in education, media, and communications.",
    programs: [
      "BS-English",
      "ADP-English"
    ]
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Computer Science & IT",
    description: "Get equipped with cutting-edge programming, software development, and IT skills for the digital age.",
    programs: [
      "BS Computer Science",
      "ADP Computer Science",
      "BS Information Technology"
    ]
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    title: "Business & Management",
    description: "Prepare for leadership roles in the business world with our industry-focused management degrees.",
    programs: [
      "BBA (Bachelor of Business Administration)",
      "BS Commerce",
      "ADP Business Administration"
    ]
  },
  {
    id: 5,
    icon: <FaFlask />,
    title: "Applied Sciences",
    description: "Explore scientific research and applied sciences through our modern laboratory-based programs.",
    programs: [
      "BS Biotechnology",
      "BS Environmental Sciences"
    ]
  }
];

const Programmes = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  // Default to undergraduate if invalid
  const isUndergrad = type === 'undergraduate';
  const programData = isUndergrad ? undergradData : intermediateData;
  const pageTitle = isUndergrad ? 'Undergraduate Programs' : 'Intermediate Programs';
  const pageSubtitle = isUndergrad
    ? 'Four-year bachelor\'s degrees designed to launch your professional career.'
    : 'Two-year intermediate programs to build a strong academic foundation.';

  return (
    <div className="programmes-page">
      {/* ================= PAGE BANNER ================= */}
      <ScrollReveal direction="up">
        <section className="page-banner">
          <div className="banner-overlay">
            <h1>{pageTitle}</h1>
            <p>{pageSubtitle}</p>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= TAB SWITCHER ================= */}
      <div className="programme-tabs-container">
        <div className="programme-tabs">
          <button
            className={`tab-btn ${!isUndergrad ? 'active' : ''}`}
            onClick={() => navigate('/programmes/intermediate')}
          >
            Intermediate
          </button>
          <button
            className={`tab-btn ${isUndergrad ? 'active' : ''}`}
            onClick={() => navigate('/programmes/undergraduate')}
          >
            Undergraduate
          </button>
        </div>
      </div>

      {/* ================= PROGRAMS GRID ================= */}
      <div className="programmes-container">
        <div className="programmes-grid">
          {programData.map((program, index) => (
            <ScrollReveal key={program.id} direction="up" delay={index * 100}>
              <div className="programme-card">
                <div className="programme-icon-wrapper">
                  {program.icon}
                </div>
                <h3 className="programme-title">{program.title}</h3>
                <p className="programme-description">{program.description}</p>
                <div className="programme-divider"></div>
                <ul className="programme-list">
                  {program.programs.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <ScrollReveal direction="up">
        <div className="programmes-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Applications are open for the current admissions session. Secure your seat today.</p>
            <button onClick={() => navigate('/admissions')} className="cta-btn">
              Apply Now
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Programmes;