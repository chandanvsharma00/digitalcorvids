// MainContent.js
import React from 'react';
import './MainContent.css';
import Bulb from './Bulb';

const MainContent = () => {
  return (
    <div className="hero-section">
      <h1>
        EMPOWERING <br />
        BRAND WITH <span className="highlight">DIGITAL <span className="arrow">➤</span></span>
      </h1>
      <h2>
        INNOVATI<Bulb/>N
      </h2>
      <p className="description">
        At Digital Corvids, we specialize in creating impactful digital marketing strategies that
        elevate your brand, engage your audience, and drive measurable results.
      </p>
    </div>
  );
};

export default MainContent;