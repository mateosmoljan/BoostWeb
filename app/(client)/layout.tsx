import React from "react";
// import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Nav/Nav";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalitics";
import ToTop from "@/components/ToTop/ToTop";
import siteMetadata from "@/utils/siteMetaData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`, // Full URL for the image
        width: 1200,
        height: 630,
        alt: `${siteMetadata.title} Social Banner`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noarchive: true,
      nosnippet: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`, // Full URL for the image
        alt: `${siteMetadata.title} Social Banner`,
      },
    ],
    site: `@${siteMetadata.twitter.replace("https://x.com/", "")}`,
  },
  keywords: [
    "BoostWeb",
    "online presence solutions",
    "website creation packages",
    "blockchain crypto tokens",
    "website maintenance",
    "accommodation websites",
    "construction websites",
    "restaurant websites",
    "salon websites",
    "digital marketing",
    "business growth",
  ],
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
