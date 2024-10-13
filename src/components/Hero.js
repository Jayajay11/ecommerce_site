// src/components/Hero.js
import React from 'react';
import '../Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Find the best products for your needs!</p>
      <a href="#products" className="scroll-btn">Shop Now</a>
    </section>
  );
};

export default Hero;
