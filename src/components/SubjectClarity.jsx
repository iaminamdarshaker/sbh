import React, { useEffect, useRef } from 'react';
import './SubjectClarity.css';
import { Beaker, Atom, Dna } from 'lucide-react';

const SubjectClarity = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="section clarity-section" ref={containerRef}>
      <div className="container">
        <div className="clarity-grid">
          <div className="clarity-content">
            <h2 className="section-title text-left">STUDY WITHOUT <span className="hero-highlight">STRESS</span></h2>
            <p className="clarity-desc">
              Biology | Physics | Chemistry — sab easy aur structured tareeke se samjhaya jata hai.
            </p>
            
            <div className="features-list">
              <div className="feature-item glass">
                <div className="feature-icon"><Dna className="icon-blue" /></div>
                <div className="feature-text">Biology</div>
              </div>
              <div className="feature-item glass">
                <div className="feature-icon"><Atom className="icon-blue" /></div>
                <div className="feature-text">Physics</div>
              </div>
              <div className="feature-item glass">
                <div className="feature-icon"><Beaker className="icon-blue" /></div>
                <div className="feature-text">Chemistry</div>
              </div>
            </div>
          </div>
          
          <div className="clarity-video-container">
            <div className="video-glow"></div>
            <video 
              src="/assets/diagram animated video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="clarity-video glass"
            />
            
            {/* Floating badges */}
            <div className="floating-badge badge-1 glass">Visual Learning</div>
            <div className="floating-badge badge-2 glass">Concept Building</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectClarity;
