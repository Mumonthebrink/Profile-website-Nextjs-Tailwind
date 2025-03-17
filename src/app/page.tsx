import React from 'react';
import MainLayout from '@/components/ui/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <section className="h-screen flex flex-col justify-center items-center text-center animate-fade-in">
        <h1 className="text-6xl font-heading font-bold">AI-Driven Digital Strategy for Sustainable Growth</h1>
        <p className="mt-4 text-xl max-w-2xl">
          Helping businesses integrate AI, streamline digital transformation, and implement sustainable strategies for long-term success.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:opacity-80">
          Book a Strategy Call
        </button>
      </section>
      
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-heading font-bold">What I Do</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold">AI & Digital Transformation</h3>
            <p className="mt-2">Helping businesses integrate AI to optimise workflows and scale efficiently.</p>
          </div>
          <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold">Sustainable Business Innovation</h3>
            <p className="mt-2">Aligning technology with ethical, responsible business practices.</p>
          </div>
          <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold">Knowledge & Content Strategy</h3>
            <p className="mt-2">Empowering organisations with structured, AI-driven knowledge management.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-heading font-bold">Thought Leadership</h2>
        <ul className="mt-6 space-y-4">
          <li className="text-xl hover:underline"><a href="#">How AI is Changing the Future of Business Strategy</a></li>
          <li className="text-xl hover:underline"><a href="#">Sustainable Digital Transformation: The Role of AI in Ethical Innovation</a></li>
          <li className="text-xl hover:underline"><a href="#">The Future of Work: Navigating AI & Automation in Your Industry</a></li>
        </ul>
      </section>
    </MainLayout>
  );
};

export default Home;
