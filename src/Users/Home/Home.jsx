import React, { useEffect, useMemo, useRef, useState } from "react";
import HomepageProductCard from "../../components/ProductCard/HomepageProductCard";
import { useProducts } from "../../Hooks/Product";
import { SlidersHorizontal, X, Filter } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";
import Hero1 from "../../assets/HeroSection.png";
import Hero2 from "../../assets/HeroSection1.png";
import Hero3 from "../../assets/HeroSection2.png";
import { Link } from "react-router-dom";
import useTags from "../../Hooks/useTags";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const Home = () => {
  const [selectedCamera, setSelectedCamera] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPage, setSelectedPage] = useState(5);
  const [priceRange, setPriceRange] = useState([0, 1000]); // [min, max]
  const [selectedStock, setSelectedStock] = useState("Available in Stock");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [tags, setTags] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Hero1, Hero2, Hero3];

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const companies = ["DAHUA", "HIK VISION", "EZVIZ"]; // fixed company names

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

  const handleClearCompany = () => {
    setSelectedCompany(null);
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  // Inside your component:
  const scrollRef = useRef(null);
  const scrollPosition = useRef(0);

  // Save scroll position before state updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollPosition.current;
    }
  }, [selectedCamera]); // Runs after selectedCamera changes

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollPosition.current = scrollRef.current.scrollTop;
    }
  };

  const FilterSection = useMemo(() => (
    <div className="space-y-6 md:space-y-8">
      {/* Filter Header */}
      <div className="flex flex-col justify-between items-start">
        <h1 className="text-lg md:text-xl font-bold mb-3 text-white">
          Categories
        </h1>
        <div className="space-y-3 md:space-y-4">
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => handleCompanySelect(company)}
              className={`w-full text-black text-left px-4 py-2 rounded-lg font-medium ${
                selectedCompany === company
                  ? "bg-emerald-500 text-black"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {company}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={handleClearCompany}
            className="bg-emerald-500 px-6 text-lg py-1 rounded-lg mt-4 cursor-pointer hover:bg-emerald-600"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Camera Type Filter */}
      <div>
        <h1 className="text-lg md:text-xl font-bold mb-3 text-white">
          Sub Categories
        </h1>

        <div className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 shadow-lg">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="space-y-3 md:space-y-4 h-50 overflow-y-scroll overscroll-behavior-contain"
          >
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
  ));

  const filteredProducts = products.filter((product) => {
    const name = product?.name?.toLowerCase() || "";
    const description = product?.description?.toLowerCase() || "";
    const model_no = product?.model_no?.toUpperCase() || "";
    const query = searchQuery.toLowerCase();
    const price = product?.price || 0;

    // 1. Search filter
    const matchesSearch =
      name.includes(query) ||
      description.includes(query) ||
      model_no.includes(query.toUpperCase());

    // 2. Tag filter (AND condition: product must have all selected tags)
    const matchesTags =
      selectedCamera.length === 0 ||
      selectedCamera.every((selectedTag) =>
        product.tags.some((tag) => tag.name === selectedTag)
      );

    // 3. Price filter
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    // 4. Company filter
    const matchesCompany = selectedCompany
      ? product.brand === selectedCompany
      : true;

    const handleSelectedStockOption = () => {
      if (selectedStock === "On sale") {
        return;
      } else if (selectedStock === "Out of Stock") {
        return product.stock === 0;
      } else if (selectedStock === "Available in Stock") {
        return product.stock > 0;
      } else {
        return true; // No stock filter applied
      }
    };

    // 5. Stock filter
    const matchesStock = handleSelectedStockOption();

    // selectedStock === "Available in Stock" ? product.stock > 0 : true;

    return (
      matchesSearch &&
      matchesTags &&
      matchesPrice &&
      matchesCompany &&
      matchesStock
    );
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  if (loading) return <LoadingSpinner />;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="flex justify-center flex-col lg:flex-row bg-gradient-to-r from-[#FFFFFF] to-blue-100 min-h-[300px] md:min-h-[400px] lg:h-[500px] -mt-[74px] items-center gap-8 lg:gap-32 px-4 md:px-8 lg:px-16 py-8 lg:py-0 transition-all duration-500">
        {/* Text Section */}
        <h1 className="mt-20 lg:mt-0 text-3xl md:text-4xl lg:text-6xl font-bold text-black text-center lg:text-left">
          Explore Our Products
        </h1>

        {/* Image Slideshow Section */}
        <div className="relative h-[180px] md:h-[200px] lg:h-[400px] w-[180px] md:w-[200px] lg:w-[400px] ">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain  transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center xl:flex-row justify-start gap-4 lg:gap-8 lg:items-start">
        {/* Mobile & Tablet Filter Overlay */}
        {isFilterOpen && (
          <div className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 flex items-center gap-2 border-2 border-emerald-400 m-5"
              >
                Close
              </button>
              <div className="p-4">{FilterSection}</div>
            </div>
          </div>
        )}

        {/* PC & Laptop Filtering Section */}
        {/* Inside your render */}
        <div className="hidden xl:block xl:w-80 2xl:w-96 mt-6 xl:mt-12 xl:ml-5 flex-shrink-0">
          <div className="border border-gray-400 rounded-3xl p-6 xl:p-10 sticky top-6">
            {FilterSection}
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
