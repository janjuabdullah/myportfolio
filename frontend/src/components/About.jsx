import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg'; // Make sure this exists

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Text Side */}
        <div className="about-text">
          <h2>Hi, I'm Abdullah Mateen Janjua!</h2>
          <p>
            I'm a passionate full-stack developer with a background in AI-based projects and modern web technologies.
            I enjoy building clean, dynamic, and user-focused digital experiences. My expertise lies in JavaScript,
            React, Node.js, and intelligent systems like Vision Guard and Fire Forest detection using deep learning.
            Let’s build something amazing together!
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>

        {/* Image Side */}
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
