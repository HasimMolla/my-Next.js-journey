import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master the art of music",
  description:
    "Dive into our comprehensive music courses and transform your musical journey today. Whether you' re a beginner or looking to refine your skills, join us to unlock your true potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative  w-full  flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <div className="relative  w-full  flex items-center justify-center">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
