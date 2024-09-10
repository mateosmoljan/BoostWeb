import ReferencesComponent from "@/components/References/References";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "References | BoostWeb",
    description:
      "Explore our list of references and resources related to BoostWeb. Find valuable information and insights on various topics.",
    openGraph: {
      title: "References | BoostWeb",
      description:
        "Explore our list of references and resources related to BoostWeb. Find valuable information and insights on various topics.",
      type: "website",
      locale: "en_US",
      url: "https://www.boostweb.io/references",
      siteName: "BoostWeb",
      images: [
        {
          url: "https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png", // You can use a specific image for the References page
          width: 1200,
          height: 630,
          alt: "References - BoostWeb", // Descriptive alt text
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "References | BoostWeb",
      description:
        "Explore our list of references and resources related to BoostWeb. Find valuable information and insights on various topics.",
      images: ["https://www.boostweb.io/assets/images/Logo_White_bg_Dark.png"], // Same image as Open Graph
    },
    alternates: {
      canonical: "https://www.boostweb.io/references", // Ensure the canonical URL is correct
    },
    keywords: [
      "BoostWeb references",
      "BoostWeb resources",
      "reference page",
      "useful information",
      "BoostWeb insights",
    ],
  };
}

function page() {
  return (
    <main>
      <ReferencesComponent />
    </main>
  );
}

export default page;
