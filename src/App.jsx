import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

import AuthProvider from "./components/Auth/AuthProvider";
import PublicRoute from "./components/Auth/PublicRoute";
import PrivateRoute from "./components/Auth/PrivateRoute";

import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

import Profile from "./Users/Profile/Profile";
import LandingPage from "./Users/LandingPage/LandingPage";
import Home from "./Users/Home/Home";
import Cart from "./Users/Cart/Cart";

import MainLayout from "./components/Layout/MainLayout";
import AboutUs from "./Users/AboutUS/AboutUs";
import ContactUs from "./Users/ContactUs/ContactUs";
import ProductPage from "./Users/ProductPage/ProductPage";
import ProductDelivery from "./Users/Cart/ProductDelivery";
import PaymentPage from "./Users/Cart/PaymentPage";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderConfirmation from "./Users/Cart/OrderConfirmation";
import NotificationContainer from "./components/ui/NotificationContainer";

function App() {
  return (
    <Provider store={appStore}>
      {/* <NotificationContainer> */}
        <AuthProvider>
          <BrowserRouter>
            {/* ✅ Wrap whole app with PayPal provider */}
            <PayPalScriptProvider
              options={{
                "client-id":
                  "ASnlyxjGkQRwm81JkbB7-YiSgQC2NUIVaSwcocJK3sVQcfrvjwKkjG56hvJ7G2zSG4YIT3hQuhXcZwIO",
                currency: "GBP",
              }}
            >
              <Routes>
                {/* Public Routes */}
                <Route element={<PublicRoute />}>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                </Route>

                <Route element={<MainLayout />}>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/productpage/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/cart/productdelivery"
                    element={<ProductDelivery />}
                  />
                  <Route
                    path="/cart/productdelivery/paymentinfo"
                    element={<PaymentPage />}
                  />
                  <Route
                    path="/cart/productdelivery/paymentinfo/paymentconfirmation"
                    element={<OrderConfirmation />}
                  />
                  {/* <Route path="/profile" element={<Profile />} /> */}
                  {/* <Route element={<PrivateRoute />}></Route> */}
                </Route>
              </Routes>
            </PayPalScriptProvider>
          </BrowserRouter>
        </AuthProvider>
      {/* </NotificationContainer> */}
    </Provider>
  );
}

export default App;
