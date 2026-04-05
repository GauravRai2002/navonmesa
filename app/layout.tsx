import type { Metadata } from "next";
import { Inter, Bebas_Neue, Noto_Sans_Devanagari } from "next/font/google";
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

const notoDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "600", "700"],
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-noto-devanagari",
});

export const metadata: Metadata = {
  title: "Navonmesa | नवोन्मेष — Precision Defence Systems",
  description:
    "Navonmesa (नवोन्मेष) — You think, we innovate for you. Trusted manufacturer of precision-engineered defence systems including fuses, radio sets, flight glide path indicators, chaffs & flares, drones, electronic PCBs, and ship equipment. Supporting Indian Navy & Defence Projects. Make in India.",
  keywords:
    "Navonmesa, नवोन्मेष, defence, fuses, radio set, glide path indicator, chaffs, flares, drones, electronic PCBs, ship equipment, Indian Navy, Make in India, defence manufacturing",
  openGraph: {
    title: "Navonmesa | नवोन्मेष — Precision Defence Systems",
    description:
      "Trusted manufacturer of precision-engineered defence systems. You think, we innovate for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${notoDevanagari.variable}`}>
      <body>
        {/* Indian Flag Tricolor Stripe */}
        <div className="tricolor-stripe">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
