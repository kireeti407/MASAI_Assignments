import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/authSlice';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.auth);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }));
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Signup'}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default SignupForm;
