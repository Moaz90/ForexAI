import React from 'react';
import { Bell, BellOff } from 'lucide-react';
import { useNotification } from '../context/NotificationContext';

const NotificationButton: React.FC = () => {
  const { notificationsEnabled, enableNotifications, notificationStatus } = useNotification();

  const handleClick = () => {
    enableNotifications();
  };

  return (
    <div className="fixed top-20 right-4 z-40">
      <button
        onClick={handleClick}
        className={`flex items-center space-x-2 py-2 px-4 rounded-full shadow-lg transition-all duration-300 ${
          notificationsEnabled 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {notificationsEnabled ? (
          <>
            <Bell className="h-5 w-5" />
            <span className="hidden sm:inline">Notifications Enabled</span>
          </>
        ) : (
          <>
            <BellOff className="h-5 w-5" />
            <span className="hidden sm:inline">
              {notificationStatus === 'denied' 
                ? 'Notifications Blocked' 
                : 'Enable Notifications'}
            </span>
          </>
        )}
      </button>
      
      {notificationStatus === 'denied' && (
        <div className="mt-2 bg-white p-3 rounded-lg shadow-lg text-sm max-w-xs">
          Please enable notifications in your browser settings to receive signal updates.
        </div>
      )}
    </div>
  );
};

export default NotificationButton;