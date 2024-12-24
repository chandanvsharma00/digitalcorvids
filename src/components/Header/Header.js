// Header.js
import React from 'react';
import Logo from './Logo';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div>
      <Logo /> 
      </div>
      <nav className="nav">
        <ul>
          <button className="active">Home</button>
          <button>Service</button>
          <button>About Us</button>
          <button>Contact</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;