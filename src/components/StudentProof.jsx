import React, { useEffect, useRef } from 'react';
import './StudentProof.css';

const StudentProof = () => {
  const sectionRef = useRef(null);

  const reels = [
    "https://www.instagram.com/reel/DPlHS_Wk3ld/embed",
    "https://www.instagram.com/reel/DWOWEEiDRRO/embed",
    "https://www.instagram.com/reel/DL1VhmZTJ15/embed"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="section proof-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">Real results from our dedicated students in Beed.</p>
        
        <div className="reels-container">
          {reels.map((url, index) => (
            <div className="reel-wrapper glass" key={index}>
              <iframe 
                src={url} 
                className="instagram-embed"
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProof;
