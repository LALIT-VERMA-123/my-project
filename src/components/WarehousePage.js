// src/components/WarehousePage.js
import React from 'react';
import './WarehousePage.css';
import logo from './walmart-logo.png';// Import the logo

const WarehousePage = () => {
  return (
    <div className="warehouse-container">
      <img src={logo} alt="Walmart Logo" className="warehouse-logo" /> {/* Add the logo */}
      <h2>ENTER WAREHOUSE ID</h2>
      <input
        type="text"
        placeholder="7 DIGIT PIN"
        className="warehouse-input"
        maxLength={7}
      />
      <button className="continue-button">CONTINUE</button>
    </div>
  );
};

export default WarehousePage;
