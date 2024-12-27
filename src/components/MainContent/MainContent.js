// MainContent.js
import React from 'react';
import './MainContent.css';
import Bulb from './Bulb';
import FlippingText from './FlippingText';

const MainContent = () => {
  return (
    <div className="hero-section">
      <h1>
        EMPOWERING <br />
        BRAND WITH <span className="highlight">DIGITAL <span className="arrow">➤</span></span>
      </h1>
      {/* <h2>
        INNOVATI<span className="invisible">O</span><span className="BulbN"><Bulb/>N</span>
      </h2> */}
      <FlippingText/>
      <div className="moto">
      <span> <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Capa_1"
    width="50"
    height="50"
    fill="#ffd700"
    stroke="#ffd700"
    strokeWidth="0"
    version="1.1"
    viewBox="0 0 14.707 14.707"
  >
    <path
      id="SVGRepo_iconCarrier"
      fill="#ffd700"
      d="M6.275 0h2.158v14.707H6.275z"
    ></path>
  </svg></span>
      <p className="description">
        At Digital Corvids, we specialize in creating impactful digital marketing strategies that
        elevate your brand, engage your audience, and drive measurable results.
      </p>
      </div>
    </div>
  );
};

export default MainContent;