# PowerShell Script: Setup UI Components for Monika Roozen Profile Website

# Set project path
$projectPath = "C:\Users\Monika\OneDrive\Coursework-SoftwareEngineering\MRProfileSite\monika-roozen-profile"
Set-Location "$projectPath"

Write-Host "Creating UI components and setting up styling..."

# Ensure required UI directories exist
$folders = @(
  "src/components/ui"
)

foreach ($folder in $folders) {
    if (!(Test-Path "$folder")) {
        New-Item -ItemType Directory -Path "$folder" -Force | Out-Null
    }
}

# Create Button Component
Write-Host "Creating Button Component..."
@"
import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={
        `px-6 py-3 text-white rounded-lg transition duration-300 ease-in-out ` +
        (variant === 'primary' ? 'bg-primary hover:scale-105 hover:shadow-lg' : 'bg-secondary hover:opacity-80')
      }
    >
      {text}
    </button>
  );
};

export default Button;
"@ | Set-Content "./src/components/ui/Button.tsx"

# Create Navbar Component
Write-Host "Creating Navbar Component..."
@"
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-primary text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Monika Roozen</h1>
      <div className="space-x-4">
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
"@ | Set-Content "./src/components/ui/Navbar.tsx"

# Create Footer Component
Write-Host "Creating Footer Component..."
@"
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-secondary text-primary py-6 text-center">
      <p>&copy; 2025 Monika Roozen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
"@ | Set-Content "./src/components/ui/Footer.tsx"

# Create Dark Mode Toggle Component
Write-Host "Creating Dark Mode Toggle Component..."
@"
import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-gray-700 text-white rounded-lg">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
"@ | Set-Content "./src/components/ui/DarkModeToggle.tsx"

# Create Modal Component (Using Headless UI)
Write-Host "Creating Modal Component using Headless UI..."
@"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string }> = ({ isOpen, onClose, title, children }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex items-center justify-center z-50" onClose={onClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
          <div className="mt-4">{children}</div>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
"@ | Set-Content "./src/components/ui/Modal.tsx"

# Install Headless UI for modal functionality
Write-Host "Installing Headless UI dependency..."
npm install @headlessui/react

# Completion Message
Write-Host "UI components setup complete! You can now use these in your project. 🚀"
