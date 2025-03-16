# PowerShell Script: Setup Infrastructure & Tech Stack (Part 2) for Monika Roozen Profile Website

# Set project path
$projectPath = "C:\Users\Monika\OneDrive\Coursework-SoftwareEngineering\MRProfileSite\monika-roozen-profile"
Set-Location "$projectPath"

Write-Host "Setting up project structure, TypeScript configuration, and automation..."

# Ensure required directories exist
Write-Host "Creating additional project structure..."
$folders = @(
  "src/app/pages",
  "src/app/services",
  "src/app/expertise",
  "src/app/thought-leadership",
  "src/app/about",
  "src/app/contact",
  "src/components/common",
  "src/components/layout",
  "src/components/ui",
  "src/styles",
  "src/public/assets/images",
  "src/public/assets/icons",
  "src/lib",
  "src/utils"
)

foreach ($folder in $folders) {
    if (!(Test-Path "$folder")) {
        New-Item -ItemType Directory -Path "$folder" -Force | Out-Null
    }
}

# TypeScript Configuration (Path Aliases)
Write-Host "Configuring TypeScript path aliases..."
@"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/layout/*": ["src/components/layout/*"],
      "@/sections/*": ["src/components/sections/*"],
      "@/styles/*": ["src/styles/*"],
      "@/public/*": ["src/public/*"],
      "@/lib/*": ["src/lib/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
"@ | Set-Content "./tsconfig.json"

# ESLint Configuration
Write-Host "Configuring ESLint with Next.js defaults and TypeScript support..."
@"
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
"@ | Set-Content "./eslint.config.js"

# Install ESLint and Prettier dependencies
Write-Host "Installing ESLint, Prettier, and plugins..."
npm install -D eslint prettier eslint-plugin-prettier eslint-config-prettier

# Prettier Configuration
Write-Host "Setting up Prettier configuration..."
@"
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
"@ | Set-Content "./.prettierrc"

# Git Initialization
Write-Host "Initializing Git repository..."
git init

# Add a .gitignore file
Write-Host "Creating .gitignore file..."
@"
node_modules/
.next/
.env
package-lock.json
dist/
output.css
"@ | Set-Content "./.gitignore"

# Set up environment variables (Google Analytics placeholder)
Write-Host "Setting up environment variables..."
@"
NEXT_PUBLIC_GOOGLE_ANALYTICS=
"@ | Set-Content "./.env"

# Completion Message
Write-Host "Setup complete! Your project is now structured, configured with TypeScript, ESLint, and Prettier. 🚀"
Write-Host "Don't forget to add your Google Analytics tracking ID to the .env file"
