interface menuSubModel {
  dataSub: {
    title: string;
    pathRoute: string;
    dataChild?: { title: string; pathRoute: string }[];
  }[];
  img?: string;
}

export default menuSubModel;
