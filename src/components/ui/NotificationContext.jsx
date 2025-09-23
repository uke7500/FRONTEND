import { createContext, useContext, useState, useCallback } from "react";
import Notification from "./Notification";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type, duration }]);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}

      {/* Notification UI */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-2">
        {notifications.map((n) => (
          <Notification
            key={n.id}
            message={n.message}
            type={n.type}
            duration={n.duration}
            onClose={() => removeNotification(n.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
