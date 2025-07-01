import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hello, I’m <span className="highlight">Abdullah</span></h1>
        <p>A passionate Full Stack Developer who loves building creative, clean, and responsive web apps.</p>
        <a href="#projects" className="cta-button">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;
