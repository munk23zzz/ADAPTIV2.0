import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const fetchUser = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const response = await api.get('/users/me');
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user:', error);
          localStorage.removeItem('access_token');
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    // Bypass login for demonstration
    const dummyUser = {
      id: "dummy-id",
      email: email,
      name: email.split('@')[0],
      onboarding_completed: false
    };
    localStorage.setItem('access_token', "dummy_token");
    setUser(dummyUser);
  };

  const register = async (name, email, password) => {
    // Bypass register for demonstration
    await login(email, password);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
  };

  const updateOnboarding = async (data) => {
    const response = await api.put('/users/me/onboarding', data);
    setUser(response.data);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateOnboarding }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
