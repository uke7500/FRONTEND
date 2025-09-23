import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShipping } from "../../store/shippingSlice";

let typingTimer;

const PaymentInformationForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((store) => store.shipping.email);
  const [localEmail, setLocalEmail] = useState(email || "");
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalEmail(value);

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      if (value.trim() === "") {
        // user cleared the input → remove from redux too
        dispatch(updateShipping({ email: "" }));
        setEmailError("");
      } else {
        // validate email before saving
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setEmailError("Please enter a valid email address");
        } else {
          setEmailError("");
          dispatch(updateShipping({ email: value }));
        }
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Customer's Email</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Add Your Email</label>
        <input
          required
          type="text"
          placeholder="Your Email"
          value={localEmail}
          onChange={handleInputChange}
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-2">{emailError}</p>
        )}
      </div>

      <NavLink className="mb-6" to="/cart/productdelivery">
        <button className="border-1 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded transition-colors cursor-pointer">
          Back to Address
        </button>
      </NavLink>
    </div>
  );
};

export default PaymentInformationForm;
