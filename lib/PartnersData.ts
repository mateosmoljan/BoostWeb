type LinksData = {
  path: string;
  title: string;
};

type DataObject = {
  data: LinksData[];
};

export const PartnersData: DataObject = {
  data: [
    { path: "/assets/images/backed_by1.png", title: "Ethereum Foundation" },
    { path: "/assets/images/backed_by2.png", title: "a16z" },
    { path: "/assets/images/backed_by3.png", title: "ZkSync" },
    { path: "/assets/images/backed_by4.png", title: "consenSys" },
    { path: "/assets/images/backed_by5.png", title: "ParaFi Capital" },
  ],
};
