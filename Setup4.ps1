# PowerShell Script: Setup Main Layout & Page Structure for Monika Roozen Profile Website

# Set project path
$projectPath = "C:\Users\Monika\OneDrive\Coursework-SoftwareEngineering\MRProfileSite\monika-roozen-profile"
Set-Location "$projectPath"

Write-Host "Creating Main Layout & Updating Page Structure..."

# Ensure required layout directory exists
$folders = @(
  "src/components/layout"
)

foreach ($folder in $folders) {
    if (!(Test-Path "$folder")) {
        New-Item -ItemType Directory -Path "$folder" -Force | Out-Null
    }
}

# Create Main Layout Component
Write-Host "Creating Main Layout Component..."
@"
import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary text-primary font-body">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
"@ | Set-Content "./src/components/layout/MainLayout.tsx"

# Update Home Page to Use Layout
Write-Host "Updating Home Page with Layout..."
@"
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
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
"@ | Set-Content "./src/app/page.tsx"

# Update Services Page
Write-Host "Updating Services Page with Layout..."
@"
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

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
"@ | Set-Content "./src/app/services/page.tsx"

# Install Framer Motion for Animations
Write-Host "Installing Framer Motion for smooth animations..."
npm install framer-motion

# Completion Message
Write-Host "Main Layout setup complete! Pages are now structured with reusable layout. 🚀"
