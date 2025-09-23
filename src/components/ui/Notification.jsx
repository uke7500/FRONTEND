import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

const icons = {
  success: <CheckCircle className="text-green-500" size={20} />,
  error: <XCircle className="text-red-500" size={20} />,
  info: <Info className="text-blue-500" size={20} />,
  warning: <AlertCircle className="text-yellow-500" size={20} />,
};

const Notification = ({ message, type = "info", onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 bg-white border shadow-lg px-4 py-3 rounded-xl w-72"
      >
        <div>{icons[type]}</div>
        <p className="text-sm text-gray-800">{message}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
