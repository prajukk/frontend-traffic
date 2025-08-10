import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';

const TrafficAnalytics = () => {
  const [timeFrame, setTimeFrame] = useState('day');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading analytics data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, [timeFrame]);
  
  const handleTimeFrameChange = (newTimeFrame) => {
    setIsLoading(true);
    setTimeFrame(newTimeFrame);
  };

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h1>Traffic Analytics</h1>
        <div className="time-frame-selector">
          <button 
            className={timeFrame === 'day' ? 'active' : ''} 
            onClick={() => handleTimeFrameChange('day')}
          >
            Day
          </button>
          <button 
            className={timeFrame === 'week' ? 'active' : ''} 
            onClick={() => handleTimeFrameChange('week')}
          >
            Week
          </button>
          <button 
            className={timeFrame === 'month' ? 'active' : ''} 
            onClick={() => handleTimeFrameChange('month')}
          >
            Month
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="loading">Loading analytics data...</div>
      ) : (
        <div className="analytics-grid">
          <div className="analytics-card traffic-volume">
            <h3><FaChartBar /> Traffic Volume</h3>
            <div className="chart-container">
              {/* In a real app, this would be a chart component */}
              <div className="placeholder-chart">Traffic Volume Chart</div>
            </div>
            <div className="analytics-summary">
              <div className="summary-item">
                <span className="summary-label">Peak Hour:</span>
                <span className="summary-value">5:00 PM - 6:00 PM</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Average Daily Volume:</span>
                <span className="summary-value">12,450 vehicles</span>
              </div>
            </div>
          </div>
          
          <div className="analytics-card congestion-trends">
            <h3><FaChartLine /> Congestion Trends</h3>
            <div className="chart-container">
              {/* In a real app, this would be a chart component */}
              <div className="placeholder-chart">Congestion Trends Chart</div>
            </div>
            <div className="analytics-summary">
              <div className="summary-item">
                <span className="summary-label">Most Congested Day:</span>
                <span className="summary-value">Friday</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Average Wait Time:</span>
                <span className="summary-value">4.2 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="analytics-card vehicle-distribution">
            <h3><FaChartPie /> Vehicle Distribution</h3>
            <div className="chart-container">
              {/* In a real app, this would be a chart component */}
              <div className="placeholder-chart">Vehicle Distribution Chart</div>
            </div>
            <div className="analytics-summary">
              <div className="summary-item">
                <span className="summary-label">Cars:</span>
                <span className="summary-value">68%</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Motorcycles:</span>
                <span className="summary-value">12%</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Trucks/Buses:</span>
                <span className="summary-value">20%</span>
              </div>
            </div>
          </div>
          
          <div className="analytics-card signal-performance">
            <h3><FaCalendarAlt /> Signal Performance</h3>
            <div className="chart-container">
              {/* In a real app, this would be a chart component */}
              <div className="placeholder-chart">Signal Performance Chart</div>
            </div>
            <div className="analytics-summary">
              <div className="summary-item">
                <span className="summary-label">Avg. Green Time:</span>
                <span className="summary-value">45 seconds</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Optimization Rate:</span>
                <span className="summary-value">87%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrafficAnalytics;