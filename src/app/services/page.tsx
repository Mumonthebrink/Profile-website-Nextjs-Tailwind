import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import "../globals.css";

const Services: React.FC = () => {
  return (
    <MainLayout>
      <section className="p-8">
        <h2 className="text-3xl font-bold">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 border rounded-lg shadow-md hover:bg-accent-blue hover:text-white transition-all">
            <h3 className="text-xl font-semibold">Digital Transformation Consulting</h3>
            <p className="mt-2 hidden hover:block">Helping organizations build a future-proof digital strategy.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:bg-accent-green hover:text-white transition-all">
            <h3 className="text-xl font-semibold">AI Implementation Advisory</h3>
            <p className="mt-2 hidden hover:block">Guiding companies in implementing AI-driven workflows.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
