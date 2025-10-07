import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import { AboutUs, WhyUS } from "../../data/data";
import BannerCard from "../../components/ui/bannerCard";
import OurServices from "./OurServieses";
import TestimonialSection from "./TestimonialSection";
import GetintouchSection from "./GetintouchSection";
import ProductCard from "../../components/ProductCard/LandingpageProductCard";
import BestProductSection from "./BestProductSection";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const { hash } = useLocation();

  const scrollToHash = (hashValue) => {
    if (!hashValue) return;
    const el = document.querySelector(hashValue);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll when page loads with a hash
  useEffect(() => {
    scrollToHash(hash);
  }, [hash]);

  return (
    <div>
      <HeroSection />
      <div className="py-20">
        <FeatureSection />
        <BannerCard
          image={AboutUs.image}
          title={AboutUs.title}
          description={AboutUs.description}
          buttonText={AboutUs.buttonText}
          stats={[
            { icon: "👥", value: "1234", label: "Happy Customers" },
            { icon: "📦", value: "1234", label: "Products Sold" },
          ]}
          reverse={false}
        />
        <div id="service">
          <OurServices />
        </div>
        <BannerCard
          image={WhyUS.image}
          title={WhyUS.title}
          description={WhyUS.description}
          reverse={true}
        />
        <BestProductSection />
        <GetintouchSection />
        <div id="review">
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
