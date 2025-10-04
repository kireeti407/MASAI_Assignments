import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './form.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Member'); // Default role
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await register(name, email, password, role);
            navigate('/');
        } catch (err) {
            setError('Failed to register. An account with this email may already exist.');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-card">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Member">Member</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="form-button">Register</button>
                <p className="form-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
