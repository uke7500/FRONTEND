import { NavLink } from "react-router-dom";
import CartProductCard from "../../components/Cart/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCartData, clearPromoData } from "../../store/deliverySlice";
import Stepper from "../../components/ui/Stepper";
import { useNotification } from "../../components/ui/NotificationContext";

const Cart = () => {
  const [promoCode, setPromoCode] = useState("");

  const dispatch = useDispatch();
  const { notify } = useNotification();

  // Get data from Redux (already persisted from localStorage)
  const { productData, totalPrice } = useSelector((store) => store.product);
  const { discount, promoCodeStore } = useSelector((store) => store.delivery);

  const shipping = 0;
  const total = totalPrice - discount + shipping;

  // Example promo codes
  const promoCodes = {
    SAVE10: 10,
    SAVE20: 20,
    DEAL50: 50,
  };

  const handleApplyPromo = () => {
    const upperCode = promoCode.trim().toUpperCase();
    const discountValue = promoCodes[upperCode] || 0;

    dispatch(
      addCartData({
        cartSubTotal: totalPrice,
        discount: discountValue,
        finalPrice: totalPrice - discountValue + shipping,
        promoCodeStore: upperCode,
      })
    );
    notify("Promo Code Applied", "success");
  };

  const handleClearPromo = () => {
    dispatch(clearPromoData());
    setPromoCode("");
  };

  // ✅ FIX: Always update Redux totals when cart changes
  useEffect(() => {
    dispatch(
      addCartData({
        cartSubTotal: totalPrice,
        discount,
        finalPrice: totalPrice - discount + shipping,
        promoCodeStore,
      })
    );
  }, [dispatch, totalPrice, discount, shipping, promoCodeStore]);

  return (
    <div className="min-h-screen bg-black my-20 text-white">
      {/* Header Navigation */}
      <Stepper activeStep="My Cart" />

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Product Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-4 py-4 border-b border-gray-700 text-gray-400 font-medium">
          <div className="col-span-5">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-3 text-center">Quantity</div>
          <div className="col-span-2 text-center">Total Price</div>
        </div>

        {/* Products List */}
        <div>
          {productData.map((product) => (
            <CartProductCard key={product.id} data={product} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          {/* Coupon Code */}
          <div className="bg-gray-800 rounded-lg p-4 md:p-6">
            <h3 className="text-white font-medium mb-4">Coupon Code</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-4">
              You can apply coupons if you have them to get a discount.
            </p>
            <div className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Promo Code"
                value={promoCodeStore ? promoCodeStore : promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 md:px-4 py-2 text-white placeholder-gray-400 text-sm md:text-base"
              />
              <button
                onClick={promoCodeStore ? handleClearPromo : handleApplyPromo}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium text-sm md:text-base cursor-pointer"
              >
                {promoCodeStore ? "Clear" : "Apply"}
              </button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="bg-gray-800 rounded-lg p-4 md:p-6">
            <h3 className="text-white font-medium mb-4">Cart Total</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-400">Cart Sub Total:</span>
                <span className="text-green-400">£{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-400">Shipping:</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-gray-400">Discount:</span>
                <span className="text-green-400">-£{discount.toFixed(2)}</span>
              </div>
              <hr className="border-gray-600" />
              <div className="flex justify-between font-medium text-sm md:text-base">
                <span className="text-white">Cart Total:</span>
                <span className="text-green-400">£{total.toFixed(2)}</span>
              </div>
              <NavLink to="/cart/productdelivery">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 md:py-3 rounded font-medium mt-3 md:mt-4 text-sm md:text-base cursor-pointer">
                  Check Out
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
