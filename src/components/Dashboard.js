import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Items from './Items';
import OutOfStock from './OutOfStock';
import ActivityFeed from './ActivityFeed';
import Orders from './Orders';
import Wishlist from './Wishlist';
import Returns from './Returns';
import ItemsRequired from './ItemsRequired';
import StockNeeded from './StockNeeded';
import DeliveryPartners from './DeliveryPartners';
import './Dashboard.css';

const Dashboard = () => {
    return (    
        <div className="dashboard">
            <Sidebar />
            <div className="content">
                <TopBar />
                <Routes>
                    <Route path="items" element={<Items />} />
                    <Route path="out-of-stock" element={<OutOfStock />} />
                    <Route path="activity-feed" element={<ActivityFeed />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="returns" element={<Returns />} />
                    <Route path="items-required" element={<ItemsRequired />} />
                    <Route path="stock-needed" element={<StockNeeded />} />
                    <Route path="delivery-partners" element={<DeliveryPartners />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
