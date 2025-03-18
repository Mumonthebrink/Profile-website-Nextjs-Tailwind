import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat animate-fade-in"
      style={{ backgroundImage: "url('/assets/images/sustainabletechmycelium.webp')" }}>
      <h1 className="text-6xl font-heading font-bold text-white">Simplify your digital transformation</h1>
      <p className="mt-4 text-xl text-gray-200 max-w-2xl">
      streamline operations, harness practical AI solutions and grow sustainably with clear strategies and impactful innovation.
      </p>
      <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-80">
        Schedule Your Free Strategy Call →
      </button>
    </section>
  );
};

export default HeroSection;
