"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="fixed inset-0 bg-gradient-to-br from-green-100 to-green-300 animate-gradient-bg"></div>
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50 animate-fade-in">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <Navbar />
            <main className="flex-grow relative z-10 mt-20 pb-12 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
