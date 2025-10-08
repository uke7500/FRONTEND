import { Navigate } from "react-router-dom";

const PaymentProtectedRoute = ({ children }) => {
  const isPaymentDone = localStorage.getItem("paymentSuccess") === "true";

  if (!isPaymentDone) {
    return <Navigate to="/" replace />; // redirect to home or checkout
  }

  return children;
};

export default PaymentProtectedRoute;
