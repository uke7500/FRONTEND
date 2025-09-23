import React from "react";
import { ChevronDown } from "lucide-react";

const SummaryItem = ({ data }) => {
  const { name, img, short_description, price, quantity } = data;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-4 space-x-3">
          <div className="w-12 h-12 bg-gray-600 rounded-lg">
            <img className="rounded-lg" src={data?.images[0]?.url} />
          </div>

          {/* Product Info */}
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-400">{short_description}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400">Qty: {quantity}</p>
            <p className="text-green-400 font-semibold">Price: £{price}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-4 mt-4 space-y-2"></div>
    </>
  );
};

export default SummaryItem;
