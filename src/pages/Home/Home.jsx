import React from 'react';
import Hero from '../../components/Hero/Hero';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import CoursesMarquee from '../../components/CoursesMarquee/CoursesMarquee'; // 👈 Import
import FeaturedCourses from '../../components/FeaturedCourses/FeaturedCourses';
import StatsBanner from '../../components/StatsBanner/StatsBanner';
import FacultyShowcase from '../../components/FacultyShowcase/FacultyShowcase';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

const Home = () => {
  return (
    <>
      <Hero />
      
      <ScrollReveal direction="up">
        <WelcomeSection />
      </ScrollReveal>

      {/* ✅ Add Marquee here - Right after WelcomeSection */}
      <CoursesMarquee />

      <ScrollReveal direction="left">
        <FeaturedCourses />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <FacultyShowcase />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <StatsBanner />
      </ScrollReveal>
    </>
  );
};

export default Home;