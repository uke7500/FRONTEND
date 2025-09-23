import TestimonialCard from "../../components/ui/TestimonialCard";
import { Testimonials } from "../../data/data";

function TestimonialSection() {
  return (
    <section>
      <div className="heading mb-8 mt-10">
        <h1 className="text-center text-4xl font-bold text-[#4CAF50] pb-4">
          Testimonials
        </h1>
        <h1 className="text-center text-2xl">
          What our Customers say about us!
        </h1>
      </div>
      <div className="flex flex-col gap-8 mx-8 lg:flex-row md:flex-col md:gap-8">
        {Testimonials.map((res) => (
          <TestimonialCard
            key={res.id}
            profileImage={res.profileImage}
            name={res.name}
            rating={res.rating}
            testimonial={res.testimonial}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
