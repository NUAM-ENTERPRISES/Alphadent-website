import React, { useEffect, useRef } from "react";
import "./About.css";
import about1 from "../assets/about1.jpg";
import whyus from "../assets/whyus.jpg";

const About = () => {
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);
  const whyChooseSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          } else {
            entry.target.classList.remove("section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutTextRef.current) observer.observe(aboutTextRef.current);
    if (aboutImageRef.current) observer.observe(aboutImageRef.current);
    if (whyChooseSectionRef.current) observer.observe(whyChooseSectionRef.current);

    return () => {
      if (aboutTextRef.current) observer.unobserve(aboutTextRef.current);
      if (aboutImageRef.current) observer.unobserve(aboutImageRef.current);
      if (whyChooseSectionRef.current) observer.unobserve(whyChooseSectionRef.current);
    };
  }, []);

  return (
    <div className="about-container">
      {/* Section 1: About Text */}
      <section className="about-us-split">
        {/* Left Column: Text Content */}
        <div className="about-left" ref={aboutTextRef}>
          <h2 className="about-title">About Us</h2>
          <h3 className="about-subtitles">Our Alphadent Dental Clinic</h3>
          <p className="about-description">
            Alphadent is dedicated to providing top-quality dental care in a friendly
            and comfortable environment. Our experienced team of dentists and staff
            are committed to helping you achieve a healthy and beautiful smile.
            We offer a wide range of services, from routine cleanings to advanced
            procedures, tailored to meet your individual needs. At Alphadent, your
            oral health is our priority.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>

        {/* Right Column: Image */}
        <div className="about-right" ref={aboutImageRef}>
          <img src={about1} alt="Smiling Child" className="about-image" />
        </div>
      </section>

      {/* Why Choose Alphadent Section */}
      <section className="why-choose-section" ref={whyChooseSectionRef}>
        <div className="why-choose-content">
          <h2 className="why-choose-title">Why Choose Alphadent for Your Smile Transformation?</h2>
          <ul className="why-choose-list">
            <li>Cutting-edge technology for precise, efficient treatment</li>
            <li>Luxury boutique experience in a meticulously designed space</li>
            <li>Expert Diamond+ orthodontists deliver unrivaled care and results</li>
            <li>Certified Invisalign provider for invisible aligners</li>
          </ul>
        </div>
        <div className="why-choose-image-container">
          <img src={whyus} alt="Smile Transformation" className="why-choose-image" />
        </div>
      </section>
    </div>
  );
};

export default About;