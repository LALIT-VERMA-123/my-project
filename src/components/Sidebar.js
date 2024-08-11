// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="section-title">Product Catalog</div>
            <NavLink to="/dashboard/items">Items</NavLink>
            <NavLink to="/dashboard/out-of-stock">Out of Stock Items</NavLink>
            <NavLink to="/dashboard/activity-feed">Activity Feed</NavLink>

            <div className="section-title">Orders</div>
            <NavLink to="/dashboard/orders">Orders</NavLink>
            <NavLink to="/dashboard/wishlist">Wishlisted Items</NavLink>
            <NavLink to="/dashboard/returns">Returns and Refunds</NavLink>

            <div className="section-title">Recommendation System</div>
            <NavLink to="/dashboard/items-required">Items Required</NavLink>
            <NavLink to="/dashboard/stock-needed">Stock Needed</NavLink>

            <div className="section-title">Delivery</div>
            <NavLink to="/dashboard/delivery-partners">Delivery Partners</NavLink>
        </div>
    );
};

export default Sidebar;
