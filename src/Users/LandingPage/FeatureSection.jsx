import React from 'react';
import FeatureCard from '../../components/ui/FeatureCard';
import { features } from '../../data/data'; // ✅ Properly import the array

const FeatureSection = () => {
  return (
    <section className="px-4  py-12 max-w-7xl m-auto">
      <div className="flex flex-row flex-wrap gap-10 justify-center ">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            number={feature.number}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
