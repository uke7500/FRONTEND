import React from "react";

const Stepper = ({ activeStep }) => {
  const steps = [
    { name: "My Cart", color: "bg-red-600 text-white" },
    { name: "Delivery", color: "bg-orange-600 text-white" },
    { name: "Payment", color: "bg-yellow-600 text-white" },
    { name: "Confirmation", color: "bg-green-600 text-white" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded-full text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-300
            ${
              activeStep === step.name
                ? step.color
                : "text-gray-400 hover:text-gray-700"
            }`}
        >
          {step.name}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
