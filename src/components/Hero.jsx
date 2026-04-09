import React, { useRef, useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const ctaRef = useRef(null);
  
  const [isLowPower, setIsLowPower] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/assets/hero-video-optimized.mp4");

  const state = useRef({
    targetProgress: 0,
    currentProgress: 0
  });

  useEffect(() => {
    // Fallback heuristic for low-end / mobile mapping to autoplay
    const checkPerformance = () => {
      const mobile = window.innerWidth <= 768;
      // navigator.hardwareConcurrency gives logical cores, proxy for device capability
      const lowCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
      
      const useFallback = mobile || lowCores;
      setIsLowPower(useFallback);
      setVideoSrc(useFallback ? "/assets/hero-video-mobile.mp4" : "/assets/hero-video-optimized.mp4");
    };
    checkPerformance();

    // If falling back to autoplay loop, bypass any intensive loop and let hardware native handle it
    if (window.innerWidth <= 768 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)) {
        return;
    }

    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Calculate scroll dynamically via container rect against viewport
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Max pixel drag available inside the wrapper
      const maxScroll = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      let progress = 0;
      if (currentScroll >= 0 && currentScroll <= maxScroll) {
        progress = currentScroll / maxScroll;
      } else if (currentScroll > maxScroll) {
        progress = 1;
      }
      
      state.current.targetProgress = progress;
    };

    const renderLoop = () => {
      // Eased cinematic interpolation (a value of 0.08 reacts faster to reduced scroll bounds, retaining smoothness)
      state.current.currentProgress += (state.current.targetProgress - state.current.currentProgress) * 0.08;
      const p = state.current.currentProgress;

      // Optimally trigger ref updates only when active easing is happening 
      if (Math.abs(state.current.targetProgress - p) > 0.0001) {

        if (contentRef.current) {
          // Subtle fade fade and push text layer using hardware config
          contentRef.current.style.opacity = Math.max(0, 1 - p * 1.5);
          contentRef.current.style.transform = `translate3d(0, ${p * 150}px, 0)`;
        }
        
        // Emotional Text 1: "Too much to study?" (Fades in around 0.15, out by 0.45)
        if (text1Ref.current) {
          let t1Op = 0;
          let t1Y = 20;
          if (p >= 0.15 && p < 0.25) {
            t1Op = (p - 0.15) / 0.10;
            t1Y = 20 - (t1Op * 20);
          } else if (p >= 0.25 && p <= 0.35) {
            t1Op = 1;
            t1Y = 0;
          } else if (p > 0.35 && p <= 0.45) {
            t1Op = 1 - ((p - 0.35) / 0.10);
            t1Y = -(1 - t1Op) * 20;
          } else if (p > 0.45) {
            t1Y = -20;
          }
          text1Ref.current.style.opacity = Math.max(0, Math.min(1, t1Op));
          // Subtract 50% for centering in standard CSS alongside translation
          text1Ref.current.style.transform = `translate(0%, calc(-50% + ${t1Y}px))`;
        }

        // Emotional Text 2: "Everything starts making sense" (Fades in around 0.55, out near 0.9)
        if (text2Ref.current) {
          let t2Op = 0;
          let t2Y = 20;
          if (p >= 0.55 && p < 0.65) {
            t2Op = (p - 0.55) / 0.10;
            t2Y = 20 - (t2Op * 20);
          } else if (p >= 0.65 && p <= 0.85) {
            t2Op = 1;
            t2Y = 0;
          } else if (p > 0.85 && p <= 1.0) {
            t2Op = 1 - ((p - 0.85) / 0.15);
            t2Y = -(1 - t2Op) * 20;
          } else if (p > 1.0) {
            t2Y = -20;
          }
          text2Ref.current.style.opacity = Math.max(0, Math.min(1, t2Op));
          text2Ref.current.style.transform = `translate(0%, calc(-50% + ${t2Y}px))`;
        }

        // Final CTA Buttons (Fades in immediately after Text 2: 0.60 to 0.70)
        if (ctaRef.current) {
          let ctaOp = 0;
          let ctaY = 20;
          let ctaScale = 1.02;

          if (p >= 0.60 && p < 0.70) {
            ctaOp = (p - 0.60) / 0.10;
            ctaY = 20 - (ctaOp * 20);
            ctaScale = 1.02 - (ctaOp * 0.02);
          } else if (p >= 0.70 && p <= 0.90) {
            ctaOp = 1;
            ctaY = 0;
            ctaScale = 1.0;
          } else if (p > 0.90 && p <= 1.0) {
            ctaOp = 1 - ((p - 0.90) / 0.10);
            ctaY = -(1 - ctaOp) * 20;
            ctaScale = 1.0;
          } else if (p > 1.0) {
            ctaOp = 0;
            ctaY = -20;
          }
          
          ctaRef.current.style.opacity = Math.max(0, Math.min(1, ctaOp));
          ctaRef.current.style.transform = `translate(-50%, calc(-50% + ${ctaY}px)) scale(${ctaScale})`;
          // Reactivate pointer events only when visible so it doesn't block background clicks early on
          ctaRef.current.style.pointerEvents = ctaOp > 0.5 ? 'auto' : 'none';
        }

        // Only scrub video frame up to exactly 3.4 seconds for faster cinematic delivery
        if (videoRef.current && videoRef.current.duration) {
          const validDuration = Math.min(videoRef.current.duration, 3.4);
          videoRef.current.currentTime = validDuration * p;
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Boot sequence
    handleScroll();
    renderLoop();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={isLowPower ? "hero-container-standard" : "hero-scroll-container"} ref={containerRef}>
      <div className={isLowPower ? "hero-static" : "hero-sticky"}>
        <video 
          ref={videoRef}
          src={videoSrc}
          poster="/assets/start frame.png"
          className="hero-video"
          preload="auto"
          muted 
          playsInline
          loop={isLowPower}
          autoPlay={isLowPower}
        />
        <div className="hero-overlay"></div>
        
        {/* Cinematic Emotion Texts (Only mapped if Not low-power static mode) */}
        {!isLowPower && (
          <>
            <div className="hero-scroll-text" ref={text1Ref}>Too much to study?</div>
            <div className="hero-scroll-text" ref={text2Ref}><span className="hero-highlight">Everything starts making sense</span></div>
            
            <div className="hero-scroll-cta" ref={ctaRef}>
              <a href="#demo" className="btn btn-primary cinematic-btn">Book Free Demo Class</a>
              <a href="tel:+917020730419" className="btn btn-outline cinematic-btn-outline">Call Now</a>
            </div>
          </>
        )}
        
        <div className="container hero-content" ref={contentRef}>
          <p className="hero-trustline">NEET Focused Coaching | Beed’s Trusted Institute</p>
          <h1 className="hero-title">
            This Is Where Your Preparation<br />
            <span className="hero-highlight">Starts Making Sense.</span>
          </h1>
          <p className="hero-subtitle">
            Scholar's Biology House<br/>
            <span className="hero-author">By Sayed Amer Faraz Khatib</span>
          </p>
          
          <div className="hero-cta">
            <a href="#demo" className="btn btn-primary">Book Free Demo Class</a>
            <a href="tel:+917020730419" className="btn btn-outline">Call Now: +91 7020730419</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
