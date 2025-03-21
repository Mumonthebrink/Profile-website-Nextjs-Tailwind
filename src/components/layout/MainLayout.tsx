import React from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;



// import React from 'react';
// import Navbar from '@/components/ui/Navbar';
// import Footer from '@/components/ui/Footer';


// const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col color-dark-bg text-primary font-body">
//       <Navbar />
//       <main className="flex-1 container mx-auto px-6 py-10 text-center">{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
