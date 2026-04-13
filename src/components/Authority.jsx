import React, { useEffect, useRef } from 'react';
import mentorImg from '../assets/mentor.png';
import './Authority.css';

const Authority = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="section authority-section" ref={sectionRef}>
      <div className="container">
        <div className="authority-wrapper glass">
          <div className="authority-layout">
            <div className="authority-image-container">
              <img src={mentorImg} alt="Syed Amer Faraz Raisuddin Khatib" className="authority-image" />
            </div>
            
            <div className="authority-content">
              <h3 className="auth-subtitle">Meet Your Mentor</h3>
              <h2 className="auth-title">
                Learn from <br />
                <span className="hero-highlight">SYED AMER FARAZ RAISUDDIN KHATIB</span><br />
                <span style={{fontSize: "0.5em", fontWeight: "normal"}}>M-PHARM (PHARMACOLOGY) PhD SCHOLAR</span>
              </h2>
              <div className="auth-divider"></div>
              <p className="auth-desc">
                Focused on concept clarity and real understanding. Join the hundreds of students who have cracked their exams with confidence through a fully structured and easy-to-grasp teaching method.
              </p>
              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="trust-number">14+</span>
                  <span className="trust-text">Years Exp.</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-number">1000+</span>
                  <span className="trust-text">Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
