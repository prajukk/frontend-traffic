// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaMapMarkedAlt } from 'react-icons/fa';


const Dashboard = () => {
  const [trafficData, setTrafficData] = useState({
    activeCameras: 0,
    activeSignals: 0,
    congestionLevel: 'Moderate',
    recentEvents: []
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to backend
    const fetchData = async () => {
      try {
        // In a real application, this would fetch from your backend
        // const response = await axios.get('/api/dashboard');
        // setTrafficData(response.data);
        
        // For demo purposes, using mock data
        setTimeout(() => {
          setTrafficData({
            activeCameras: 24,
            activeSignals: 18,
            congestionLevel: 'Moderate',
            recentEvents: [
              { id: 1, type: 'alert', message: 'High congestion detected at Junction 4', timestamp: '10:32 AM' },
              { id: 2, type: 'success', message: 'Signal timing optimized at CBD area', timestamp: '10:15 AM' },
              { id: 3, type: 'alert', message: 'Camera 7 connectivity issues', timestamp: '09:45 AM' },
              { id: 4, type: 'success', message: 'Traffic flow improved by 23% at Junction 2', timestamp: '09:30 AM' }
            ]
          });
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>System Dashboard</h1>
      
      {isLoading ? (
        <div className="loading">Loading dashboard data...</div>
      ) : (
        <>
          <div className="stats-grid">
            <div className="stat-card">
             <click><h3>Active Cameras</h3></click> 
              <div className="stat-value">{trafficData.activeCameras}</div>
            </div>
            <div className="stat-card">
              <h3>Active Signals</h3>
              <div className="stat-value">{trafficData.activeSignals}</div>
            </div>
            <div className="stat-card">
              <h3>Congestion Level</h3>
              <div className="stat-value">{trafficData.congestionLevel}</div>
            </div>
            <div className="stat-card">
              <h3>System Status</h3>
              <div className="stat-value status-active">Online</div>
            </div>
          </div>

          <div className="dashboard-sections">
            <div className="traffic-map-section">
              <h3><FaMapMarkedAlt /> Traffic Map</h3>
              <div className="map-container">
                {/* In a real app, this would be a map component */}
                <div className="placeholder-map">Interactive Traffic Map</div>
              </div>
            </div>

            <div className="events-section">
              <h3>Recent Events</h3>
              <ul className="events-list">
                {trafficData.recentEvents.map(event => (
                  <li key={event.id} className={`event-item ${event.type}`}>
                    {event.type === 'alert' ? (
                      <FaExclamationTriangle className="event-icon" />
                    ) : (
                      <FaCheckCircle className="event-icon" />
                    )}
                    <div className="event-details">
                      <span className="event-message">{event.message}</span>
                      <span className="event-time">{event.timestamp}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;