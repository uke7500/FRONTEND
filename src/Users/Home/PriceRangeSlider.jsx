import { useState, useRef, useEffect } from "react";

const PriceRangeSlider = ({ priceRange, onChange }) => {
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);
  const minValue = 0;
  const maxValue = 1000;

  const [localRange, setLocalRange] = useState(priceRange);
  const [minPrice, maxPrice] = localRange;

  // debounce onChange
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(localRange);
    }, 500);
    return () => clearTimeout(timeout);
  }, [localRange, onChange]);

  const generateFixedBars = () => {
    const bars = [];
    const totalBars = 20;
    for (let i = 0; i < totalBars; i++) {
      const value = (i / (totalBars - 1)) * maxValue;
      const height = 30 + (i / (totalBars - 1)) * 90;
      bars.push({ height, value });
    }
    return bars;
  };

  const [bars] = useState(generateFixedBars());

  const isBarInRange = (barValue) =>
    barValue >= minPrice && barValue <= maxPrice;

  const handleMouseDown = (type) => setIsDragging(type);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = sliderRef.current.getBoundingClientRect();
      let percent = ((e.clientX - rect.left) / rect.width) * 100;

      // Clamp between 0–100
      percent = Math.max(0, Math.min(100, percent));

      const newValue = Math.round(
        minValue + (percent / 100) * (maxValue - minValue)
      );

      if (isDragging === "min") {
        setLocalRange([Math.min(newValue, maxPrice - 10), maxPrice]);
      } else if (isDragging === "max") {
        setLocalRange([minPrice, Math.max(newValue, minPrice + 10)]);
      }
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(null);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleInputChange = (type, value) => {
    const numValue = parseInt(value) || 0;
    if (type === "min") {
      setLocalRange([
        Math.max(minValue, Math.min(numValue, maxPrice - 10)),
        maxPrice,
      ]);
    } else {
      setLocalRange([
        minPrice,
        Math.min(maxValue, Math.max(numValue, minPrice + 10)),
      ]);
    }
  };

  const minPercentage = (minPrice / maxValue) * 100;
  const maxPercentage = (maxPrice / maxValue) * 100;

  // Clamp handle positions visually so they don't overflow
  const clampPosition = (percent) => {
    if (percent <= 0) return "0%";
    if (percent >= 100) return "100%";
    return `${percent}%`;
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-bold text-white">Price</h2>
      </div>

      <div className="bg-black backdrop-blur-sm rounded-2xl p-4 shadow-lg">
        {/* Bars */}
        <div className="flex items-end justify-between h-32 mb-4 px-1">
          {bars.map((bar, index) => (
            <div
              key={index}
              className={`w-3 rounded-t-sm transition-colors duration-300 ${
                isBarInRange(bar.value) ? "bg-emerald-500" : "bg-gray-200"
              }`}
              style={{ height: `${bar.height}px` }}
            />
          ))}
        </div>

        {/* Slider */}
        <div className="relative mb-8">
          <div
            ref={sliderRef}
            className="relative h-2 bg-gray-300 rounded-full cursor-pointer"
          >
            {/* Active Range */}
            <div
              className="absolute h-2 bg-emerald-500 rounded-full"
              style={{
                left: `${minPercentage}%`,
                width: `${maxPercentage - minPercentage}%`,
              }}
            />

            {/* Min Handle */}
            <div
              className="absolute w-6 h-6 bg-white rounded-full border-4 border-emerald-500 cursor-grab active:cursor-grabbing shadow-lg"
              style={{
                left: clampPosition(minPercentage),
                transform: "translateY(-25%)",
                top: "50%",
              }}
              onMouseDown={() => handleMouseDown("min")}
            />

            {/* Max Handle */}
            <div
              className="absolute w-6 h-6 bg-white rounded-full border-4 border-emerald-500 cursor-grab active:cursor-grabbing shadow-lg"
              style={{
                left: clampPosition(maxPercentage),
                transform: "translateY(-25%) translateX(-100%)",
                top: "50%",
              }}
              onMouseDown={() => handleMouseDown("max")}
            />
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              From
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium">
                £
              </span>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => handleInputChange("min", e.target.value)}
                className="w-full bg-white rounded-xl px-8 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min={minValue}
                max={maxValue}
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              To
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium">
                £
              </span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => handleInputChange("max", e.target.value)}
                className="w-full bg-white rounded-xl px-8 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                min={minValue}
                max={maxValue}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
