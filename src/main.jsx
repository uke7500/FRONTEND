import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotificationProvider } from "./components/ui/NotificationContext.jsx";

createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
