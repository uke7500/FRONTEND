import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="flex p-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm0 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z" />
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z" />
              <path d="M6 8h4v2H6zm0 4h3v2H6zm5-4h6v2h-6zm0 4h6v2h-6z" />
            </svg>
          </div>
        </div>

        {/* Product Details */}
        <div className="ml-6 flex-1">
          <div className="space-y-2">
            {/* Product Name */}
            <div>
              <span className="text-sm font-medium text-gray-700">
                Product Name:{" "}
              </span>
              <span className="text-sm text-gray-900">DS-2CD2H23G2-IZS</span>
            </div>

            {/* Price */}
            <div>
              <span className="text-sm font-medium text-gray-700">Price: </span>
              <span className="text-sm text-red-600 font-semibold">
                £147.51
              </span>
            </div>

            {/* Product Description */}
            <div>
              <span className="text-sm font-medium text-gray-700">
                Product Description:{" "}
              </span>
              <span className="text-sm text-gray-900">
                2MP, Motorized Varifocal lens (2.8~12mm), AcuSense, IP67, IK10,
                120dB WDR
              </span>
            </div>
          </div>

          {/* View Now Button */}
          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer">
              View Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
