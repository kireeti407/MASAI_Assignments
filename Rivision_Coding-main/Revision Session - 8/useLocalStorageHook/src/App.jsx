import React from 'react';
import { useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import MainContent from './MainContent';
import './App.css'

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <ThemeToggleButton />
      </header>
      <main>
        <MainContent />
      </main>
    </div>
  )
}

export default App
