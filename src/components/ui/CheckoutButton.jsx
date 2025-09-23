import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { sendShippingData } from "../../api/sendShippingData";

const CheckoutButton = () => {
  const { finalPrice } = useSelector((store) => store.delivery);
  const formData = useSelector((state) => state.shipping);

  return (
    <div>
      <h2 className="text-white text-xl font-bold mb-4">Pay with PayPal</h2>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: finalPrice, // ✅ Replace with your cart total dynamically
                  currency_code: "GBP", // or GBP, EUR, INR etc.
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return fetch("/capture-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderID: data.orderID }),
          })
            .then((res) => res.json())
            .then((orderData) => {
              alert("Transaction completed! Confirmation email sent.");
              sendShippingData(formData);
            });
        }}
      />
    </div>
  );
};

export default CheckoutButton;
