import React from 'react';
import { FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Our Project</h1>
        <p>Project OMEGA 2025 - AI-Based Intelligent Traffic Management System</p>
      </section>
      
      <section className="project-details">
        <h2>Project Overview</h2>
        <p>
          This AI-based intelligent traffic management system optimizes traffic flow using real-time data analytics.
          The system integrates IoT devices (ESP32-CAM) and AI to dynamically adjust traffic signals based on vehicle density.
          By utilizing computer vision and machine learning, we provide a scalable solution to urban traffic congestion.
        </p>
        
        <div className="objectives">
          <h3>Key Objectives</h3>
          <ul>
            <li>Improve traffic flow by dynamically adjusting signal timings</li>
            <li>Utilize AI and computer vision for real-time vehicle detection</li>
            <li>Establish a scalable IoT communication network for data exchange</li>
            <li>Reduce congestion and waiting times at traffic intersections</li>
            <li>Provide real-time analytics for traffic management decisions</li>
          </ul>
        </div>
      </section>
      
      <section className="technologies">
        <h2>Technology Stack</h2>
        
        <div className="tech-grid">
          <div className="tech-category">
            <h3>Hardware</h3>
            <ul>
              <li>ESP32-CAM for traffic monitoring</li>
              <li>Traffic Signal Controllers</li>
              <li>IoT communication modules</li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3>Software</h3>
            <ul>
              <li>Frontend: React.js, CSS3, HTML5</li>
              <li>Backend: Node.js, Express</li>
              <li>Database: MongoDB</li>
              <li>ESP32-CAM Programming: C++, WiFi, HTTPClient</li>
              <li>Computer Vision: OpenCV, TensorFlow</li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3>Communication</h3>
            <ul>
              <li>MQTT for IoT device communication</li>
              <li>RESTful APIs for system integration</li>
              <li>WebSockets for real-time updates</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="team">
        <h2><FaUsers /> Team CITian</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Sadhu J</h3>
            <p>Team Lead & Backend Developer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Praju K K</h3>
            <p>IoT Specialist & Hardware Integration</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Madan Gowda B S</h3>
            <p>AI & Computer Vision Expert</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Thirtha Prasad C N</h3>
            <p>Frontend Developer & UX Designer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar"></div>
            <h3>Sri Lakshmi</h3>
            <p>Data Analyst & System Architecture</p>
          </div>
        </div>
      </section>
      
      <section className="future-work">
        <h2><FaLightbulb /> Future Enhancements</h2>
        <div className="enhancements-grid">
          <div className="enhancement-card">
            <h3>Predictive Traffic Management</h3>
            <p>AI forecasts congestion patterns and preemptively adjusts signals</p>
          </div>
          <div className="enhancement-card">
            <h3>Smart Parking Integration</h3>
            <p>Detects available parking spaces and informs drivers</p>
          </div>
          <div className="enhancement-card">
            <h3>Vehicle-to-Infrastructure Communication</h3>
            <p>Enables connected vehicles to interact with traffic signals</p>
          </div>
          <div className="enhancement-card">
            <h3>Public Transport Integration</h3>
            <p>Prioritizes buses and emergency vehicles in real-time</p>
          </div>
          <div className="enhancement-card">
            <h3>Automated Maintenance Alerts</h3>
            <p>Detects faults in signals and IoT devices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;