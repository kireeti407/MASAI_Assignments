import { useState } from 'react';
import { useWindowWidth } from './useWindowWidth';
import './App.css';

function App() {
  const { width, resizing } = useWindowWidth();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  let view = 'Desktop View';
  if (width < 768) {
    view = 'Mobile View';
  } else if (width >= 768 && width < 1024) {
    view = 'Tablet View';
  }

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Responsive Tracker</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div className="info">
          <p>Current Window Width: {width}px</p>
          <p>{view}</p>
          {resizing && <p className="resizing-message">Resizing...</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
