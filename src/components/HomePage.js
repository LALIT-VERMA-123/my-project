// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // We'll create this CSS file next
import walmartLogo from './walmart-logo.png'; // Make sure you have the Walmart logo image in your project

const HomePage = () => {
  return (
    <div className="homepage">
      <img src={walmartLogo} alt="Walmart Logo" className="walmart-logo" />
    </div>
  );
};

export default HomePage;

