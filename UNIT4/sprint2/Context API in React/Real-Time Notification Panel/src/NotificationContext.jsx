import { createContext, useState, useEffect, useRef } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const intervalRef = useRef(null);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: 'You have a new message!',
      read: false,
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const stopNotifications = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    intervalRef.current = setInterval(addNotification, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAllAsRead, stopNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
