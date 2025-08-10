import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRobot, FaChartLine, FaRoad } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Based Intelligent Traffic Management System</h1>
          <p>Optimizing urban mobility through real-time data analytics and artificial intelligence</p>
          <div className="hero-buttons">
            <Link to="/Dashboard" className="btn btn-primary">
              View Dashboard <FaArrowRight />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaRobot />
            </div>
            <h3>AI-Powered Analysis</h3>
            <p>Leveraging machine learning to detect traffic patterns and optimize signal timings</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Real-Time Analytics</h3>
            <p>Continuous monitoring and analysis of traffic conditions across the city</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaRoad />
            </div>
            <h3>Smart Infrastructure</h3>
            <p>IoT-enabled traffic signals and cameras for comprehensive coverage</p>
          </div>
        </div>
      </section>

      <section className="project-overview">
        <h2>Project Overview</h2>
        <p>
          Our intelligent traffic management system utilizes ESP32-CAM devices to monitor traffic density in real-time.
          The captured data is processed by our AI models to make dynamic decisions for traffic signal control.
          This approach significantly reduces congestion, decreases travel time, and improves overall urban mobility.
        </p>
        <div className="overview-image">
          {/* Placeholder for system architecture diagram */}
          <div className="placeholder-image">System Architecture Diagram</div>
        </div>
      </section>
    </div>
  );
};

export default Home;