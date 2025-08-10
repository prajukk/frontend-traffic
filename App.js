import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TrafficAnalytics from './pages/TrafficAnalytics';
import CameraManagement from './pages/CameraManagement';
import SignalControl from './pages/SignalControl';
import About from './pages/About';
import Login from './pages/Login';

import './App.css';

// Backend Context
export const BackendContext = createContext();

// API & Socket Config
const API_URL = 'http://localhost:5000';
axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

const socket = io(API_URL, {
  withCredentials: true,
  transports: ['websocket', 'polling'],
});

function App() {
  const [connected, setConnected] = useState(false);
  const [cameraData, setCameraData] = useState([]);
  const [signalData, setSignalData] = useState([]);
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    // WebSocket Events
    socket.on('connect', () => {
      console.log('✅ Connected to server!');
      setConnected(true);
    });

    socket.on('disconnect', () => {
      console.warn('⚠️ Disconnected from server');
      setConnected(false);
    });

    socket.on('cameraUpdate', (data) => {
      console.log('📷 Camera update:', data);
      setCameraData(prev => {
        const updated = [...prev];
        const index = updated.findIndex(cam => cam.id === data.id);
        if (index !== -1) updated[index] = data;
        else updated.push(data);
        return updated;
      });
    });

    socket.on('signalUpdate', (data) => {
      console.log('🚦 Signal update:', data);
      setSignalData(prev => {
        const updated = [...prev];
        const index = updated.findIndex(sig => sig.id === data.id);
        if (index !== -1) updated[index] = data;
        else updated.push(data);
        return updated;
      });
    });

    socket.on('analyticsUpdate', (data) => {
      console.log('📊 Analytics update:', data);
      setAnalyticsData(data);
    });

    // Initial data fetch
    const fetchInitialData = async () => {
      try {
        const [cameras, signals, analytics] = await Promise.all([
          axios.get('/api/cameras'),
          axios.get('/api/signals'),
          axios.get('/api/analytics'),
        ]);
        setCameraData(cameras.data);
        setSignalData(signals.data);
        setAnalyticsData(analytics.data);
      } catch (err) {
        console.error('❌ Error fetching initial data:', err);
      }
    };

    fetchInitialData();

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('cameraUpdate');
      socket.off('signalUpdate');
      socket.off('analyticsUpdate');
    };
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const contextValue = {
    connected,
    socket,
    cameraData,
    signalData,
    analyticsData,

    updateSignal: async (signalId, status) => {
      try {
        const response = await axios.put(
          `/api/signals/${signalId}`,
          { status },
          getAuthHeaders()
        );
        return response.data;
      } catch (error) {
        console.error('❌ Error updating signal:', error);
        throw error;
      }
    },

    fetchCameraDetails: async (cameraId) => {
      try {
        const response = await axios.get(`/api/cameras/${cameraId}`, getAuthHeaders());
        return response.data;
      } catch (error) {
        console.error('❌ Error fetching camera details:', error);
        throw error;
      }
    },
  };

  return (
    <BackendContext.Provider value={contextValue}>
      <Router>
        <div className="App">
          <Navbar />
          <div
            className="connection-status"
            style={{
              padding: '5px 10px',
              textAlign: 'center',
              backgroundColor: connected ? '#d4edda' : '#f8d7da',
              color: connected ? '#155724' : '#721c24',
              borderRadius: '4px',
              margin: '0 10px',
            }}
          >
            {connected ? '🟢 Connected to server' : '🔴 Disconnected from server'}
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<TrafficAnalytics />} />
              <Route path="/cameras" element={<CameraManagement />} />
              <Route path="/signals" element={<SignalControl />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </BackendContext.Provider>
  );
}

// Custom hook
export const useBackend = () => useContext(BackendContext);

export default App;
