import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaAngleDown } from 'react-icons/fa';
import './FeaturedCourses.css';

// UPDATED COURSE DATA WITH YOUR SPECIFIC PROGRAMS
const coursesData = [
  {
    id: 1,
    image: "/inter.png",
    title: "Informal Education (Intermediate)",
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Inter Tech Programs",
    programs: [
      "Graphic Media",
      "Designing and Production",
      "Hairdressing and Beautician"
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Medical Tech & Nursing",
    programs: [
      "Dispensing",
      "MLT (Medical Lab Technology)",
      "Nursing"
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "GRE - USA Degree Program",
    programs: [
      "Equivalent to Intermediate / A-Levels"
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Education Programs",
    programs: [
      "BS Education",
      "B.Ed (1 Year)",
      "B.Ed (1.5 Years)",
      "ADP Education"
    ]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "English Programs",
    programs: [
      "BS-English",
      "ADP-English"
    ]
  }
];

const FeaturedCourses = () => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    let interval;
    
    if (!isHovering) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
          const scrollAmount = 320; // Approximate width of one card + gap

          // If reached the end, scroll back to start
          if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 3000); // Scrolls every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isHovering]);

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="featured-courses-section">
      {/* Header Area */}
      <div className="fc-header">
        <div className="fc-header-text">
          <h2 className="fc-title">Featured Courses</h2>
          <p className="fc-description">
            Comwave Institute offers a wide range of intermediate, undergraduate, and technical programs across various disciplines.
          </p>
          <p className="fc-subdescription">
            Here's a list of departments/faculties and some potential programs offered:
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="fc-nav-buttons">
          <button className="fc-nav-btn prev" onClick={scrollLeft}><FaChevronLeft /></button>
          <button className="fc-nav-btn next" onClick={scrollRight}><FaChevronRight /></button>
        </div>
      </div>

      {/* Cards Container */}
      <div 
        className="fc-cards-container" 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {coursesData.map((course) => (
          <div className="fc-card" key={course.id}>
            <div className="fc-card-image-wrapper">
              <img src={course.image} alt={course.title} className="fc-card-image" />
            </div>
            
            <div className="fc-card-content">
              <h3 className="fc-card-title">{course.title}</h3>
              
              <ul className="fc-program-list">
                {course.programs.map((program, index) => (
                  <li key={index}>{program}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile "Read More" link */}
      <div className="fc-mobile-read-more">
        <span>Read more</span>
        <FaAngleDown />
      </div>
    </section>
  );
};

export default FeaturedCourses;