import React from 'react';
import './StockNeeded.css';

function StockNeeded() {
  return (
    <div className="stock-needed-container">
      <div className="warning-banner">
        <span>⚠ IMPORTANT : UNDERSTOCKING WARNING ⚠</span>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="date">ENTER DATE</label>
          <div className="input-group">
            <span className="input-icon">➡</span>
            <input type="text" id="date" placeholder="MM/DD/YYYY" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="stock">STOCK NEEDED</label>
          <input type="text" id="stock" placeholder="Enter amount" />
        </div>
      </div>
    </div>
  );
}

export default StockNeeded;
