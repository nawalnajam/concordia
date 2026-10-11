import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

// direction prop se hum control karenge ke section kahan se aaye (up, left, right)
const ScrollReveal = ({ children, direction = 'up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jab element screen par nazar aaye
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Ek dafa appear hone ke baad observer hata dein
          }
        });
      },
      { threshold: 0.15 } // 15% visibility par animation trigger hogi
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${direction} ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;