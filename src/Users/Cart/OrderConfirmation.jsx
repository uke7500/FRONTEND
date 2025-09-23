import React from "react";
import { Check } from "lucide-react";
import Summary from "../../components/Cart/Summary";
import Stepper from "../../components/ui/Stepper";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const OrderConfirmation = () => {
  const shippingType = useSelector((state) => state.shipping.shippingType);
  const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;
  return (
    <div className="min-h-screen  text-white p-6">
      {/* Progress Bar Placeholder */}
      <div className="mb-8">
        <Stepper activeStep="Confirmation" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Confirmation */}
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-3xl font-bold mb-8">Confirmation</h1>

          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Congratulations.</h2>
            <p className="text-lg text-green-400">Your Order is accepted</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Your Order is Accepted and will be arrived soon kindly check the
            mail & Whatsapp for the update about this order
          </p>

          {/* Action Button */}
          <div className="pt-4">
            <Link to={FRONTEND_URL}>
              <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full max-w-xs">
                Back to Home Page
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Summary Card Placeholder */}
        <div className="flex flex-col justify-center lg:justify-start">
          <Summary />

          <div className="my-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
              Shipping
            </h3>
            <div>
              <div className="text-sm font-medium mb-1">{shippingType}</div>
              <div className="text-xs text-gray-400">
                Delivery is expected to be delivered in 3 to 6 Working days if
                it free of cost
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
