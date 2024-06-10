type LinksData = {
  path: string;
  name: string;
  role: string;
};

type DataObject = {
  data: LinksData[];
};

export const TeamData: DataObject = {
  data: [
    {
      path: "/assets/images/team4.png",
      name: "Alex Uzun",
      role: "CEO and Chief Developer",
    },
    {
      path: "/assets/images/team2.jpeg",
      name: "Josh Buck",
      role: "Co-founder",
    },
    {
      path: "/assets/images/team3.jpg",
      name: "Jacob Sorkin",
      role: "Head of Crypto",
    },
    {
      path: "/assets/images/team1.webp",
      name: "Jasmeet Singh Sandhu",
      role: "Chief Science Officer",
    },
    {
      path: "/assets/images/team5.png",
      name: "Dr. Alexey Potapov",
      role: "Chief AGI Officer",
    },
    {
      path: "/assets/images/team1.png",
      name: "Loic Claveau",
      role: "Chief Marketing Officer",
    },
  ],
};
