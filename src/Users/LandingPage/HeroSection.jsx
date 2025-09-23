import React from "react";
// import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import landingpage_image from "../../assets/landingpage_image.png";


const HeroSection = () => {
  // const user = useSelector((store)=>store.store.user)
  return (
    <section
      className="relative bg-black text-white top-0 h-[120vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${landingpage_image})`, 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Next-Level Security,<br /> Anytime, Anywhere
        </h1>
        <p className="text-lg mb-6">
          Cutting-edge CCTV solutions for ultimate peace of mind
        </p>
        <div className="flex justify-center gap-4">
         <Link
            to="/home"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
          >
            Shop Now
          </Link>
          <Link
            to="/products"
            className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-2 rounded transition"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
