import React from 'react';
import './CoursesMarquee.css';

// Saare main courses ki list
const courses = [
  "F.A (Faculty of Arts)",
  "F.A I.T",
  "I.C.S (Computer Science)",
  "Pre-Medical",
  "Pre-Engineering",
  "I.Com (Commerce)",
  "Medical Lab Technology (MLT)",
  "Nursing",
  "Dispensing",
  "Graphic Media",
  "Designing & Production",
  "Hairdressing & Beautician",
  "BS Education",
  "B.Ed (1 Year)",
  "B.Ed (1.5 Years)",
  "ADP Education",
  "BS-English",
  "ADP-English",
  "GRE - USA Degree Program"
];

const CoursesMarquee = () => {
  return (
    <div className="courses-marquee-wrapper">
      <div className="courses-marquee-track">
        {/* Hum list ko DO dafa render karenge taake loop smooth rahe */}
        {courses.map((course, index) => (
          <span key={`first-${index}`} className="marquee-item">
            {course}
            <span className="marquee-separator">★</span>
          </span>
        ))}
        {courses.map((course, index) => (
          <span key={`second-${index}`} className="marquee-item">
            {course}
            <span className="marquee-separator">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CoursesMarquee;