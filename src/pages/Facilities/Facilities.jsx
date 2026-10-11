import React from 'react';
import { FaLaptopCode, FaBook, FaFutbol, FaUtensils, FaUserMd, FaPrayingHands, FaBus, FaWifi, FaFlask, FaMicrophone } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import '../../styles/SharedPage.css';
import './Facilities.css';

const facilitiesData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Modern Computer Labs",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art computer labs equipped with high-speed internet, latest software, and modern hardware to ensure hands-on learning experience for CS & IT students."
  },
  {
    id: 2,
    icon: <FaBook />,
    title: "Extensive Library",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A vast collection of academic books, journals, research papers, and digital resources to support your learning journey anytime you need them."
  },
  {
    id: 3,
    icon: <FaFlask />,
    title: "Science Laboratories",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Well-equipped Physics, Chemistry, Biology, and Medical Labs with modern apparatus for practical experimentation and scientific research."
  },
  {
    id: 4,
    icon: <FaFutbol />,
    title: "Sports Grounds",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dedicated grounds for cricket, football, badminton, and indoor sports to promote physical fitness, teamwork, and healthy competition."
  },
  {
    id: 5,
    icon: <FaUtensils />,
    title: "Cafeteria & Food Court",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A hygienic cafeteria offering fresh, affordable meals and snacks where students can relax, refresh, and socialize between classes."
  },
  {
    id: 6,
    icon: <FaUserMd />,
    title: "Medical Room",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "On-campus medical facility with trained staff and first-aid essentials to handle any health emergency promptly and safely."
  },
  {
    id: 7,
    icon: <FaPrayingHands />,
    title: "Prayer Area",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A peaceful and clean prayer space within the campus, allowing students and staff to fulfill their religious obligations comfortably."
  },
  {
    id: 8,
    icon: <FaWifi />,
    title: "Free Campus Wi-Fi",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-speed Wi-Fi connectivity available across the campus to support your research, assignments, and online learning needs."
  },
  {
    id: 9,
    icon: <FaMicrophone />,
    title: "Seminar Hall & Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Fully equipped seminar halls and auditoriums for guest lectures, workshops, cultural events, and student presentations."
  },
];

const Facilities = () => {
  return (
    <div className="facilities-page">
      {/* ================= PAGE BANNER ================= */}
      <ScrollReveal direction="up">
        <section className="page-banner">
          <div className="banner-overlay">
            <h1>Our Facilities</h1>
            <p>Everything you need for a world-class learning experience</p>
          </div>
        </section>
      </ScrollReveal>

      {/* ================= INTRO SECTION ================= */}
      <ScrollReveal direction="up">
        <div className="facilities-intro">
          <div className="intro-content">
            <h2>Campus Built for Success</h2>
            <div className="intro-underline"></div>
            <p>
              At Comwave Institute, we believe that a great learning experience goes beyond the classroom. 
              Our campus is designed to provide students with all the resources, comfort, and infrastructure 
              they need to thrive academically, physically, and socially.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ================= FACILITIES GRID ================= */}
      <div className="facilities-container">
        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <ScrollReveal key={facility.id} direction="up" delay={index * 80}>
              <div className="facility-card">
                <div className="facility-image-wrapper">
                  <img src={facility.image} alt={facility.title} className="facility-image" />
                  <div className="facility-icon-badge">{facility.icon}</div>
                </div>
                <div className="facility-content">
                  <h3 className="facility-title">{facility.title}</h3>
                  <p className="facility-description">{facility.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <ScrollReveal direction="up">
        <div className="facilities-cta">
          <div className="cta-content">
            <h2>Want to See It Yourself?</h2>
            <p>Visit our campus and experience the environment first-hand. Our team will be happy to give you a tour.</p>
            <a href="/contact" className="cta-btn">Schedule a Visit</a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Facilities;