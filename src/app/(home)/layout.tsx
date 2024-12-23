import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: "400" });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Anupam Poudel",
  description: "Discover Anupam Poudel's personal portfolio showcasing skills, projects, and achievements in Web Development. Explore innovative solutions and creative expertise to bring ideas to life. Let's create together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.variable, calistoga.variable, 'antialiased font-sans')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
