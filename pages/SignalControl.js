import React, { useState, useEffect } from 'react';
import { FaTrafficLight, FaEdit, FaCog, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const SignalControl = () => {
  const [signals, setSignals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [controlMode, setControlMode] = useState('automatic');
  const [selectedSignal, setSelectedSignal] = useState(null);
  
  useEffect(() => {
    // Simulate API call to get signals
    setTimeout(() => {
      const mockSignals = [
        { 
          id: 1, 
          name: 'Junction 1', 
          location: 'Main St & 1st Ave', 
          status: 'online', 
          mode: 'AI', 
          currentPhase: 'North-South Green',
          remainingTime: '35s',
          congestionLevel: 'Medium',
          lastUpdate: '20 seconds ago'
        },
        { 
          id: 2, 
          name: 'Junction 2', 
          location: 'Broadway & 5th St', 
          status: 'online', 
          mode: 'AI', 
          currentPhase: 'East-West Green',
          remainingTime: '15s',
          congestionLevel: 'High',
          lastUpdate: '10 seconds ago'
        },
        { 
          id: 3, 
          name: 'Junction 3', 
          location: 'Park Ave & 3rd St', 
          status: 'online', 
          mode: 'Manual', 
          currentPhase: 'All-Way Red',
          remainingTime: '5s',
          congestionLevel: 'Low',
          lastUpdate: '5 seconds ago'
        },
        { 
          id: 4, 
          name: 'Highway Entrance', 
          location: 'Highway 101 Entrance', 
          status: 'offline', 
          mode: 'Scheduled', 
          currentPhase: 'Unknown',
          remainingTime: '-',
          congestionLevel: 'Unknown',
          lastUpdate: '45 minutes ago'
        },
      ];
      setSignals(mockSignals);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleSignalSelect = (signal) => {
    setSelectedSignal(signal);
  };

  const toggleControlMode = () => {
    setControlMode(controlMode === 'automatic' ? 'manual' : 'automatic');
  };

  return (
    <div className="signal-control">
      <div className="page-header">
        <h1>Traffic Signal Control</h1>
        <div className="control-mode-toggle">
          <span className="mode-label">Control Mode:</span>
          <button 
            className={`mode-toggle ${controlMode}`}
            onClick={toggleControlMode}
          >
            {controlMode === 'automatic' ? (
              <>
                <FaToggleOn /> AI Control
              </>
            ) : (
              <>
                <FaToggleOff /> Manual Override
              </>
            )}
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="loading">Loading traffic signal data...</div>
      ) : (
        <div className="signal-dashboard">
          <div className="signal-list">
            <h3>Traffic Signals</h3>
            <div className="signal-grid">
              {signals.map(signal => (
                <div 
                  key={signal.id} 
                  className={`signal-card ${signal.status} ${selectedSignal && selectedSignal.id === signal.id ? 'selected' : ''}`}
                  onClick={() => handleSignalSelect(signal)}
                >
                  <div className="signal-icon">
                    <FaTrafficLight />
                  </div>
                  <div className="signal-info">
                    <h4>{signal.name}</h4>
                    <p className="signal-location">{signal.location}</p>
                    <div className="signal-status">
                      <span className={`status-indicator ${signal.status}`}></span>
                      <span className="mode-indicator">{signal.mode}</span>
                    </div>
                    <div className="signal-phase">
                      <span className="phase-label">{signal.currentPhase}</span>
                      <span className="remaining-time">{signal.remainingTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {selectedSignal && (
            <div className="signal-details">
              <div className="details-header">
                <h3>{selectedSignal.name} Controls</h3>
                <div className="status-badge">
                  <span className={`status-dot ${selectedSignal.status}`}></span>
                  {selectedSignal.status}
                </div>
              </div>
              
              <div className="details-section">
                <div className="section-item">
                  <span className="item-label">Current Phase:</span>
                  <span className="item-value">{selectedSignal.currentPhase}</span>
                </div>
                <div className="section-item">
                  <span className="item-label">Time Remaining:</span>
                  <span className="item-value">{selectedSignal.remainingTime}</span>
                </div>
                <div className="section-item">
                  <span className="item-label">Congestion Level:</span>
                  <span className={`congestion-badge ${selectedSignal.congestionLevel.toLowerCase()}`}>
                    {selectedSignal.congestionLevel}
                  </span>
                </div>
                <div className="section-item">
                  <span className="item-label">Last Update:</span>
                  <span className="item-value">{selectedSignal.lastUpdate}</span>
                </div>
              </div>
              
              <div className="control-section">
                <h4>Signal Control</h4>
                {controlMode === 'automatic' ? (
                  <div className="ai-control-info">
                    <p>Signal is currently under AI control for optimal traffic flow.</p>
                    <button className="btn btn-primary">
                      <FaEdit /> Override
                    </button>
                  </div>
                ) : (
                  <div className="manual-controls">
                    <div className="phase-buttons">
                      <button className="phase-btn north-south">North-South Green</button>
                      <button className="phase-btn east-west">East-West Green</button>
                      <button className="phase-btn all-red">All Red</button>
                      <button className="phase-btn flashing">Flashing Yellow</button>
                    </div>
                    <div className="timing-controls">
                      <label>
                        Green Duration:
                        <input type="range" min="10" max="60" defaultValue="30" />
                        <span className="range-value">30s</span>
                      </label>
                    </div>
                    <button className="btn btn-primary">
                      <FaCog /> Apply Changes
                    </button>
                  </div>
                )}
              </div>
              
              <div className="traffic-data">
                <h4>Traffic Data</h4>
                <div className="data-visualization">
                  {/* In a real app, this would be a chart or visualization */}
                  <div className="placeholder-chart">Realtime Traffic Flow Chart</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignalControl;