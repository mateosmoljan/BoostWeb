import React from "react";
// import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Nav/Nav";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalitics";
import ToTop from "@/components/ToTop/ToTop";
import Script from "next/script";
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
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
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
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
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
