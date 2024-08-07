import { Inter } from "next/font/google";
import Head from 'next/head';

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travl Arond the world",
  description: "I want to travel for in my life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
