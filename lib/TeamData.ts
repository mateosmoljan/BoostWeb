import image1 from "@/public/assets/images/backed_by1.png";
import image2 from "@/public/assets/images/backed_by2.png";
import image3 from "@/public/assets/images/backed_by3.png";
import image4 from "@/public/assets/images/backed_by4.png";
import image5 from "@/public/assets/images/backed_by5.png";
import image6 from "@/public/assets/images/backed_by1.png";
import { StaticImageData } from "next/image";

type LinksData = {
  path: string;
  name: string;
  role: string;
  backed_by: string;
  backed_image: StaticImageData;
};

type DataObject = {
  data: LinksData[];
};

export const TeamData: DataObject = {
  data: [
    {
      path: "/assets/images/team1.webp",
      name: "Alex Uzun",
      role: "CEO and Chief Developer",
      backed_by: "Ethereum Foundation",
      backed_image: image1,
    },
    {
      path: "/assets/images/team2.jpeg",
      name: "Josh Buck",
      role: "Co-founder",
      backed_by: "a16z",
      backed_image: image2,
    },
    {
      path: "/assets/images/team3.jpg",
      name: "Jacob Sorkin",
      role: "Head of Crypto",
      backed_by: "ZkSync",
      backed_image: image3,
    },
    {
      path: "/assets/images/team4.png",
      name: "Jasmeet Singh Sandhu",
      role: "Chief Science Officer",
      backed_by: "consenSys",
      backed_image: image4,
    },
    {
      path: "/assets/images/team5.png",
      name: "Dr. Alexey Potapov",
      role: "Chief AGI Officer",
      backed_by: "ParaFi Capital",
      backed_image: image5,
    },
    {
      path: "/assets/images/team1.png",
      name: "Loic Claveau",
      role: "Chief Marketing Officer",
      backed_by: "Ethereum Foundation",
      backed_image: image1,
    },
  ],
};
