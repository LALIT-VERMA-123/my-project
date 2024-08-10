import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Import Outlet for nested routes and Link for navigation
import './SupplierProfile.css'; // Import the CSS file for styling

function SupplierProfile() {
  return (
    <div className="supplier-profile">
      <div className="sidebar">
        <h2>Supplier Profile</h2>
        <nav>
          <ul>
            <li><Link to="/profile/track-orders">Track Orders</Link></li>
            <li><Link to="/profile/manage-orders">Manage Orders</Link></li>
            <li><Link to="/profile/feedback">Feedback</Link></li>
            <li><Link to="/profile/requirements">Order Requirements</Link></li> {/* Link to Order Requirements */}
          </ul>
        </nav>
      </div>
      <div className="profile-content">
        <Outlet /> {/* Render the matching nested route */}
      </div>
    </div>
  );
}

export default SupplierProfile;
