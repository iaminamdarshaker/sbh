import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubjectClarity from './components/SubjectClarity';
import Courses from './components/Courses';
import Authority from './components/Authority';
import StudentProof from './components/StudentProof';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <SubjectClarity />
      <Courses />
      <Authority />
      <StudentProof />
      <Features />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
