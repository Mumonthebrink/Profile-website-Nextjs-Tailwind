import React from 'react';

const projects = [
  { title: "Digital Strategy Success", details: "A roadmap that boosted efficiency by 30%." },
  { title: "AI in Action", details: "AI-driven solutions increased engagement by 60%." },
  { title: "Sustainable Innovation", details: "Strategic clarity led to measurable market growth." }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-16 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-heading font-bold">Featured Projects & Success Stories</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 hidden hover:block">{project.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
