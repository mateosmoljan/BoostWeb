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
    { path: "/invest", titles: "Invest" },
    { path: "/team", titles: "Team" },
  ],
};
