import { useDispatch } from "react-redux";
import { updateCartQuantity, removeFromCart } from "../../store/productSlice";
import { Trash2, Plus, Minus } from "lucide-react";
import { useNotification } from "../ui/NotificationContext";

const CartProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { notify } = useNotification();

  const addQuantity = () => {
    dispatch(updateCartQuantity({ id: data.id, quantity: data.quantity + 1 }));
  };

  const minusQuantity = () => {
    if (data.quantity > 1) {
      dispatch(
        updateCartQuantity({ id: data.id, quantity: data.quantity - 1 })
      );
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
    notify("Item removed from cart!", "success");
  };

  return (
    <div
      key={data.id}
      className="border-b border-gray-700 py-4 md:py-6 
             flex flex-col space-y-4 lg:space-y-0 
             lg:grid lg:grid-cols-12 lg:items-center lg:gap-4"
    >
      {/* Product Info */}
      <div className="flex items-start space-x-3 sm:space-x-4 lg:col-span-5">
        {/* Remove Button */}
        <button
          onClick={() => removeItem(data.id)}
          className="text-red-500 hover:text-red-400 p-1 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>

        {/* Product Image */}
        <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex-shrink-0">
          <img
            src={data?.images[0]?.url}
            className="w-20 sm:w-24 md:w-28 h-auto object-contain"
            alt="product_image"
          />
        </div>

        {/* Title + Description */}
        <div className="flex flex-col">
          <div className="text-white font-medium text-sm sm:text-base">
            {data.name}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm line-clamp-2">
            {data.short_description}
          </div>

          {/* Price (mobile only) */}
          <div className="mt-2 flex items-center text-green-400 font-medium text-sm sm:hidden">
            Price: £{data.price}
          </div>
        </div>
      </div>

      {/* Price (desktop only) */}
      <div className="hidden lg:block col-span-2 text-center text-green-400 font-medium">
        £{data.price}
      </div>

      {/* Quantity */}
      <div className="flex items-center lg:justify-center lg:col-span-3">
        <div className="flex items-center bg-green-600 rounded overflow-hidden">
          <button
            onClick={minusQuantity}
            className="px-3 py-1 hover:bg-green-700 cursor-pointer"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-1 bg-white text-black min-w-[3rem] text-center text-sm sm:text-base">
            {data.quantity}
          </span>
          <button
            onClick={addQuantity}
            className="px-3 py-1 hover:bg-green-700 cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="lg:col-span-2 text-green-400 font-medium text-sm sm:text-base">
        <div className="flex justify-between lg:block">
          <span className="lg:hidden text-gray-400">Total:</span>
          <span>£{(data.price * data.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
