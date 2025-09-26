import PaymentInformationForm from "../../components/Cart/PaymentInformationForm";
import Summary from "../../components/Cart/Summary";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { sendShippingData } from "../../api/sendShippingData";
import { clearShipping, updateShipping } from "../../store/shippingSlice";
import createStrapiOrder from "../../api/createStrapiOrder";
import Stepper from "../../components/ui/Stepper";
import { clearCart } from "../../store/productSlice";

const PaymentPage = () => {
  const formData = useSelector((state) => state.shipping);
  const shippingType = formData.shippingType;
  const email = formData.email;

  const navigate = useNavigate();

  const { cartSubTotal, discount, finalPrice } = useSelector(
    (store) => store.delivery
  );
  console.log("Final Price:", finalPrice.toFixed(2));
  const productData = useSelector((store) => store.product.productData);

  const dispatch = useDispatch();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <Stepper activeStep="Payment" />

        <div className="mx-auto w-full flex flex-col sm:flex-row gap-8 justify-center">
          {/* Payment Information */}
          <div className="sm:w-1/3">
            <PaymentInformationForm />
          </div>

          {/* Summary + PayPal */}
          <div className="bg-gray-900 sm:w-1/2 rounded-lg p-6 border border-gray-800 h-fit">
            <Summary />

            <div className="my-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                Shipping
                <NavLink to="/cart/productdelivery">
                  <button className="text-green-500 text-xs hover:underline cursor-pointer">
                    View Shipping Details
                  </button>
                </NavLink>
              </h3>
              <div>
                <div className="text-sm font-medium mb-1">{shippingType}</div>
                <div className="text-xs text-gray-400">
                  Delivery is expected to be delivered in 3 to 6 Working days if
                  it free of cost
                </div>
              </div>
            </div>

            {/* ✅ Only enable PayPal if email is provided */}
            {email ? (
              <PayPalButtons
                forceReRender={[finalPrice, email]} // Re-render when email changes
                createOrder={async () => {
                  if (!email) {
                    alert(
                      "Please enter your email before proceeding to payment."
                    );
                    throw new Error("Email missing");
                  }

                  const res = await fetch(
                    BACKEND_URL + "/create-paypal-order",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ amount: finalPrice.toFixed(2) }),
                    }
                  );

                  if (!res.ok) {
                    const text = await res.text();
                    console.error(
                      "create-paypal-order failed:",
                      res.status,
                      text
                    );
                    throw new Error(`createOrder failed: ${res.status}`);
                  }

                  const data = await res.json();
                  if (!data?.id) {
                    console.error("No order id in response:", data);
                    throw new Error("No order id returned");
                  }
                  return data.id;
                }}
                onApprove={async (data) => {
                  try {
                    // PayPal gives orderID, not id
                    const orderId = data.orderID;

                    if (!orderId) {
                      console.error(
                        "❌ Order ID missing from PayPal response:",
                        data
                      );
                      return;
                    }

                    dispatch(updateShipping({ orderId: data.orderID }));

                    const payload = { ...formData, orderId: orderId };
                    const shippingData = await sendShippingData(payload);

                    const strapiData = await createStrapiOrder({
                      productData,
                      cartSubTotal,
                      discount,
                      finalPrice,
                      orderId: data.orderID,
                    });

                    const res = await fetch(
                      BACKEND_URL + "/capture-paypal-order",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          orderID: data.orderID,
                          documentId: strapiData.data.documentId,
                          shippingDocumentId: shippingData.data.documentId,
                        }),
                      }
                    );

                    if (!res.ok) {
                      const text = await res.text();
                      console.error(
                        "capture-paypal-order failed:",
                        res.status,
                        text
                      );
                      throw new Error(`captureOrder failed: ${res.status}`);
                    }

                    const details = await res.json();

                    alert(
                      "Transaction completed by " +
                        (formData.firstName || "Unknown Buyer")
                    );
                    navigate(
                      "/cart/productdelivery/paymentinfo/paymentconfirmation"
                    );
                    dispatch(clearCart());
                    dispatch(clearShipping());
                  } catch (error) {
                    console.error("Payment process failed:", error);
                    alert("Payment process failed. Please try again.");
                  }
                }}
                onError={(err) => {
                  console.error("PayPal Buttons onError:", err);
                  alert(
                    "Something went wrong with PayPal. Check console for details."
                  );
                }}
              />
            ) : (
              <div className="mt-4 text-red-400 text-sm">
                ⚠️ Please enter your email before proceeding with PayPal.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
