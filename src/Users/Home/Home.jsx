import React, { useEffect, useState } from "react";
import HomepageProductCard from "../../components/ProductCard/HomepageProductCard";
import { useProducts } from "../../Hooks/Product";
import { SlidersHorizontal, X, Filter } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";
import HeroSection from "../../assets/HeroSection.png";
import { Link } from "react-router-dom";
import useTags from "../../Hooks/useTags";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const Home = () => {
  const [selectedCamera, setSelectedCamera] = useState([]);
  const [selectedPage, setSelectedPage] = useState(5);
  const [priceRange, setPriceRange] = useState([0, 1000]); // [min, max]
  const [selectedStock, setSelectedStock] = useState("Available in Stock");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [tags, setTags] = useState([]);

  const handleCameraToggle = (tagName) => {
    setSelectedCamera(
      (prev) =>
        prev.includes(tagName)
          ? prev.filter((item) => item !== tagName) // remove if already selected
          : [...prev, tagName] // add if not selected
    );
  };

  const { products, loading, error } = useProducts();

  const fetchTags = async () => {
    const tags = await useTags();
    setTags(tags);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const handleClearTags = () => {
    setSelectedCamera([]);
  };

  const FilterSection = () => (
    <div className="space-y-6 md:space-y-8">
      {/* Filter Header */}
      <div className="flex justify-between items-center">
        <span className="text-2xl md:text-3xl font-medium text-white flex items-center gap-2">
          Filter Products
          <SlidersHorizontal size={24} className="md:hidden" />
          <SlidersHorizontal size={32} className="hidden md:block" />
        </span>
        {/* Close button for mobile & tablet */}
        <button
          onClick={() => setIsFilterOpen(false)}
          className="xl:hidden text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Camera Type Filter */}
      <div>
        <h1 className="text-lg md:text-xl font-bold mb-3 text-white">
          Categories
        </h1>
        <div className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">
          <div className="space-y-3 md:space-y-4 h-50 overflow-y-scroll">
            {tags.data &&
              tags.data.map((tag) => (
                <label
                  key={tag.documentId}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="camera"
                      value={tag.name}
                      checked={selectedCamera.includes(tag.name)}
                      onChange={() => handleCameraToggle(tag.name)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-md border-2 flex items-center justify-center ${
                        selectedCamera.includes(tag.name)
                          ? "bg-emerald-500 border-emerald-500"
                          : "bg-gray-300 border-gray-300"
                      }`}
                    >
                      {selectedCamera.includes(tag.name) && (
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-sm"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-black font-medium text-sm md:text-base">
                    {tag.name}
                  </span>
                </label>
              ))}
          </div>
          <div>
            <button
              onClick={handleClearTags}
              className="bg-emerald-500 px-6 text-lg py-1 rounded-lg mt-4 cursor-pointer hover:bg-emerald-600"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* <hr className="border-white/30 border-t-2" /> */}

      {/* Specifications Filter */}
      {/* <div>
        <h1 className="text-lg md:text-xl font-bold mb-3 text-white">
          Sub Categories
        </h1>
        <div className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
            {["2mb", "6mb", "10mb"].map((spec) => (
              <button
                key={spec}
                onClick={() => handleSpecToggle(spec)}
                className={`px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer font-medium transition-all text-xs md:text-sm ${
                  selectedSpecs.includes(spec)
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
            {["Night Vision Camera", "HKR"].map((spec) => (
              <button
                key={spec}
                onClick={() => handleSpecToggle(spec)}
                className={`px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer font-medium transition-all text-xs md:text-sm ${
                  selectedSpecs.includes(spec)
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {["HD", "360 Rotation Camera"].map((spec) => (
              <button
                key={spec}
                onClick={() => handleSpecToggle(spec)}
                className={`px-2 py-2 md:px-4 md:py-2 rounded-lg cursor-pointer font-medium transition-all text-xs md:text-sm ${
                  selectedSpecs.includes(spec)
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      <hr className="border-white/30 border-t-2" />

      {/* Rating */}
      <div>
        <h1 className="text-lg md:text-xl font-bold mb-3 text-white">
          Product Rating
        </h1>
        <div className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedPage(rating)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl cursor-pointer font-semibold transition-all text-sm md:text-base ${
                  selectedPage === rating
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-white/30 border-t-2" />

      {/* Price Range Chart */}
      <PriceRangeSlider priceRange={priceRange} onChange={setPriceRange} />

      <hr className="border-white/30 border-t-2" />

      {/* Stock Status */}
      <div>
        <h1 className="text-lg md:text-xl font-bold mb-3 text-white">
          Product Status
        </h1>
        <div className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">
          <div className="space-y-2 md:space-y-3">
            {["On sale", "Out of Stock", "Available in Stock"].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStock(status)}
                className={`w-full px-3 py-2 md:px-4 md:py-3 cursor-pointer rounded-xl font-medium transition-all text-sm md:text-base ${
                  selectedStock === status
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const filteredProducts = products.filter((product) => {
    const name = product?.name?.toLowerCase() || "";
    const description = product?.description?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();
    const price = product?.price || 0;

    // 1. Search filter
    const matchesSearch = name.includes(query) || description.includes(query);

    // 2. Tag filter (AND condition: product must have all selected tags)
    const matchesTags =
      selectedCamera.length === 0 ||
      selectedCamera.every((selectedTag) =>
        product.tags.some((tag) => tag.name === selectedTag)
      );

    // 3. Price filter
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    return matchesSearch && matchesTags && matchesPrice;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // if (loading) return <LoadingSpinner />;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="flex justify-center flex-col lg:flex-row bg-gradient-to-r from-[#FFFFFF] to-[#4CAF50] min-h-[300px] md:min-h-[400px] lg:h-[500px] -mt-[74px] items-center gap-8 lg:gap-32 px-4 md:px-8 lg:px-16 py-8 lg:py-0">
        <h1 className="mt-20 lg:mt-0 text-3xl md:text-4xl lg:text-6xl font-bold text-black text-center lg:text-left">
          Explore Our Products
        </h1>
        <img
          className="h-[150px] md:h-[200px] lg:h-[300px]"
          src={HeroSection}
          alt="Hero Section"
        />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center xl:flex-row justify-start gap-4 lg:gap-8 lg:items-start">
        {/* Mobile & Tablet Filter Overlay */}
        {isFilterOpen && (
          <div className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
              <div className="p-4">
                <FilterSection />
              </div>
            </div>
          </div>
        )}

        {/* PC & Laptop Filtering Section */}
        <div className="hidden xl:block xl:w-80 2xl:w-96 mt-6 xl:mt-12 xl:ml-5 flex-shrink-0">
          <div className="border border-gray-400 rounded-3xl p-6 xl:p-10 sticky top-6">
            <FilterSection />
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="flex-1 py-6 md:py-8 lg:py-12 px-4 xl:px-6 xl:pr-8 flex flex-col items-center">
          {/* Mobile & Tablet Filter Button - Above Product Cards */}
          <div className="xl:hidden mb-6 flex justify-center w-full">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 flex items-center gap-2 border-2 border-emerald-400 hover:border-emerald-300"
            >
              <Filter size={20} />
              Filter Products
            </button>
          </div>

          {/* Product Grid - Centered layout */}
          <div>
            <div>
              {/* Search Bar */}
              <div className="w-full max-w-2xl mb-6 flex justify-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm md:text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl justify-items-center">
              {visibleProducts.length > 0 ? (
                loading ? (
                  <LoadingSpinner />
                ) : (
                  visibleProducts.map((product) => (
                    <div
                      key={product.documentId}
                      className="w-full max-w-sm flex justify-center"
                    >
                      <Link to={`/productpage/${product.documentId}`}>
                        <HomepageProductCard product={product} />
                      </Link>
                    </div>
                  ))
                )
              ) : (
                <p className="col-span-full text-center text-gray-500 text-lg font-medium">
                  No products found.
                </p>
              )}
            </div>

            <div>
              {filteredProducts.length > visibleCount && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
