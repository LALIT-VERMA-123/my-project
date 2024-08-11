// components/SideNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <h3>WAREHOUSE HELP</h3>
            <ul>
                <li><Link to="/dashboard/orders">Orders</Link></li>
                <li><Link to="/dashboard/track-orders">Track Orders</Link></li>
                <li><Link to="/dashboard/manage-orders">Manage Orders</Link></li>
                <li><Link to="/dashboard/feedback">Feedback</Link></li>
                <li><Link to="/dashboard/requirements">Order Requirements</Link></li>
            </ul>
        </div>
    );
};

export default SideNav;
