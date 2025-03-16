import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-primary text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Monika Roozen</h1>
      <div className="flex space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/expertise" className="hover:underline">Expertise</Link>
        <Link href="/thought-leadership" className="hover:underline">Thought Leadership</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
