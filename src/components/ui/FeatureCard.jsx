import React from "react";

const FeatureCard = ({ icon, number, title, description }) => {
  return (
    <div className="border h-[290px] w-[290px] border-green-500 text-black bg-white rounded-xl p-6 max-w-sm shadow-sm text-center md:text-left">
      <div className="flex justify-between items-start mb-4">
        <div className="text-green-600 text-6xl">{icon}</div>
        <div className="text-black text-5xl font-extrabold">{number}</div>
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <div className="border-t border-green-500 w-12 mb-2 mx-auto md:mx-0"></div>

      <p className="text-gray-700 text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
