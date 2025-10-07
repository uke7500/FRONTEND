import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Summary from "../../components/Cart/Summary";
import ShippingForm from "../../components/Cart/ShippingForm";
import { clearShipping, updateShipping } from "../../store/shippingSlice";
import useShippingData from "../../Hooks/useShippingData";
import Stepper from "../../components/ui/Stepper";

const ProductDelivery = () => {
  const dispatch = useDispatch();
  const data = useShippingData();

  const formData = useSelector((state) => state.shipping);

  const handleClearShippingInfo = () => {
    dispatch(clearShipping());
  };

  const handleCheckOut = () => {
    dispatch(updateShipping({ shippingType: formData.shippingType }));
  };

  const handleInputChange = (field, value) => {
    dispatch(updateShipping({ [field]: value }));
  };

  // ✅ Validation Function
  const isFormValid = () => {
    return (
      formData.firstName?.trim() &&
      formData.lastName?.trim() &&
      formData.address?.trim() &&
      formData.zipCode?.trim() &&
      formData.country?.trim() &&
      formData.city?.trim() &&
      formData.state?.trim() &&
      formData.cellPhone?.trim() &&
      formData.deliveryTime?.trim()
    );
  };

  return (
    <div className="min-h-screen bg-black my-20 text-white p-4">
      <Stepper activeStep="Delivery" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 my-10">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <ShippingForm />

          <NavLink to="/cart">
            <button className="bg-transparent border border-gray-600 text-white px-6 py-3 mr-2 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer">
              Back to Cart
            </button>
          </NavLink>

          <button
            onClick={handleClearShippingInfo}
            className="bg-transparent border border-gray-600 text-white px-6 mt-2 sm:mx-6 py-3 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer"
          >
            Clear Shipping Information
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <Summary />

          {/* Shipping Options */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Shipping</h3>

            <div className="flex flex-col gap-4">
              <span>Orders are processed within 6-8 business days.</span>
              <span>
                Standard delivery within 8-10 working days across United
                kingdom.
              </span>
              <span>Tracking details will be shared once dispatched.</span>
            </div>

            {/* ✅ Checkout Button (disabled until form is valid) */}
            <NavLink
              to={isFormValid() ? "/cart/productdelivery/paymentinfo" : "#"}
            >
              <button
                onClick={isFormValid() ? handleCheckOut : null}
                disabled={!isFormValid()}
                className={`w-full mt-6 py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors cursor-pointer 
                  ${
                    isFormValid()
                      ? "bg-green-500 hover:bg-green-600 text-white font-semibold"
                      : "bg-gray-600 text-gray-300 cursor-not-allowed"
                  }`}
              >
                <span>Check Out</span>
                <ArrowRight size={20} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDelivery;
