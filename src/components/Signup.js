// src/components/Signup.js
import React, { useState } from 'react';
import '../Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      alert('Form submitted successfully!');
    }
  };

  return (
    <section className="signup" id="signup">
      <h2>Signup for Updates</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default Signup;
