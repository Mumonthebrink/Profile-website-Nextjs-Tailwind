"use client";  // Ensures this file is treated as a client-side component

import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#2A3439] text-white">
      {/* My Approach Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-10">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Clarity",
            "Innovation",
            "Organisation & Efficiency",
            "Close Collaboration",
            "Curiosity-Driven Innovation"
          ].map((principle, idx) => (
            <div key={idx} className="p-6 bg-[#008080] rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">{principle}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Core Services Section */}
      <div className="relative py-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Core Services</h2>
        <div className="relative flex flex-col items-start justify-center space-y-4 md:ml-10">
          {[
            { title: "Digital Transformation Consulting", description: "Empowering businesses to integrate AI and streamline digital processes for scalable growth.", link: "/services/digital-transformation" },
            { title: "Sustainability & Responsible Growth", description: "Aligning digital strategy with responsible and sustainable business practices.", link: "/services/sustainability" },
            { title: "Knowledge & Content Strategy", description: "Helping organizations manage, structure, and communicate knowledge effectively in an AI-driven world.", link: "/services/knowledge-strategy" }
          ].map((service, idx) => (
            <article
              key={idx}
              className="relative w-64 mx-auto mb-4 bg-[#008080] rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:h-auto h-16 group"
              style={{
                transform: `translateX(${idx * 10}px) rotate(${idx * 5 - 5}deg)`,
              }}
            >
              <div className="px-4 py-2 cursor-pointer">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm mt-2 px-4">
                  {service.description}
                </p>
                <a href={service.link} className="text-sm text-[#00FFFF] underline block my-4">
                  {service.title.includes("Digital") ? "Learn More →" : service.title.includes("Sustainability") ? "Discover How →" : "Explore Solutions →"}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/contact"
          className="mt-12 inline-block bg-[#00FFFF] text-[#2A3439] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#98F5F7] transition-all"
        >
          Schedule Your Free Strategy Call
        </a>
      </div>
    </section>
  );
};

export default Services;
