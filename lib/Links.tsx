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
    { path: "/team", titles: "Team" },
    { path: "/presale", titles: "Presale" },
  ],
};
