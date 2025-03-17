# PowerShell Script: Set Up Homepage for Monika Roozen Profile Website

# Set project path
$projectPath = "C:\Users\Monika\OneDrive\Coursework-SoftwareEngineering\MRProfileSite\monika-roozen-profile"
Set-Location "$projectPath"

Write-Host "Setting up homepage structure, background, typography, animations, and sections..."

# Ensure required directories exist
Write-Host "Creating necessary directories..."
$folders = @(
  "src/app",
  "src/components/ui",
  "public/assets/images"
)

foreach ($folder in $folders) {
    if (!(Test-Path "$folder")) {
        New-Item -ItemType Directory -Path "$folder" -Force | Out-Null
    }
}

# Copy Mycelium Background Image to Public Folder
Write-Host "Adding background image..."
$backgroundImagePath = "$projectPath\public\assets\images\mycelium-ai-background.png"
if (!(Test-Path "$backgroundImagePath")) {
    Copy-Item "C:\Path\To\Downloaded\MyceliumImage.png" "$backgroundImagePath"
}

# Generate TailwindCSS Global Styles
Write-Host "Setting up global styles..."
@"
@import 'tailwindcss';

@theme {
  --font-heading: 'Dyslexie', sans-serif;
  --font-body: 'Dyslexie', sans-serif;
  --font-ui: 'Geist', sans-serif;
  --color-primary: #005F73;
  --color-secondary: #FFFFFF;
  --color-dark-bg: #0F172A;
  --color-light-bg: #F8FAFC;
  --animation-fade-in: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

html {
  background: url('/assets/images/mycelium-ai-background.png') no-repeat center center fixed;
  background-size: cover;
  transition: background-color 0.3s ease-in-out;
}

.dark-mode {
  background-color: var(--color-dark-bg);
}

body {
  font-family: var(--font-body);
  color: var(--color-primary);
}
"@ | Set-Content "$projectPath\src\app\globals.css"

# Generate Homepage Component
Write-Host "Creating homepage layout..."
@"
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
"@ | Set-Content "$projectPath\src\app\page.tsx"

Write-Host "Homepage setup complete! Run 'npm run dev' to start the project. 🚀"
