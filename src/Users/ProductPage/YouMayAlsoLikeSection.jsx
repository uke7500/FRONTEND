import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "../../Hooks/Product";
import { Link } from "react-router-dom";
import HomepageProductCard from "../../components/ProductCard/HomepageProductCard";

const YouMayAlsoLikeSection = () => {
  const { products } = useProducts();

  // Ref for scroll container
  const scrollRef = useRef(null);

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500; // adjust this for how many px per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">You may also like</h2>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hidden p-2 scroll-smooth"
        >
          {products.map((product, index) => (
            <Link
              key={product.id || index}
              to={`/productpage/${product?.documentId}`}
              className="min-w-[250px] flex-shrink-0"
            >
              <HomepageProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLikeSection;
