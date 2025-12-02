import React, { useState } from 'react';
import Card from './Card';
import './RotaryControlCard.css';
import { FaSync, FaPlay, FaStop } from 'react-icons/fa';

const RotaryControlCard: React.FC = () => {
  const [isMotorOn, setIsMotorOn] = useState(false);

  return (
    <Card className="rotary-control-card">
      <div className="card-header">
        <div className="icon-container rotary">
          <FaSync />
        </div>
        <div className="header-text">
          <h3 className="card-title">Rotary Control</h3>
          <p className="card-subtitle">Motor operation control</p>
        </div>
      </div>
      <div className="rotary-status-container">
        <div className={`rotary-indicator ${isMotorOn ? 'motor-on' : ''}`}>
        </div>
      </div>
      <div className="motor-status">
        <FaPlay className="motor-status-icon" />
        <span>Motor Status</span>
        <span className={`motor-status-badge ${isMotorOn ? 'on' : ''}`}>
          {isMotorOn ? 'Running' : 'Stopped'}
        </span>
      </div>
      <div className="control-buttons">
        <button className={`control-button on ${isMotorOn ? 'active' : ''}`} onClick={() => setIsMotorOn(true)}>
          <FaPlay /> Turn ON
        </button>
        <button className={`control-button off ${!isMotorOn ? 'active' : ''}`} onClick={() => setIsMotorOn(false)}>
          <FaStop /> Turn OFF
        </button>
      </div>
    </Card>
  );
};

export default RotaryControlCard;
