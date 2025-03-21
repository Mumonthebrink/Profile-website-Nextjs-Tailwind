// to do: call to action buttons don't all show up, box sizing, box transparentcy overridden somewhere may globals?


"use client";

import React from "react";
import Image from "next/image";
import { Code, Globe, Users, BarChart3, Gamepad2, Utensils, Leaf, Plane, Archive, PhoneCall, TrendingUp, Building2 } from "lucide-react";

const projects = [
  {
    icon: <Gamepad2 size={100} className="text-primary" />, 
    title: "Interactive Web Game: Bringing Engagement to Life",
    description: "Developed an interactive, responsive web game showcasing intuitive design and agile software practices to enhance audience engagement and retention.",
    link: "https://github.com/monikaroozen",
  },
  {
    icon: <Utensils size={100} className="text-primary" />, 
    title: "Simplifying Operations through Restaurant Tech",
    description: "Created an intuitive web application using React and Styled Components, improving real-time order management and operational efficiency.",
    link: "https://github.com/monikaroozen",
  },
  {
    icon: <Globe size={100} className="text-primary" />, 
    title: "Inspireroo: Amplifying Sustainable Travel",
    description: "Leveraged digital strategy and storytelling to boost audience engagement by over 60%, reinforcing sustainable travel narratives.",
  },
  {
    icon: <Users size={100} className="text-primary" />, 
    title: "Mum on the Brink: Building Community & Engagement",
    description: "Grew a digital community through effective content marketing, brand partnerships, and audience engagement strategies.",
  },
  {
    icon: <Leaf size={100} className="text-primary" />, 
    title: "Sustainability Meets Strategic Innovation in Textiles",
    description: "Helped a smart textile startup reposition itself as an innovation leader, attracting investments and strategic partnerships.",
  },
  {
    icon: <Plane size={100} className="text-primary" />, 
    title: "Turning Market Research into Actionable Strategies",
    description: "Conducted detailed market research for a global travel platform, driving confident business expansion decisions.",
  },
  {
    icon: <Archive size={100} className="text-primary" />, 
    title: "Knowledge Management: Boosting Efficiency in Defence",
    description: "Implemented streamlined knowledge-sharing systems, achieving a 10% efficiency boost for a major defence consultancy.",
  },
  {
    icon: <PhoneCall size={100} className="text-primary" />, 
    title: "Unified Communications for Enhanced Customer Support",
    description: "Integrated multiple customer support systems post-merger for a global telecom provider, enhancing service quality and efficiency.",
  },
  {
    icon: <TrendingUp size={100} className="text-primary" />, 
    title: "Growing a Niche Brand through Targeted Digital Strategy",
    description: "Developed a specialized digital marketing strategy, tripling sales and significantly increasing brand awareness.",
  },
  {
    icon: <Building2 size={100} className="text-primary" />, 
    title: "Business Development: High Occupancy Through Strategic Positioning",
    description: "Established a successful accommodation business, achieving over 80% occupancy through strategic branding and marketing.",
  }
];

const Projects: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white py-16 px-6">
      {/* Faded Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/AI-driven project management.webp" // Updated background image reference
          alt="AI-driven Project Management"
          layout="fill"
          objectFit="cover"
          className="opacity-30 mask-fade"
        />
      </div>
      
      <div className="relative max-w-6xl w-full bg-[#2A3439] bg-opacity-95 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Projects & Success Stories</h2>
        <p className="text-center text-lg mb-6">Every challenge presents an opportunity—here’s how I’ve turned complexity into clarity, innovation into action, and ideas into measurable results.</p>
        
        {/* Grid Layout for Expanding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative bg-[#008080] bg-opacity-25 p-6 rounded-lg shadow-md transition-all duration-700 ease-in-out hover:bg-opacity-100 hover:scale-110 group overflow-hidden">
              <div className="flex flex-col items-center text-center">
                {project.icon}
                <h3 className="text-xl font-bold text-white mt-3">{project.title}</h3>
              </div>
              <p className="mt-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {project.description}
              </p>
              {project.link && (
                <a href={project.link} target="_blank" className="mt-3 inline-block text-secondary hover:text-accent underline opacity-0 group-hover:opacity-100">
                  Explore →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

