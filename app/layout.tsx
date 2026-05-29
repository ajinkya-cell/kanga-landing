import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KANGA™ — A Digital Art Sculpture Piece",
  description: "Experience the premium high-fidelity 3D kangaroo collectible sculpture. A clean, minimalist interactive masterpiece featuring soft-studio rendering and inertial physics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${outfit.variable} antialiased`}
    >
      <body className="bg-[#faf8f5] text-[#2a2927] min-h-screen flex flex-col selection:bg-[#e2d9f3] selection:text-[#2a2927]">
        {children}
      </body>
    </html>
  );
}

