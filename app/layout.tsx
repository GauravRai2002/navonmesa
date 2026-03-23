import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Navonmesa | Precision Ammunition for Global Defense",
  description:
    "Navonmesa delivers world-class precision ammunition and ordnance solutions to defense forces and security organizations across the globe. Engineered to perform. Built to last.",
  keywords:
    "Navonmesa, precision ammunition, defense, military, ordnance, tactical ammunition, small arms, international defense",
  openGraph: {
    title: "Navonmesa | Precision Ammunition for Global Defense",
    description:
      "World-class precision ammunition and ordnance solutions for global defense forces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
