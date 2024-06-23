import { StaticImageData } from "next/image";
import accommodation1 from "@/public/assets/images/references/accommodation1.png";

import other1 from "@/public/assets/images/references/other1.png";
import ai1 from "@/public/assets/images/references/ai1.png";
import ecommerce1 from "@/public/assets/images/references/ecommerce1.png";
import ecommerce2 from "@/public/assets/images/references/ecommerce2.png";
import ai2 from "@/public/assets/images/references/ai2.png";
import ecommerce3 from "@/public/assets/images/references/ecommerce3.png";
import ai3 from "@/public/assets/images/references/ai3.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  url: string;
};

type DataObject = {
  all: LinksData[];
  accommodation: LinksData[];
  crypto: LinksData[];
  education: LinksData[];
  ai: LinksData[];
  other: LinksData[];
};

export const ReferencesCardData: DataObject = {
  all: [
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    { image: other1, title: "Title1", url: "https://dji-mini-4.tilda.ws" },
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
      url: "https://www.site-shot.com",
    },
    {
      image: ai2,
      title: "Title1",
      url: "https://www.tabos.cloud",
    },
  ],
  accommodation: [
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
  ],
  crypto: [
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
  ],
  education: [
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
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
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
  ],
  other: [
    { image: other1, title: "Title1", url: "https://dji-mini-4.tilda.ws" },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
    {
      image: accommodation1,
      title: "Title1",
      url: "https://villapanoramaistria.com",
    },
  ],
};
