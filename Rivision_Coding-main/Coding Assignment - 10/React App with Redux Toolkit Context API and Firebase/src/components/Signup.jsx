
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signupUser } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(email, password, displayName)
      .then(() => navigate('/'))
      .catch(error => alert(error.message));
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Display Name" 
          value={displayName} 
          onChange={(e) => setDisplayName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
