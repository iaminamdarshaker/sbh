import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
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
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section className="section contact-section" id="demo" ref={sectionRef}>
      <div className="container">
        
        <div className="cta-banner glass text-center">
          <h2>Ready to Start Your Journey?</h2>
          <p>Don't wait. Clarify your concepts and boost your preparation today.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass">
            <h3>Get In Touch</h3>
            <p className="contact-subtitle">We are here to answer any questions you may have about our courses.</p>
            
            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Address</h4>
                  <p>Zam zam colony, Kausar Nagar,<br/> Beside Aman Lawns,<br/> Beed – 431122</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+917276407734">+91 7276407734</a></p>
                  <p><a href="tel:+917020730419">+91 7020730419</a></p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:amerfaraz.pharma@gmail.com">amerfaraz.pharma@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass">
            <h3>Book Free Demo Class</h3>
            <form className="contact-form" action="https://formsubmit.co/amerfaraz.pharma@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Demo Class Request!" />
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="Student Name" required placeholder="Student Name" />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="Mobile Number" required placeholder="WhatsApp/Calling Number" />
              </div>
              <div className="form-group">
                <label>Class/Batch</label>
                <select name="Class Selected" required>
                  <option value="">Select Class</option>
                  <option value="11th NEET">11th NEET</option>
                  <option value="12th NEET">12th NEET</option>
                  <option value="Dropper">Dropper Batch</option>
                  <option value="8th">8th Class</option>
                  <option value="9th">9th Class</option>
                  <option value="10th">10th Class</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="Message" rows="4" placeholder="Any specific questions?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Request Demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
