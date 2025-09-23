import { useState, useCallback } from "react";
import Notification from "./Notification";

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback(
    (message, type = "info", duration = 3000) => {
      const id = Date.now();
      setNotifications((prev) => [...prev, { id, message, type, duration }]);
    },
    []
  );

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* Example trigger for testing */}
      <button
        className="fixed bottom-20 right-5 bg-black text-white px-4 py-2 rounded-lg"
        onClick={() => showNotification("Added to cart!", "success")}
      >
        Test Notification
      </button>

      {notifications.map((n) => (
        <Notification
          key={n.id}
          message={n.message}
          type={n.type}
          duration={n.duration}
          onClose={() => removeNotification(n.id)}
        />
      ))}
    </>
  );
};

export default NotificationContainer;
