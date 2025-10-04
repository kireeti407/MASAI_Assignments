import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './form.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-card">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="form-button">Login</button>
                <p className="form-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
