import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Nav/Nav";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Crypto.ai - powerfull ai",
  description:
    "Boost Web offers professional website design, software development and maintenance services. Create stunning websites with personalized service and modern amenities.",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "Boost Web",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Boost Web",
    "website design",
    "website development",
    "website maintenance",
    "software development",
    "software design",
    "professional website services",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "Boost Web - Professional Website Design & Maintenance Services",
    description:
      "Boost Web offers professional website design, software development and maintenance services. Create stunning websites with personalized service and modern amenities.",
    url: "https://boostweb.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Web - Professional Website Design & Maintenance Services",
    description:
      "Boost Web offers professional website design, software development and maintenance services. Create stunning websites with personalized service and modern amenities.",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "Boost Web",
      },
    ],
  },
  authors: [
    { name: "Boost Web" },
    { name: "Boost Web", url: "https://boostweb.io" },
  ],
  creator: "Boost Web",
  publisher: "Boost Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <html lang={locale}>
        <body className={`${poppins.variable} font-poppins`}>
          <AppRouterCacheProvider>
            <Navbar />
            {children}
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
