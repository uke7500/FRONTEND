import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/productSlice";
import { useNotification } from "../ui/NotificationContext";

const HomepageProductCard = ({ product, where }) => {
  const dispatch = useDispatch();
  const { notify } = useNotification();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product));
    notify("Item added to cart!", "success");
  };

  return (
    <div className="w-70 md:w-80 rounded-2xl p-6 shadow-2xl border border-gray-700 bg-black">
      {/* Product Image */}
      <div className="bg-white rounded-xl mb-6 h-48 overflow-hidden">
        <img
          src={product?.images[0]?.url}
          alt="product_image"
          className="w-full h-full object-contain max-w-full max-h-full"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-3">
        {/* Product Model No */}
        <div>
          <span className="text-xs text-gray-400 font-medium">
            Model Number:{" "}
          </span>
          <span className="text-xs text-white">
            {product?.model_no || "DS-2CD2H23G2-IZS"}
          </span>
        </div>
        {/* Product Name */}
        <div>
          <span className="text-xs text-gray-400 font-medium">
            Product Name:{" "}
          </span>
          <span className="text-xs text-white">
            {product?.name || "DS-2CD2H23G2-IZS"}
          </span>
        </div>

        {/* Price */}
        <div>
          <span className="text-xs text-gray-400 font-medium">Price: </span>
          <span className="text-lg text-white font-bold">
            £{product?.price || "$147.51"}
          </span>
        </div>

        {/* Product Description */}
        <div>
          <span className="text-xs text-gray-400 font-medium">
            Product Description:{" "}
          </span>
          <p className="text-xs text-white leading-relaxed mt-1">
            {product?.short_description ||
              "2MP, Motorized Varifocal lens (2.8~12mm), AcuSense, IP67, IK10, 120dB WDR"}
          </p>
        </div>
      </div>

      {/* Action Buttons */}

      {where ? (
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200 cursor-pointer px-8 mt-6">
          View Now
        </button>
      ) : (
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200 cursor-pointer">
            Buy Now
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      )}
      {/* Buy Now Button */}
    </div>
  );
};

export default HomepageProductCard;
