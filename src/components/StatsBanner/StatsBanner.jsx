import React, { useState, useEffect, useRef } from 'react';
import './StatsBanner.css';

// Data update kiya hai taake 'target' number aur 'suffix' alag ho jaye
const statsData = [
  { id: 1, target: 35, suffix: '', text: 'PROFESSIONAL\nINSTRUCTORS' },
  { id: 2, target: 43, suffix: '', text: 'DEGREE\nPROGRAMS' },
  { id: 3, target: 11, suffix: '', text: 'INTERMEDIATE\nPROGRAMS' },
  { id: 4, target: 500, suffix: '+', text: 'ENROLLED\nSTUDENTS' }
];

const StatsBanner = () => {
  // Initially saare numbers 0 honge
  const [counts, setCounts] = useState([0, 0, 0, 0]); 
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer: Check karega ke section screen par aaya hai ya nahi
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Agar section screen par nazar aa raha hai (30% visible)
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect(); // Animation sirf ek dafa chalani hai
        }
      },
      { threshold: 0.3 } // 30% visibility par trigger hoga
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const duration = 2500; // Animation ki total duration (2.5 seconds)
    const frameRate = 1000 / 60; // 60 Frames per second (smooth animation)
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames; // 0 se 1 tak progress

      // Har ek stat ke liye naya number calculate karein
      const updatedCounts = statsData.map((stat) => {
        if (frame === totalFrames) return stat.target;
        // Math.floor use kar rahe hain taake decimal numbers na aayein
        return Math.floor(stat.target * progress);
      });

      setCounts(updatedCounts);

      // Jab animation complete ho jaye toh interval band kar dein
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);
  };

  return (
    <section className="stats-banner" ref={sectionRef}>
      <div className="stats-overlay">
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div className="stat-item" key={stat.id}>
              {/* Yahan ab hum state se updated count display kar rahe hain */}
              <div className="stat-number">
                {counts[index]}{stat.suffix}
              </div>
              <div className="stat-text">
                {stat.text.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </div>
              <div className="stat-underline"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;