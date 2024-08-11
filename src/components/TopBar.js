import React from 'react';
import { FaUser, FaBell, FaQuestionCircle, FaCog } from 'react-icons/fa'; // Import the required icons
import './TopBar.css';
import walmartLogo from './walmart-logo.png'; // Import the logo

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="logo">
                <img src={walmartLogo} alt="Walmart Logo" /> {/* Replace text with logo */}
            </div>
            <div className="menu">
                <span>INDIA</span>
                <span>
                    <FaCog style={{ marginRight: '8px' }} /> Settings {/* Add the settings icon */}
                </span>
                <span>
                    <FaQuestionCircle style={{ marginRight: '8px' }} /> Help {/* Add the help icon */}
                </span>
                <span>
                    <FaBell style={{ marginRight: '8px' }} /> Notifications {/* Add the bell icon */}
                </span>
                <span>
                    <FaUser style={{ marginRight: '8px' }} /> John {/* Add the user icon */}
                </span>
            </div>
        </div>
    );
};

export default TopBar;
