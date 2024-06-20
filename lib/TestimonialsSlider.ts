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
      src: "/assets/images/client3.png",
      alt: "Clients image 1",
      des: "This team did an amazing job with the development of my advanced website. I highly recommend them for anyone looking for a good developers.",
      name: "osmanuzun393",
      industry: "Crypto",
    },
    {
      src: "/assets/images/client2.png",
      alt: "Clients image 2",
      des: "It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.",
      name: "Emily",
      industry: "AI",
    },
    {
      src: "/assets/images/client1.png",
      alt: "Clients image 3",
      des: "We are very happy with the work that Boostweb did for us. We had very little experience with the backend of building a website either so in general this was a great collaboration.",
      name: "Kelly",
      industry: "Booking",
    },
    {
      src: "/assets/images/client4.png",
      alt: "Clients image 4",
      des: "Boostweb Agency's work is amazing, and I can't thank them enough for the quality of work. I would highly recommend their services and would, without a doubt, work with them again.",
      name: "Sarah",
      industry: "Online Agency",
    },
  ],
};
