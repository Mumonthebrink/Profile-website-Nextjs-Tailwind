import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-16 text-center bg-[#2A3439] overflow-hidden" id="services">
      {/* Main Container for Flex Layout */}
      <div className="relative z-20 flex flex-row items-center justify-between w-full h-full">
        {/* Content (Service Cards) - Left Side (1/3) */}
        <div className="w-full md:w-1/3 flex flex-col items-start justify-start space-y-6 px-8 ml-8">
          {/* Header */}
          <div className="text-white w-full mb-8 md:mb-0">
            <h2 className="text-4xl font-heading font-bold">Services</h2>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col items-start space-y-6 w-full">
            {[
              {
                title: "Digital Transformation Consulting",
                description: "Empowering businesses to integrate AI and streamline digital processes for scalable growth.",
                link: "#services"
              },
              {
                title: "Sustainability & Responsible Growth",
                description: "Aligning digital strategy with responsible and sustainable business practices.",
                link: "#services"
              },
              {
                title: "Knowledge & Content Strategy",
                description: "Helping organizations manage, structure, and communicate knowledge effectively in an AI-driven world.",
                link: "#services"
              }
            ].map((service, index) => (
              <article
                key={index}
                className="relative max-w-sm transform duration-500 group"
                style={{
                  transform: `rotate(${index * -5}deg)`, // Slight arc effect
                  zIndex: 20,
                  marginBottom: '30px',
                  transition: 'all 0.3s ease', // Add smooth transition for hover effects
                }}
              >
                <div className="bg-[#008080] min-h-[90px] px-6 py-6 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300 group hover:min-h-[150px] hover:scale-110">
                  <h1 className="text-white text-lg mb-4 transform translate-y-12 group-hover:translate-y-0 duration-300">
                    {service.title}
                  </h1>
                  <div className="w-16 h-2 bg-accent rounded-full mb-5 transform translate-y-12 group-hover:translate-y-0 duration-300" />
                  <p className="opacity-0 text-white text-sm group-hover:opacity-80 transform duration-500">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-block bg-[#00FFFF] text-[#2A3439] py-2 px-6 rounded-lg text-sm font-semibold hover:bg-[#98F5F7] transition-all mt-6"
                  >
                    {service.title.includes("Digital")
                      ? "Learn More →"
                      : service.title.includes("Sustainability")
                      ? "Discover How →"
                      : "Explore Solutions →"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Background Image and Video - Right Side (2/3) */}
        <div className="w-full md:w-2/3 relative flex justify-end">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{
            backgroundImage: './assets/images/NeuroNetworks.webp', // Correct background image path
          }} />

          <video
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
            src="./assets/images/NeuroNetworks.mp4"  // Correct video file path
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
