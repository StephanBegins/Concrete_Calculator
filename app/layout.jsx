import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Headers"; // Import Header

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the app
export const metadata = {
  title: "Concrete Calculator",
  description: "A tool to calculate concrete requirements for slabs, footings, walls, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <Header /> {/* Add Header here */}
        <main>{children}</main> {/* Main content */}
      </body>
    </html>
  );
}
