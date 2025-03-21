import React from 'react';
import HeroSection from 'src/app/home/HeroSection';
import ImpactStatement from 'src/app/home/ImpactStatement';
import ServicesSection from 'src/app/home/ServicesSection';
import ProjectShowcase from 'src/app/home/ProjectShowcase';
import BlogTeaser from 'src/app/home/BlogTeaser';
import FinalCTA from 'src/app/home/FinalCTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ImpactStatement />
      <ServicesSection />
      <ProjectShowcase />
      <BlogTeaser />
      <FinalCTA />
      </>
  );
};

export default Home;



// import React from 'react'; 
// import MainLayout from '../components/layout/MainLayout';

// const Home = () => {
//   return (
//     <MainLayout>
//       <section className="min-h-[70vh] flex flex-col justify-center items-center text-center animate-fade-in">
//         <h1 className="text-6xl font-heading font-bold">AI-Driven Digital Strategy for Sustainable Growth</h1>
//         <p className="mt-4 text-xl max-w-2xl">
//           Helping businesses integrate AI, streamline digital transformation, and implement sustainable strategies for long-term success.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-80">
//           Book a Strategy Call
//         </button>
//       </section>
      
//       <section className="mt-20 text-center animate-fade-in">
//         <h2 className="text-4xl font-heading font-bold">What I Do</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <h3 className="text-2xl font-bold">AI & Digital Transformation</h3>
//             <p className="mt-2">Helping businesses integrate AI to optimise workflows and scale efficiently.</p>
//           </div>
//           <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <h3 className="text-2xl font-bold">Sustainable Business Innovation</h3>
//             <p className="mt-2">Aligning technology with ethical, responsible business practices.</p>
//           </div>
//           <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <h3 className="text-2xl font-bold">Knowledge & Content Strategy</h3>
//             <p className="mt-2">Empowering organisations with structured, AI-driven knowledge management.</p>
//           </div>
//         </div>
//       </section>
      
//       <section className="mt-20 text-center animate-fade-in">
//         <h2 className="text-4xl font-heading font-bold">Thought Leadership</h2>
//         <ul className="mt-6 space-y-4">
//           <li className="text-xl hover:underline"><a href="#">How AI is Changing the Future of Business Strategy</a></li>
//           <li className="text-xl hover:underline"><a href="#">Sustainable Digital Transformation: The Role of AI in Ethical Innovation</a></li>
//           <li className="text-xl hover:underline"><a href="#">The Future of Work: Navigating AI & Automation in Your Industry</a></li>
//         </ul>
//       </section>
//     </MainLayout>
//   );
// };

// export default Home;
