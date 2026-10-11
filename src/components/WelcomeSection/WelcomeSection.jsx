import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeSection.css';

const WelcomeSection = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome-section">
      {/* Left Side: Text Content */}
      <div className="welcome-content">
        <h2 className="welcome-title">Welcome to our Campus</h2>
        <p className="welcome-text">
          Welcome to Concordia Collage, a leading educational institution in Pakistan committed 
          to providing quality education and fostering academic excellence. We invite you to 
          explore our vibrant campus, where you'll find a supportive learning environment, state-of-
          the-art facilities, and a dedicated Department committed to your success. At Concordia, 
          we empower students with the knowledge and skills they need to thrive in today's 
          competitive world. Join us on this exciting journey of learning and discovery.
        </p>
        
        <button 
          className="read-more-btn" 
          onClick={() => navigate('/about')}
        >
          Read More
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="welcome-image-container">
        {/* ✅ CHANGE THIS LINE: Point it to your new image in the public folder */}
        <img 
          src="/banner.png" 
          alt="Comwave Institute Campus Building" 
          className="welcome-image"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;