import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbar-logo">Elementsum</div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#blogs">Blogs</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="#help">Help</a>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
