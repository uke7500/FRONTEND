import React from "react";
import { useSelector } from "react-redux";
import SummaryItem from "./SummaryItems";

const Summary = () => {
  const { productData } = useSelector((store) => store.product);

  const { cartSubTotal, discount, finalPrice } = useSelector(
    (store) => store.delivery
  );

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Summary</h3>

      {/* Product Items */}
      <div className="space-y-4">
        {productData.map((product) => <SummaryItem key={product.id} data={product} />)}
      </div>

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Cart Sub Total:</span>
          <span className="text-green-400">£{cartSubTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span className="text-green-400">Free</span>
        </div>
        <div className="flex justify-between text-red-400">
          <span>Discount</span>
          <span>-£{discount}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t border-gray-600 pt-2">
          <span>Cart Total:</span>
          <span className="text-green-400">£{finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
