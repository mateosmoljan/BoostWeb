type LinksData = {
  path: string;
  titles?: string;
};

type DataObject = {
  data: LinksData[];
};

export const linksData: DataObject = {
  data: [
    { path: "/", titles: "Home" },
    { path: "/services", titles: "Services" },
    { path: "/references", titles: "References" },
    { path: "/#faq", titles: "Faq" },
  ],
};
