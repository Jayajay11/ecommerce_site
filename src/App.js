// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Signup />
    </div>
  );
}

export default App;
