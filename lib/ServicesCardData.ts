import { TestimonialsSliderData } from "./TestimonialsSlider";
type LinksData = {
  bg_image: string;
  image: string;
  title: string;
  des: string;
};

type DataObject = {
  data: LinksData[];
};

export const ServicesCardData: DataObject = {
  data: [
    {
      bg_image: "/assets/images/svgs/services1.svg",
      image: "/assets/images/svgs/services11.svg",
      title: "UI/UX Design",
      des: "We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.",
    },
    {
      bg_image: "/assets/images/svgs/services2.svg",
      image: "/assets/images/svgs/services22.svg",
      title: "Web Development",
      des: "We deliver high-fidelity software solutions for web, mobile, and desktops mapped onto your unique business processes. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies.",
    },
    {
      bg_image: "/assets/images/svgs/services3.svg",
      image: "/assets/images/websiteMaintenance.png",
      title: "Maintenance",
      des: "No matter what the purpose of the website is, it needs to be maintained in order to achieve its goals.",
    },
    {
      bg_image: "/assets/images/svgs/services4.svg",
      image: "/assets/images/svgs/services44.svg",
      title: "Blockchain Development",
      des: "We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.",
    },
  ],
};
