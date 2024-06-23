import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Nav/Nav";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalitics";
import ToTop from "@/components/ToTop/ToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Boost Web - Empowering Your Online Presence",
  description:
    "Discover Boost Web, your trusted partner for website maintenance, design, development, SEO, and SAAS solutions. From booking systems to online schools and crypto projects, we transform your digital vision into reality.",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "Boost Web",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Boost Web",
    "website maintenance",
    "website design",
    "SEO services",
    "SAAS development",
    "booking systems",
    "online school",
    "crypto projects",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "Boost Web - Empowering Your Online Presence",
    description:
      "Discover Boost Web, your trusted partner for website maintenance, design, development, SEO, and SAAS solutions. From booking systems to online schools and crypto projects, we transform your digital vision into reality.",
    url: "https://www.boostweb.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Web - Empowering Your Online Presence",
    description:
      "Discover Boost Web, your trusted partner for website maintenance, design, development, SEO, and SAAS solutions. From booking systems to online schools and crypto projects, we transform your digital vision into reality.",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "Boost Web",
      },
    ],
  },
  authors: [
    { name: "Boost Web" },
    { name: "Boost Web", url: "https://www.boostweb.io" },
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
      <html lang="en">
        <GoogleAnalytics />
        <body className={`${poppins.variable} font-poppins`}>
          <AppRouterCacheProvider>
            <Navbar />
            {children}
            <ToTop />
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
