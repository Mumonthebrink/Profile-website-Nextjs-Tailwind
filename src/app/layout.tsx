import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Import global Tailwind styles

// Load Google Fonts (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Monika Roozen | Digital Strategy & AI",
  description: "Helping businesses integrate AI with sustainable digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)", backgroundColor: "white" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {/* Sticky Navbar */}
          <header style={{ position: "sticky", top: 0, width: "100%", backgroundColor: "white", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", zIndex: 50 }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
              <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--color-primary)" }}>Monika Roozen</h1>
              <nav style={{ display: "flex", gap: "1rem" }}>
                <a href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}>Home</a>
                <a href="/services" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}>Services</a>
                <a href="/expertise" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}>Expertise</a>
                <a href="/thought-leadership" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}>Thought Leadership</a>
                <a href="/about" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}>About</a>
                <a href="/contact" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }}>Contact</a>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main style={{ flex: 1, maxWidth: "1200px", margin: "0 auto", padding: "1.5rem" }}>{children}</main>

          {/* Footer */}
          <footer style={{ width: "100%", backgroundColor: "#F3F4F6", textAlign: "center", padding: "1rem", marginTop: "auto" }}>
            <p style={{ color: "#6B7280" }}>&copy; 2025 Monika Roozen. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
