import React, { createContext, useState, useContext, useEffect } from 'react';
import API from '../api/axiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const { data } = await API.post('/users/login', { email, password });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUser(data);
    };

    const register = async (name, email, password, role) => {
        const { data } = await API.post('/users/register', { name, email, password, role });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUser(data);
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
