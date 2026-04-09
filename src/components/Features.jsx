import React, { useEffect, useRef } from 'react';
import './Features.css';
import { Lightbulb, Target, Users, UserCheck, MapPin } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef(null);

  const featuresList = [
    { icon: <Lightbulb />, title: "Concept-based Teaching", desc: "We focus on building strong fundamentals rather than pure memorization." },
    { icon: <Target />, title: "NEET Focused Preparation", desc: "Curriculum and testing designed specifically to crack medical entrances." },
    { icon: <Users />, title: "Small Batches", desc: "Limited students per batch ensuring no one is left behind." },
    { icon: <UserCheck />, title: "Personal Attention", desc: "One-on-one doubt clearing sessions and regular performance tracking." },
    { icon: <MapPin />, title: "Local Trusted Institute", desc: "Beed's most reliable and result-oriented coaching center." }
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
    <section className="section features-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">What makes Scholar's Biology House the right choice for your child's future.</p>
        
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature-card glass" key={index}>
              <div className="feature-icon-circle">
                {feature.icon}
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
