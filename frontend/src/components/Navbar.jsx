import React from 'react';
import './Navbar.css'; // we'll create this next

const Navbar = () => {
  return (
    <nav className="sidebar">
      <h2 className="logo">Abdullah</h2>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
