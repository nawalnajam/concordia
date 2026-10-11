import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './FacultyShowcase.css';

// Data for the slideshow with Pakistani & South Asian students/teachers
const facultySlides = [
  {
    id: 1,
    title: "Faculty of Arts & Design",
    description: "Our Arts & Design faculty fosters creativity and technical skills in Graphic Media, Designing, and Production. Students learn to blend artistic vision with practical application, preparing them for dynamic careers in the creative industries.",
    backgroundColor: "#0a1e40",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 2,
    title: "Faculty of Sciences, Computer Science & IT",
    description: "The Faculty of Sciences, Computer Science & IT offers cutting-edge education in scientific research, computing, and information technology. It prepares students with technical expertise, problem-solving skills, and innovation to excel in the digital and scientific world.",
    backgroundColor: "#0a4a8a",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 3,
    title: "Faculty of Education",
    description: "The Faculty of Education is committed to shaping the future of teaching and sports sciences. Through programs like BS Education, B.Ed, and ADP Education, we prepare educators to inspire the next generation with modern pedagogical skills.",
    backgroundColor: "#c61a22",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 4,
    title: "Faculty of Life Sciences & Medical Technology",
    description: "The Faculty of Life Sciences and Medical Technology is dedicated to advancing knowledge in biological and health sciences. It equips students with scientific expertise and practical skills to address global challenges in healthcare, biotechnology, and nursing.",
    backgroundColor: "#0a1e40",
    images: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
    ]
  }
];

const FacultyShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic (changes every 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facultySlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facultySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facultySlides.length) % facultySlides.length);
  };

  const activeSlide = facultySlides[currentSlide];

  return (
    <section className="faculty-showcase-section">
      
      {/* Navigation Arrows */}
      <button className="faculty-nav-btn left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="faculty-nav-btn right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      {/* Slide Content */}
      <div 
        className="faculty-slide-container fade-in" 
        key={activeSlide.id}
      >
        
        {/* Left Side: Text */}
        <div 
          className="faculty-text-content" 
          style={{ backgroundColor: activeSlide.backgroundColor }}
        >
          <h2>{activeSlide.title}</h2>
          <p>{activeSlide.description}</p>
          <button className="faculty-read-more-btn">Read More</button>
        </div>

        {/* Right Side: 3-Image Grid */}
        <div className="faculty-image-grid">
          <div className="grid-top">
            <img src={activeSlide.images[0]} alt="Faculty top" />
          </div>
          <div className="grid-bottom-left">
            <img src={activeSlide.images[1]} alt="Faculty bottom left" />
          </div>
          <div className="grid-bottom-right">
            <img src={activeSlide.images[2]} alt="Faculty bottom right" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FacultyShowcase;