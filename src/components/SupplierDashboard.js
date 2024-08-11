// components/SupplierDashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import SideNav from './SideNav';
import './SupplierDashboard.css';

const SupplierDashboard = () => {
    return (
        <div className="dashboard">
            <TopBar />
            <div className="dashboard-content">
                <SideNav />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default SupplierDashboard;
