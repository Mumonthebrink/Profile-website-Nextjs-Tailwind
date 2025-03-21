import React from "react";
import Link from "next/link"; // Use Next.js Link for routing

const HeroSection: React.FC = () => {
  return (
    <section className="flex-start items-center justify-center min-h-screen bg-[#2A3439] text-white py-10 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Side Content */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-base md:text-4xl font-bold text-[#FFFFFF] mb-4">
            Simplify Your Digital Transformation, Harness Practical AI and Grow Sustainably
          </h2>
          <h2 className="text-xl md:text-xl font-body text-[#F8F8F8] mb-6">
            Clear strategies, meaningful innovation, and impactful results for
            growing businesses.
            <br />
            <br />
          </h2>
          <p className="text-lg text-[#E2E2E2] mb-6"></p>
          <h1 className="text-4xl font-bold text-[#FF0066] mb-4">
            Monika Roozen
          </h1>
          <p className="text-xl font-body text-[#F8F8F8] mb-6">
            I help businesses navigate complex challenges clearly and confidently—whether that means streamlining your digital processes,
            adopting practical AI solutions, or building responsible, sustainable practices into your growth strategy.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <Link href="/about" className="relative group"> {/* Wrap image in Link for routing */}
            {/* Default Image */}
            <img
              src="/assets/images/Monika Roozen.JPG" // path to the image
              alt="Monika Roozen"
              className="w-70 h-75 mask-fade transition-all duration-300 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <img
              src="/assets/images/data-driven .webp" // Hover image path
              alt="Monika Roozen Hover"
              className="absolute inset-0 w-75 h-75 mask-fade object-cover shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>

      {/* Centered Button with Pink Shadow */}
      <div className="absolute bottom-24 w-full flex justify-center">
        <a
          href="#contact"
          className="inline-block bg-[#2A3439] text-[#ffffff] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#DC2556] hover:text-white transition-all shadow-sm shadow-[#FF0066]">
          Schedule a Free Strategy Call →
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
