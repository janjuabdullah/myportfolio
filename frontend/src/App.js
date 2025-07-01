import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './components/Navbar.css'; // already included via Navbar.jsx

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <main style={{ flex: 1, overflow: 'auto' }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
