import React from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default App;
