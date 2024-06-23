import { StaticImageData } from "next/image";

import realestate1 from "@/public/assets/images/references/realestate1.png";
import realestate2 from "@/public/assets/images/references/realestate2.png";

import ai1 from "@/public/assets/images/references/ai1.png";
import ai2 from "@/public/assets/images/references/ai2.png";
import ai3 from "@/public/assets/images/references/ai3.png";

import ecommerce1 from "@/public/assets/images/references/ecommerce1.png";
import ecommerce2 from "@/public/assets/images/references/ecommerce2.png";
import ecommerce3 from "@/public/assets/images/references/ecommerce3.png";

import crypto1 from "@/public/assets/images/references/crypto1.png";
import crypto2 from "@/public/assets/images/references/crypto2.png";
import crypto3 from "@/public/assets/images/references/crypto3.png";
import crypto4 from "@/public/assets/images/references/crypto4.png";

import sport1 from "@/public/assets/images/references/sport1.png";

import technology1 from "@/public/assets/images/references/technology1.png";

import music1 from "@/public/assets/images/references/music1.png";

import construction1 from "@/public/assets/images/references/construction1.png";

import finance1 from "@/public/assets/images/references/finance1.png";

import health1 from "@/public/assets/images/references/health1.png";
import health2 from "@/public/assets/images/references/health2.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  url: string;
};

type DataObject = {
  all: LinksData[];
  ecommerce: LinksData[];
  real_estate: LinksData[];
  blockchain: LinksData[];
  technology: LinksData[];
  other: LinksData[];
};

export const ReferencesCardData: DataObject = {
  all: [
    {
      image: realestate1,
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
      url: "https://gravitywrite.com",
    },
    {
      image: crypto1,
      title: "Title1",
      url: "https://halfshib.io",
    },
    {
      image: sport1,
      title: "Title1",
      url: "https://mchezo.rw",
    },
    {
      image: technology1,
      title: "Title1",
      url: "https://www.pullchecklist.com",
    },
    {
      image: music1,
      title: "Title1",
      url: "https://musicsound.com",
    },
    {
      image: construction1,
      title: "Title1",
      url: "https://www.hitt.com",
    },
    {
      image: finance1,
      title: "Finance 1",
      url: "https://agamerica.com",
    },
    {
      image: health1,
      title: "Health 1",
      url: "https://vitalrecordscontrol.com",
    },
    {
      image: realestate2,
      title: "Real Estate 2",
      url: "https://www.takeup.ai",
    },
    {
      image: health2,
      title: "Health 2",
      url: "https://artera.io",
    },
    {
      image: crypto2,
      title: "Crypto 2",
      url: "https://idle.finance/",
    },
    {
      image: crypto3,
      title: "Crypto 3",
      url: "https://www.bloobies.art/",
    },
  ],
  real_estate: [
    {
      image: realestate1,
      title: "Real Estate 1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: realestate2,
      title: "Real Estate 2",
      url: "https://www.takeup.ai",
    },
  ],
  blockchain: [
    {
      image: crypto1,
      title: "Crypto 1",
      url: "https://halfshib.io",
    },
    {
      image: crypto2,
      title: "Crypto 2",
      url: "https://idle.finance",
    },
    {
      image: crypto3,
      title: "Crypto 3",
      url: "https://www.bloobies.art",
    },
    {
      image: crypto4,
      title: "Crypto 4",
      url: "https://urlz.com",
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
  technology: [
    {
      image: technology1,
      title: "Title1",
      url: "https://www.pullchecklist.com",
    },
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
  other: [
    {
      image: music1,
      title: "Title1",
      url: "https://musicsound.com",
    },
    {
      image: construction1,
      title: "Title1",
      url: "https://www.hitt.com",
    },
    {
      image: finance1,
      title: "Finance 1",
      url: "https://agamerica.com",
    },
    {
      image: health1,
      title: "Health 1",
      url: "https://vitalrecordscontrol.com",
    },
    {
      image: health2,
      title: "Health 2",
      url: "https://artera.io",
    },
    {
      image: sport1,
      title: "Title1",
      url: "https://mchezo.rw",
    },
  ],
};
