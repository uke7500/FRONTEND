import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ 
  product = {
    id: 1,
    name: "HIKVISION Dome Camera",
    image: "/api/placeholder/400/300",
    price: 147.51,
    originalPrice: 199.99,
    discount: 26,
    inStock: true,
    rating: 4.5,
    reviews: 128,
    brand: "HIKVISION",
    category: "Security Camera"
  }
}) {
  
  const handleBuyNow = () => {
    // console.log('Buy Now clicked for product:', product.id);
    // Add your buy now logic here
  };

  const handleAddToCart = () => {
    // console.log('Add to Cart clicked for product:', product.id);
    // Add your add to cart logic here
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group max-w-sm">
      
      {/* Product Image */}
      

      {/* Product Info */}
      <div className="p-6 space-y-4">
        
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium">{product.brand}</span>
          <span>{product.category}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400' 
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
          <span className="text-sm font-medium text-gray-900">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600">
              £{product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-lg text-gray-400 line-through">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.discount && (
            <p className="text-sm text-emerald-600 font-medium">
              You save £{(product.originalPrice - product.price).toFixed(2)}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleBuyNow}
            disabled={!product.inStock}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
              product.inStock
                ? 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Buy Now
          </button>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
              product.inStock
                ? 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Example usage with multiple products
export function ProductGrid() {
  const sampleProducts = [
    {
      id: 1,
      name: "HIKVISION Dome Security Camera",
      image: "/api/placeholder/400/300",
      price: 147.51,
      originalPrice: 199.99,
      discount: 26,
      inStock: true,
      rating: 4.5,
      reviews: 128,
      brand: "HIKVISION",
      category: "Security Camera"
    },
    {
      id: 2,
      name: "Night Vision CCTV Camera",
      image: "/api/placeholder/400/300",
      price: 89.99,
      originalPrice: 129.99,
      discount: 31,
      inStock: true,
      rating: 4.2,
      reviews: 76,
      brand: "DAHUA",
      category: "Night Vision"
    },
    {
      id: 3,
      name: "360° Rotation Camera",
      image: "/api/placeholder/400/300",
      price: 199.99,
      inStock: false,
      rating: 4.8,
      reviews: 203,
      brand: "AXIS",
      category: "PTZ Camera"
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}