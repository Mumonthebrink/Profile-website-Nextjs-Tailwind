import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-heading font-bold">Key Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Digital Transformation Consulting", description: "Get clear, actionable digital strategies tailored to your business." },
          { title: "Practical AI Implementation", description: "Discover AI solutions that enhance efficiency and customer engagement." },
          { title: "Sustainability & Responsible Growth", description: "Strategic guidance for integrating sustainability into business practices." },
        ].map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md bg-light-bg dark:bg-dark-bg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="mt-2 hidden hover:block">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
