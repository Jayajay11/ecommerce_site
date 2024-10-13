// src/components/Navbar.js
import React from 'react';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#signup">Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
