import React, { useEffect, useState } from "react";
import {
  Star,
  Plus,
  Minus,
  ShoppingCart,
  CreditCard,
  Home,
  ChevronRight,
} from "lucide-react";
import { useProduct } from "../../Hooks/Product";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, updateCartQuantity } from "../../store/productSlice";
import ReactMarkdown from "react-markdown";
import { useNotification } from "../../components/ui/NotificationContext";

const ProductData = ({ productId }) => {
  // const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("information");
  const dispatch = useDispatch();
  const { notify } = useNotification();

  const cartItem = useSelector((state) =>
    (state.product.cart ?? []).find((item) => item.id === productId)
  );
  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);

  // Sync local quantity with Redux when cartItem changes
  useEffect(() => {
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cartItem]);

  const productData = useProduct(productId);
  const product = productData?.product?.data;

  const handleQuantityChange = (action) => {
    let newQuantity = quantity;
    if (action === "increment") {
      newQuantity = quantity + 1;
    } else if (action === "decrement" && quantity > 1) {
      newQuantity = quantity - 1;
    }
    setQuantity(newQuantity);
    dispatch(updateCartQuantity({ id: product.id, quantity: newQuantity }));
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...product, id: product.id, quantity }));
    notify("Item added to cart!", "success");
  };

  const handleBuyNow = () => {
    dispatch(addProductToCart(product));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading product...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white my-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Product Images */}
          <div>
            <img className="rounded-lg" src={product?.images[0]?.url} alt="" />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-green-400 text-sm font-medium">
                {/* {product.category} */}
              </p>
              <h1 className="mt-2 text-gray-400">
                <span className="text-lg pr-2">Model No.</span>
                <span className="text-lg font-bold">{product?.model_no}</span>
              </h1>

              <h1 className="text-2xl mt-2">Product Name</h1>
              <h1 className="text-3xl font-bold mt-2">{product?.name}</h1>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-green-400">
              £{product?.price}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-left flex-col gap-6 sm:flex-row space-x-4">
              <div className="flex w-30 sm:w-auto items-center bg-gray-800 rounded">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="p-2 text-gray-400 hover:text-white cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="p-2 text-gray-400 hover:text-white cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-4 items-left sm:flex-row sm:gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center space-x-2  bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-medium transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                <NavLink to="/cart">
                  <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-medium transition-colors cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16 bg-[#272727] p-10 rounded-lg">
          <div className="flex flex-col sm:flex-row border-b border-gray-700">
            
              <span className="text-white border-b-2 border-green-500 px-6 py-3 font-medium cursor-pointer">Product Information</span>
              
          </div>

          <div className="py-8">
            {(
              <div className="mt-2">
                <p className="text-gray-300 prose prose-invert leading-relaxed">
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="text-2xl font-bold mt-4 mb-2"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-xl font-semibold mt-3 mb-2"
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="list-disc ml-6 space-y-1" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="text-gray-300" {...props} />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="mb-3" {...props} />
                      ),
                    }}
                  >
                    {product?.description}
                  </ReactMarkdown>
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
