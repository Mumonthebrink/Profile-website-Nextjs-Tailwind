import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gunmetal text-secondary py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-4xl md:text-4xl font-bold text-secondary italic">Digital Strategy</h1> {/* More general title */}
      <div className="flex space-x-12 md:space-x-6 sm:flex sm:space-y-4"> {/* Responsive adjustments */}
        <Link href="/" aria-label="Go to Home page" className="hover:text-accent transition-colors duration-200">Home</Link>
        <Link href="/services" aria-label="Go to Services page" className="hover:text-accent transition-colors duration-200">Services</Link>
        <Link href="/projects" aria-label="Go to Projects page" className="hover:text-accent transition-colors duration-200">Projects</Link>
        <Link href="/insights" aria-label="Go to Insights page" className="hover:text-accent transition-colors duration-200">Insights</Link>
        <Link href="/about" aria-label="Go to About page" className="hover:text-accent transition-colors duration-200">About</Link>
        <Link href="/contact" aria-label="Go to Contact page" className="hover:text-accent transition-colors duration-200">Contact</Link> {/* Consistent hover style */}
      </div>
    </nav>
  );
};

export default Navbar;
