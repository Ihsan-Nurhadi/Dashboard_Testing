import React from 'react';
import Card from './Card';
import './DeviceStatusCard.css';
import { FaBolt, FaDoorClosed } from 'react-icons/fa';

interface DeviceStatusCardProps {
  deviceName: string;
  deviceType: string;
  timestamp: string;
  status: 'Active' | 'Closed';
  isOperational?: boolean;
}

const iconMap = {
  PLN: <FaBolt />,
  'Door Panel': <FaDoorClosed />,
};

const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({ deviceName, deviceType, timestamp, status, isOperational }) => {
  const statusClass = status === 'Active' ? 'status-active' : 'status-inactive';

  return (
    <Card className="device-status-card">
      <div className="card-content">
        <div className={`icon-container ${deviceName.toLowerCase().replace(' ', '-')}`}>
          {iconMap[deviceName] || <FaBolt />}
        </div>
        <div className="device-info">
          <h3 className="device-name">{deviceName}</h3>
          <p className="device-type">{deviceType}</p>
          <p className="timestamp">{timestamp}</p>
        </div>
        <div className={`status-badge ${statusClass}`}>{status}</div>
      </div>
      {isOperational !== undefined && (
        <div className="operational-status">
          <span className={`status-indicator-dot ${isOperational ? 'operational' : ''}`}></span>
          Device is currently {isOperational ? 'operational' : 'not operational'}
        </div>
      )}
    </Card>
  );
};

export default DeviceStatusCard;
