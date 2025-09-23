import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import { AboutUs, WhyUS } from "../../data/data";
import BannerCard from "../../components/ui/bannerCard";
import OurServices from "./OurServieses";
import TestimonialSection from "./TestimonialSection";
import GetintouchSection from "./GetintouchSection";
import ProductCard from "../../components/ProductCard/LandingpageProductCard";
import BestProductSection from "./BestProductSection";

const LandingPage = () => {
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
        <OurServices />
        <BannerCard
          image={WhyUS.image}
          title={WhyUS.title}
          description={WhyUS.description}
          reverse={true}
        />
        <BestProductSection />
        <GetintouchSection />
        <TestimonialSection />
      </div>
    </div>
  );
};

export default LandingPage;
