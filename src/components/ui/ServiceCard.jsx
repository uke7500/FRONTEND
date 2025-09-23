import React from "react";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="border-l flex flex-col gap-4 border-[#797272]  shadow-sm text-center p-6 h-[300px] w-[220px] max-w-xs bg-white m-2 rounded-md">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full text-green-600 text-3xl bg-gray-100 mx-auto flex items-center justify-center">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 flex-1 text-sm">{description}</p>

      {/* Button */}
      <a
        href={link || "#"}
        className="inline-block px-5 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700 transition"
      >
        Read more
      </a>
    </div>
  );
};

export default ServiceCard;
