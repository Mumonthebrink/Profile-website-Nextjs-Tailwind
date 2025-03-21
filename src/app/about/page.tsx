"use client";  // Enables use of hooks in Next.js 13+ app directory

import React, { useState } from "react";

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 px-6 bg-white text-[#2A3439]">
      <div className="max-w-4xl mx-auto text-center">
        {/* About Me Heading */}
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-8">
          Hi, I’m Monika Roozen—a digital storyteller, AI-driven software developer, and 
          experienced business consultant dedicated to helping SMEs thrive sustainably in an 
          increasingly digital world. With over 20 years of experience in business strategy, 
          content marketing, and digital transformation, I specialise in turning complex 
          challenges into clear, actionable solutions.
        </p>
        <p className="text-lg mb-8">
          My journey has included founding influential digital platforms like <b>Inspireroo 
          Magazine</b> and <b>Mum on the Brink</b>, consulting with global brands, and continuously 
          enhancing my expertise through advanced training in AI and full-stack software 
          development.
        </p>

        {/* Skills Representation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "Digital Storytelling",
            "AI & Software Development",
            "Business Strategy",
            "Knowledge Management",
            "Sustainability Consulting"
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-[#008080] text-white py-2 px-4 rounded-full text-sm shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Career History - Expandable Section */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mb-4 text-[#00FFFF] underline cursor-pointer"
        >
          {expanded ? "[-] Collapse Career History" : "[+] View Detailed Career History"}
        </button>

        {expanded && (
          <div className="text-left border-l-4 border-[#008080] pl-4">
            {[
              { date: "2023-Present", role: "AI & Full-Stack Development Training", details: "Rigorous professional training in modern AI techniques and software development." },
              { date: "2015-2023", role: "Founder & Editor, Inspireroo & Mum on the Brink", details: "Developed and managed successful digital content platforms focusing on sustainability and lifestyle." },
              { date: "2010-2015", role: "Digital Strategy Consultant", details: "Collaborated with global brands to deliver strategic content marketing and business transformation." }
            ].map((item, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="font-semibold text-[#2A3439]">{item.date}: {item.role}</h4>
                <p className="text-sm text-[#555]">{item.details}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contact CTA Button */}
        <a
          href="/contact"
          className="mt-8 inline-block bg-[#008080] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#00FFFF] transition-all"
        >
          Let's Collaborate!
        </a>
      </div>
    </section>
  );
};

export default About;


// import React, { useState } from 'react';

// const About: React.FC = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <section className="py-16 px-6 bg-[#FFFFFF] text-[#2A3439]">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">About Me</h2>
//         <p className="text-lg mb-8">
//           Hi, I’m Monika Roozen—a digital storyteller, AI-driven software developer, and experienced business consultant dedicated to helping SMEs thrive sustainably in an increasingly digital world. With over 20 years of diverse experience in business strategy, content marketing, and digital transformation, I specialise in turning complex challenges into clear, actionable solutions.
//           My journey has included founding influential digital platforms like Inspireroo Magazine and Mum on the Brink, consulting with global brands, and continuously enhancing my expertise through advanced training in AI and full-stack software development.
//         </p>

//         {/* Skills Graphical Representation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {["Digital Storytelling", "AI & Software Development", "Business Strategy", "Knowledge Management", "Sustainability Consulting"].map(skill => (
//             <span key={skill} className="bg-[#008080] text-white py-2 px-4 rounded-full text-sm shadow">
//               {skill}
//             </span>
//           ))}
//         </div>

//         {/* Interactive Career History Timeline */}
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="mb-4 text-[#00FFFF] underline cursor-pointer"
//         >
//           {expanded ? "[-] Collapse Career History" : "[+] View Detailed Career History"}
//         </button>

//         {expanded && (
//           <div className="text-left border-l-4 border-[#008080] pl-4">
//             {[ // Example Timeline Entries
//               { date: "2023-Present", role: "AI & Full-Stack Development Training", details: "Rigorous professional training in modern AI techniques and software development." },
//               { date: "2015-2023", role: "Founder & Editor, Inspireroo & Mum on the Brink", details: "Developed and managed successful digital content platforms focusing on sustainability and lifestyle." },
//               { date: "2010-2015", role: "Digital Strategy Consultant", details: "Collaborated with global brands to deliver strategic content marketing and business transformation." }
//             ].map((item, idx) => (
//               <div key={idx} className="mb-6">
//                 <h4 className="font-semibold text-[#2A3439]">{item.date}: {item.role}</h4>
//                 <p className="text-sm text-[#555]">{item.details}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         <a
//           href="/contact"
//           className="mt-8 inline-block bg-[#008080] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#00FFFF] transition-all"
//         >
//           Let's Collaborate!
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About;


// // import React, { useState } from 'react';

// // const AboutMeSection: React.FC = () => {
// //   const [expanded, setExpanded] = useState(false);

// //   return (
// //     <section className="py-16 px-6 bg-[#FFFFFF] text-[#2A3439]">
// //       <div className="max-w-4xl mx-auto text-center">
// //         <h2 className="text-4xl font-bold mb-6">About Me</h2>
// //         <p className="text-lg mb-8">
// //           Hi, I’m Monika Roozen—a digital storyteller, AI-driven software developer, and experienced business consultant dedicated to helping SMEs thrive sustainably in an increasingly digital world. With over 20 years of diverse experience in business strategy, content marketing, and digital transformation, I specialise in turning complex challenges into clear, actionable solutions.
// //           My journey has included founding influential digital platforms like Inspireroo Magazine and Mum on the Brink, consulting with global brands, and continuously enhancing my expertise through advanced training in AI and full-stack software development.
// //         </p>

// //         {/* Skills Graphical Representation */}
// //         <div className="flex flex-wrap justify-center gap-4 mb-12">
// //           {["Digital Storytelling", "AI & Software Development", "Business Strategy", "Knowledge Management", "Sustainability Consulting"].map(skill => (
// //             <span key={skill} className="bg-[#008080] text-white py-2 px-4 rounded-full text-sm shadow">
// //               {skill}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Interactive Career History Timeline */}
// //         <button
// //           onClick={() => setExpanded(!expanded)}
// //           className="mb-4 text-[#00FFFF] underline cursor-pointer"
// //         >
// //           {expanded ? "[-] Collapse Career History" : "[+] View Detailed Career History"}
// //         </button>

// //         {expanded && (
// //           <div className="text-left border-l-4 border-[#008080] pl-4">
// //             {[ // Example Timeline Entries
// //               { date: "2023-Present", role: "AI & Full-Stack Development Training", details: "Rigorous professional training in modern AI techniques and software development." },
// //               { date: "2015-2023", role: "Founder & Editor, Inspireroo & Mum on the Brink", details: "Developed and managed successful digital content platforms focusing on sustainability and lifestyle." },
// //               { date: "2010-2015", role: "Digital Strategy Consultant", details: "Collaborated with global brands to deliver strategic content marketing and business transformation." }
// //             ].map((item, idx) => (
// //               <div key={idx} className="mb-6">
// //                 <h4 className="font-semibold text-[#2A3439]">{item.date}: {item.role}</h4>
// //                 <p className="text-sm text-[#555]">{item.details}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         <a
// //           href="/contact"
// //           className="mt-8 inline-block bg-[#008080] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#00FFFF] transition-all"
// //         >
// //           Let's Collaborate!
// //         </a>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutMeSection;

