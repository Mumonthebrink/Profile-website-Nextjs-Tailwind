import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="text-red-500 text-3xl font-bold">Tailwind Test</div>

      <div className="text-red-500 text-3xl font-bold">Tailwind Test</div>
      <div className="bg-blue-500 text-white p-4">This is a test</div>
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold animate-fade-in">Welcome to Digital Transformation</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Helping businesses integrate AI with sustainable digital transformation.
        </p>
      </section>
    </MainLayout>
  );
};

export default Home;
