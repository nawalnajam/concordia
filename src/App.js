import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Programmes from './pages/Programmes/Programmes';
import Admissions from './pages/Admissions/Admissions';
import Facilities from './pages/Facilities/Facilities';
import ContactUs from './pages/ContactUs/ContactUs';
import Downloads from './pages/Downloads/Downloads';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* We use one component for Programmes but pass a prop or handle inside */}
            <Route path="/programmes/:type" element={<Programmes />} /> 
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;