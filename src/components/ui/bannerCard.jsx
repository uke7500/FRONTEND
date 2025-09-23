import React from "react";
import { Link } from "react-router-dom";

const BannerCard = ({
  image,
  title,
  description,
  stats,
  buttonText,
  reverse = false,
}) => {
  return (
    <section className="w-full px-4 py-8 sm:px-8 lg:px-16">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-start bg-white text-black rounded-xl shadow-lg overflow-hidden transition-all duration-300`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 max-h-[400px] aspect-video lg:aspect-auto">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            {title}
          </h2>
          <div className="w-16 h-1 bg-green-600" />

          <p className="text-base sm:text-lg text-gray-700 whitespace-pre-line leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          {stats && (
            <div className="flex flex-wrap gap-6 mt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-2xl sm:text-3xl">{stat.icon}</span>
                  <div>
                    <p className="text-lg sm:text-xl font-bold">{stat.value}</p>
                    <p className="text-green-600 text-sm sm:text-base font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          {buttonText && (
            <Link to="/home">
              <button className="mt-4 sm:mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 sm:text-lg rounded-full transition duration-300">
                {buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
