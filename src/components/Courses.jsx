import React, { useEffect, useRef } from 'react';
import './Courses.css';
import { BookOpen, GraduationCap, Microscope } from 'lucide-react';

const Courses = () => {
  const neetCourses = [
    { title: '11th NEET Batch', icon: <Microscope className="course-icon" />, desc: 'Complete NEET preparation with concept clarity', color: '#3b82f6' },
    { title: '12th NEET Batch', icon: <BookOpen className="course-icon" />, desc: 'Complete NEET preparation with concept clarity', color: '#10b981' },
    { title: 'Dropper Batch', icon: <GraduationCap className="course-icon" />, desc: 'Complete NEET preparation with concept clarity', color: '#8b5cf6' },
  ];

  const foundationCourses = [
    { title: '8th Class', icon: <BookOpen className="course-icon" /> },
    { title: '9th Class', icon: <BookOpen className="course-icon" /> },
    { title: '10th Class', icon: <BookOpen className="course-icon" /> },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="section bg-secondary course-section" id="courses" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-subtitle">Discover the perfect batch for your academic journey.</p>
        
        <div className="course-category">
          <h3 className="category-title">NEET / Senior Classes</h3>
          <div className="course-grid">
            {neetCourses.map((course, index) => (
              <div className="course-card glass" key={index}>
                <div className="course-icon-wrapper" style={{ background: `${course.color}20`, color: course.color }}>
                  {course.icon}
                </div>
                <h4 className="course-title">{course.title}</h4>
                <p className="course-desc">{course.desc}</p>
                <a href="#demo" className="btn btn-outline course-btn">Enroll Now</a>
              </div>
            ))}
          </div>
        </div>

        <div className="course-category mt-5">
          <h3 className="category-title">Foundation Classes</h3>
          <div className="course-grid">
            {foundationCourses.map((course, index) => (
              <div className="course-card glass" key={index}>
                <div className="course-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  {course.icon}
                </div>
                <h4 className="course-title">{course.title}</h4>
                <p className="course-desc foundation-subjects">
                  <span>Maths</span><span className="dot">•</span>
                  <span>Science</span><span className="dot">•</span>
                  <span>English</span><span className="dot">•</span>
                  <span>Marathi</span>
                </p>
                <a href="#demo" className="btn btn-outline course-btn">Enroll Now</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
