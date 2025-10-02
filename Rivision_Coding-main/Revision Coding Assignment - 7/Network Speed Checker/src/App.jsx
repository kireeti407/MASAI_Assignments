import { useState } from 'react';
import './App.css'

const imageUrl = 'https://via.placeholder.com/150.png';

function App() {
  const [loadTime, setLoadTime] = useState(0);
  const [loading, setLoading] = useState(false);

  const checkNetworkSpeed = async () => {
    setLoading(true);
    setLoadTime(0);
    const startTime = performance.now();

    try {
      await fetch(`${imageUrl}?t=${new Date().getTime()}`);
      const endTime = performance.now();
      const duration = endTime - startTime;
      setLoadTime(duration);
    } catch (error) {
      console.error("Failed to check network speed:", error);
      setLoadTime(-1); 
    } finally {
      setLoading(false);
    }
  };

  const getSpeedStatus = () => {
    if (loadTime <= 0) {
      return null;
    }

    const isFast = loadTime < 500;
    const status = isFast ? 'Fast' : 'Slow';
    const icon = isFast ? '🚀' : '🐢';
    const color = isFast ? 'green' : 'red';

    return (
      <div className="speed-result">
        <p>Load time: {loadTime.toFixed(2)} ms</p>
        <p style={{ color }}>
          Status: {status} <span className="icon">{icon}</span>
        </p>
      </div>
    );
  };

  return (
    <>
      <h1>Network Speed Checker</h1>
      <div className="card">
        <button onClick={checkNetworkSpeed} disabled={loading}>
          {loading ? 'Checking...' : 'Check Speed'}
        </button>
        {getSpeedStatus()}
        {loadTime === -1 && <p style={{color: 'red'}}>Could not check speed. Please try again.</p>}
      </div>
    </>
  )
}

export default App
