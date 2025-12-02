import React from 'react';
import './Header.css';
import { FaSatelliteDish } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <FaSatelliteDish className="logo-icon" />
        <div>
          <h1 className="app-title">IoT Control Panel</h1>
          <p className="app-subtitle">Real-time device management</p>
        </div>
      </div>
      <div className="system-status">
        <span className="status-indicator-dot"></span>
        System Online
      </div>
    </header>
  );
};

export default Header;
