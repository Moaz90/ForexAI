import React, { createContext, useState, useContext, useEffect } from 'react';

interface NotificationContextType {
  notificationsEnabled: boolean;
  enableNotifications: () => void;
  sendNotification: (title: string, body: string) => void;
  notificationStatus: 'default' | 'granted' | 'denied';
}

const NotificationContext = createContext<NotificationContextType>({
  notificationsEnabled: false,
  enableNotifications: () => {},
  sendNotification: () => {},
  notificationStatus: 'default',
});

export const useNotification = () => useContext(NotificationContext);

interface NotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<'default' | 'granted' | 'denied'>('default');

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationStatus(Notification.permission);
      setNotificationsEnabled(Notification.permission === 'granted');
    }
  }, []);

  const enableNotifications = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notifications.');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setNotificationStatus(permission);
      setNotificationsEnabled(permission === 'granted');
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const sendNotification = (title: string, body: string) => {
    if (notificationsEnabled && 'Notification' in window) {
      try {
        const notification = new Notification(title, {
          body,
          icon: '/favicon.ico',
        });

        notification.onclick = () => {
          window.focus();
          notification.close();
        };
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationsEnabled,
        enableNotifications,
        sendNotification,
        notificationStatus,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;