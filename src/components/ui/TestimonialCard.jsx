import { Star } from "lucide-react";

function TestimonialCard({ profileImage, name, rating, testimonial }) {

    const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${
          index < rating
            ? "fill-orange-400 text-orange-400"
            : "fill-gray-400 text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="bg-black p-8 rounded-3xl border-2 border-green-400 max-w-md mx-auto">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-600">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Customer Name */}
      <h3 className="text-green-400 text-2xl font-semibold text-center mb-6">
        {name}
      </h3>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-6">
        {renderStars(rating)}
      </div>

      {/* Testimonial Text */}
      <p className="text-white text-center leading-relaxed">{testimonial}</p>
    </div>
  )
}

export default TestimonialCard
