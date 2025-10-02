import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isCharging, setIsCharging] = useState(null);
  const [isApiSupported, setIsApiSupported] = useState(true);

  useEffect(() => {

    if (!('getBattery' in navigator)) {
      setIsApiSupported(false);

      let simulatedLevel = 85;
      let simulatedCharging = false;
      setBatteryLevel(simulatedLevel / 100);
      setIsCharging(simulatedCharging);

      const interval = setInterval(() => {
        if (simulatedCharging) {
          simulatedLevel = Math.min(100, simulatedLevel + 2);
        } else {
          simulatedLevel = Math.max(0, simulatedLevel - 1);
        }
        setBatteryLevel(simulatedLevel / 100);

        if (Math.random() > 0.9) {
          simulatedCharging = !simulatedCharging;
          setIsCharging(simulatedCharging);
        }
      }, 5000);

      return () => clearInterval(interval);
    }

    let batteryManager;

    const updateBatteryStatus = (battery) => {
      setBatteryLevel(battery.level);
      setIsCharging(battery.charging);
    };

    const addListeners = (battery) => {
      batteryManager = battery;
      batteryManager.addEventListener('levelchange', () => updateBatteryStatus(batteryManager));
      batteryManager.addEventListener('chargingchange', () => updateBatteryStatus(batteryManager));
    };

    navigator.getBattery().then((battery) => {
      updateBatteryStatus(battery);
      addListeners(battery);
    });

    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener('levelchange', () => updateBatteryStatus(batteryManager));
        batteryManager.removeEventListener('chargingchange', () => updateBatteryStatus(batteryManager));
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>Battery Status App</h1>
      {!isApiSupported && <p>Battery Status API not supported. Displaying simulated data.</p>}
      {batteryLevel !== null ? (
        <div>
          <h2>Battery Level: {(batteryLevel * 100).toFixed(0)}%</h2>
          <h2>Charging: {isCharging ? 'Yes' : 'No'}</h2>
          <div className="icon">
            {isCharging ? <span title="Charging">⚡</span> : batteryLevel < 0.2 ? <span title="Low Battery">🔴</span> : <span title="Good Battery">🟢</span>}
          </div>
        </div>
      ) : (
        <p>Loading battery status...</p>
      )}
    </div>
  )
}

export default App
