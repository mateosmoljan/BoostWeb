type LinksData = {
  src: string;
  alt: string;
  des: string;
  name: string;
  industry: string;
};

type DataObject = {
  data: LinksData[];
};

export const TestimonialsSliderData: DataObject = {
  data: [
    {
      src: "/assets/images/client1.png",
      alt: "Clients image 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "lorem",
      industry: "Chief Technology Officer - FinTech",
    },
    {
      src: "/assets/images/client2.png",
      alt: "Clients image 2",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Emily Johnson",
      industry: "Head of Marketing - HealthTech",
    },
    {
      src: "/assets/images/client3.png",
      alt: "Clients image 3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Michael Brown",
      industry: "EdTech",
    },
    {
      src: "/assets/images/client4.png",
      alt: "Clients image 4",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo vel dolor fermentum, at ultricies eros lobortis. ",
      name: "Sarah Lee",
      industry: "Cybersecurity",
    },
  ],
};
