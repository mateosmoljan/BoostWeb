import { StaticImageData } from "next/image";

import accommodation1 from "@/public/assets/images/references/accommodation1.png";

import ai1 from "@/public/assets/images/references/ai1.png";
import ai2 from "@/public/assets/images/references/ai2.png";
import ai3 from "@/public/assets/images/references/ai3.png";

import ecommerce1 from "@/public/assets/images/references/ecommerce1.png";
import ecommerce2 from "@/public/assets/images/references/ecommerce2.png";
import ecommerce3 from "@/public/assets/images/references/ecommerce3.png";

import crypto1 from "@/public/assets/images/references/crypto1.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  url: string;
};

type DataObject = {
  all: LinksData[];
  accommodation: LinksData[];
  crypto: LinksData[];
  ecommerce: LinksData[];
  ai: LinksData[];
  // other: LinksData[];
};

export const ReferencesCardData: DataObject = {
  all: [
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: ai1,
      title: "Title1",
      url: "https://www.noon.ai/",
    },
    {
      image: ecommerce1,
      title: "Title1",
      url: "https://sparxhockey.eu",
    },
    {
      image: ecommerce2,
      title: "Title1",
      url: "https://johnnycupcakes.com",
    },
    {
      image: ai2,
      title: "Title1",
      url: "https://www.tabos.cloud",
    },
    {
      image: ecommerce3,
      title: "Title1",
      url: "https://www.norwalkfurniture.com",
    },
    {
      image: ai3,
      title: "Title1",
      url: "https://gravitywrite.com/",
    },
    {
      image: crypto1,
      title: "Title1",
      url: "https://halfshib.io",
    },
  ],
  accommodation: [
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
  ],
  crypto: [
    {
      image: crypto1,
      title: "Half Shiba",
      url: "https://halfshib.io",
    },
  ],
  ecommerce: [
    {
      image: ecommerce1,
      title: "Title1",
      url: "https://sparxhockey.eu",
    },
    {
      image: ecommerce2,
      title: "Title1",
      url: "https://johnnycupcakes.com",
    },
    {
      image: ecommerce3,
      title: "Title1",
      url: "https://www.norwalkfurniture.com",
    },
  ],
  ai: [
    {
      image: ai1,
      title: "Title1",
      url: "https://www.noon.ai",
    },
    {
      image: ai2,
      title: "Title1",
      url: "https://www.tabos.cloud",
    },
    {
      image: ai3,
      title: "Title1",
      url: "https://www.site-shot.com",
    },
  ],
  // other: [
  //   {
  //     image: accommodation1,
  //     title: "Title1",
  //     url: "https://villapanoramaistria.com",
  //   },
  // ],
};
