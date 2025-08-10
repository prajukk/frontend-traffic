import React, { useState, useEffect } from 'react';
import { FaVideo, FaExclamationTriangle, FaCog, FaPlus } from 'react-icons/fa';

const CameraManagement = () => {
  const [cameras, setCameras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState(null);
  
  useEffect(() => {
    // Simulate API call to get cameras
    setTimeout(() => {
      const mockCameras = [
        { id: 1, name: 'Junction 1 - North', status: 'online', location: 'Main St & 1st Ave', lastUpdate: '2 mins ago' },
        { id: 2, name: 'Junction 1 - South', status: 'online', location: 'Main St & 1st Ave', lastUpdate: '1 min ago' },
        { id: 3, name: 'Junction 2 - East', status: 'offline', location: 'Broadway & 5th St', lastUpdate: '1 hour ago' },
        { id: 4, name: 'Junction 3 - West', status: 'online', location: 'Park Ave & 3rd St', lastUpdate: '5 mins ago' },
        { id: 5, name: 'Highway Entrance', status: 'online', location: 'Highway 101 Entrance', lastUpdate: '3 mins ago' },
        { id: 6, name: 'CBD Area', status: 'online', location: 'Financial District', lastUpdate: '1 min ago' },
        { id: 7, name: 'Shopping Mall', status: 'warning', location: 'City Mall Entrance', lastUpdate: '15 mins ago' },
        { id: 8, name: 'School Zone', status: 'online', location: 'Elementary School', lastUpdate: '4 mins ago' }
      ];
      setCameras(mockCameras);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleCameraSelect = (camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className="camera-management">
      <div className="page-header">
        <h1>Camera Management</h1>
        <button className="btn btn-primary">
          <FaPlus /> Add Camera
        </button>
      </div>
      
      {isLoading ? (
        <div className="loading">Loading camera data...</div>
      ) : (
        <div className="camera-dashboard">
          <div className="camera-list">
            <h3>Camera Network ({cameras.length})</h3>
            <div className="camera-grid">
              {cameras.map(camera => (
                <div 
                  key={camera.id} 
                  className={`camera-card ${camera.status} ${selectedCamera && selectedCamera.id === camera.id ? 'selected' : ''}`}
                  onClick={() => handleCameraSelect(camera)}
                >
                  <div className="camera-header">
                    <FaVideo className="camera-icon" />
                    {camera.status === 'warning' && <FaExclamationTriangle className="warning-icon" />}
                    {camera.status === 'offline' && <FaExclamationTriangle className="offline-icon" />}
                  </div>
                  <div className="camera-info">
                    <h4>{camera.name}</h4>
                    <p className="camera-location">{camera.location}</p>
                    <div className="camera-status">
                      <span className={`status-indicator ${camera.status}`}></span>
                      <span className="status-text">{camera.status}</span>
                      <span className="last-update">• {camera.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="camera-details">
            {selectedCamera ? (
              <>
                <div className="camera-feed">
                  <h3>Live Feed: {selectedCamera.name}</h3>
                  <div className="feed-container">
                    {/* In a real app, this would be a video stream */}
                    <div className="placeholder-feed">
                      {selectedCamera.status === 'online' ? (
                        'Live Camera Feed'
                      ) : (
                        'Camera Offline'
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="camera-controls">
                  <h3>Camera Controls</h3>
                  <div className="controls-container">
                    <div className="control-group">
                      <h4>Device Information</h4>
                      <div className="control-item">
                        <span className="control-label">Model:</span>
                        <span className="control-value">ESP32-CAM</span>
                      </div>
                      <div className="control-item">
                        <span className="control-label">IP Address:</span>
                        <span className="control-value">192.168.1.{selectedCamera.id + 10}</span>
                      </div>
                      <div className="control-item">
                        <span className="control-label">Firmware:</span>
                        <span className="control-value">v2.4.1</span>
                      </div>
                    </div>
                    
                    <div className="control-group">
                      <h4>Settings</h4>
                      <button className="control-btn">
                        <FaCog /> Configure
                      </button>
                      <button className="control-btn">
                        Restart Device
                      </button>
                      <button className="control-btn danger">
                        Remove Camera
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-camera-selected">
                <p>Select a camera to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraManagement;