import React from "react";
import "./About.css";
import about1 from "../assets/about1.jpg"; // Existing About Us image
import whyus from "../assets/whyus.jpg"; 

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <h3 className="about-subtitle">Our Alphadent Dental Clinic</h3>
          <p className="about-description">
            Alphadent is dedicated to providing top-quality dental care in a friendly
            and comfortable environment. Our experienced team of dentists and staff
            are committed to helping you achieve a healthy and beautiful smile. We
            offer a wide range of services, from routine cleanings to advanced
            procedures, tailored to meet your individual needs. At Alphadent, your
            oral health is our priority.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-image-container">
          <img src={about1} alt="Smiling Child" className="about-image" />
        </div>
      </section>

      {/* Why Choose Alphadent Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <h2 className="why-choose-title">Why Choose Alphadent for Your Smile Transformation?</h2>
          <ul className="why-choose-list">
            <li>Cutting-edge technology for precise, efficient treatment</li>
            <li>Luxury boutique experience in a meticulously designed space</li>
            <li>Expert Diamond+ orthodontists deliver unrivaled care and results</li>
            <li>Invisalign provider</li>
          </ul>
        </div>
        <div className="why-choose-image-container">
          <img src={whyus} alt="Smile Transformation" className="why-choose-image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title"></h2>
        <div className="features-cards">
          <div className="feature-card">
            <span className="feature-icon">😊</span>
            <h3 className="feature-title">All-Around Comfort</h3>
            <p className="feature-description">
              "That wasn't painful at all" is one of our favorite things to hear. We'll make
              sure you feel completely comfortable with our virtually painless injections
              and calming nitrous options.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏠</span>
            <h3 className="feature-title">Just Like Home</h3>
            <p className="feature-description">
              We're a family dental office — and we mean that in more ways than one.
              Our friendly staff is committed to making you feel part of our family
              from day one.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⭐</span>
            <h3 className="feature-title">Highest Quality Treatment</h3>
            <p className="feature-description">
              You deserve a smile that lasts forever. We stand behind our work by
              providing the highest-quality treatments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;