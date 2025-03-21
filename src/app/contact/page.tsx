"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Github, Globe } from "lucide-react"; // Import icons from Lucide

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", inquiryType: "General Inquiry" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Integrate with backend or email API)");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white py-16 px-6">
      {/* Faded Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/human-AI interaction.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20 mask-fade"
        />
      </div>
      
      <div className="relative max-w-3xl w-full bg-opacity-95 p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6">Let's Connect</h2>
        <p className="text-center text-lg mb-6">Interested in AI consulting, speaking, or collaboration? Reach out below!</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-2 border-secondary  text-white focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-2 border-secondary text-white focus:ring-2 focus:ring-accent"
          />
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-secondary text-white focus:ring-2 focus:ring-accent"
          >
            <option>General Inquiry</option>
            <option>Consulting Request</option>
            <option>Speaking Engagement</option>
            <option>Collaboration Opportunity</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-lg border-2 border-secondary text-white focus:ring-2 focus:ring-accent"
          />
          <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg hover:bg-secondary transition">
            Send Message
          </button>
        </form>
        
{/* Social Links */}
<div className="mt-8 text-center">
  <h3 className="text-lg font-semibold">Connect with Me</h3>
  <div className="flex justify-center space-x-6 mt-3">
    <a href="https://linkedin.com/in/monikaroozen" target="_blank" className="flex items-center gap-2 text-secondary hover:text-accent transition-all">
      <Linkedin size={20} /> LinkedIn
    </a>
    <a href="https://github.com/monikaroozen" target="_blank" className="flex items-center gap-2 text-secondary hover:text-accent transition-all">
      <Github size={20} /> GitHub
    </a>
    <a href="/portfolio" className="flex items-center gap-2 text-secondary hover:text-accent transition-all">
      <Globe size={20} /> Portfolio
    </a>
  </div>
</div>
        
        {/* Newsletter Signup Placeholder */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p className="text-sm">Coming Soon: Get my AI insights straight to your inbox!</p>
          <button className="mt-3 bg-secondary text-gunmetal py-2 px-6 rounded-lg text-sm font-semibold hover:bg-[#98F5F7] transition-all">
            Join Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;