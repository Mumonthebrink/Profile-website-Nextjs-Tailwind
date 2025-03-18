import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monika Roozen | Digital Strategy & AI",
  description: "Helping businesses integrate AI with sustainable digital transformation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ 
        backgroundImage: "url('../../assets/images/sustainabletechmycelium.webp')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        backgroundColor: "#F8FAFC"
      }}>
        {children}
      </body>
    </html>
  );
}
