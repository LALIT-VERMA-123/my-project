import React from 'react';
import './WalmartLoginPage.css';
import { FaUser, FaLock, FaShoppingCart } from 'react-icons/fa';
import walmartLogo from './walmart-logo.png'; // Import the logo image

const WalmartLoginPage = () => {
  return (
    <div className="login-container" >
      <header>
        <img src={walmartLogo} alt="Walmart Logo" className="logo" />
        <h2>WAREHOUSE ID</h2>
      </header>
      <div className="login-form">
        <div className="icon">
          <FaShoppingCart size={100} color="#0071ce" /> {/* Updated icon */}
        </div>
        <form>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="USERNAME" />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="PASSWORD" />
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <a href="#forgot-password" className="forgot-password">Forgot password?</a>
      </div>
      <footer>
        <p>© 2024 Walmart. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#feedback">Give feedback</a>
          <a href="#privacy-rights">CA Privacy Rights</a>
          <a href="#privacy-choices">Your Privacy Choices</a>
          <a href="#notice-at-collection">Notice at Collection</a>
          <a href="#request-my-personal-info">Request My Personal Information</a>
          <a href="#delete-account">Delete Account</a>
          <a href="#supply-chains-act">California Supply Chains Act</a>
        </div>
      </footer>
    </div>
  );
};

export default WalmartLoginPage;
