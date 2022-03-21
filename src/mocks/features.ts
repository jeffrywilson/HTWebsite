import { IFeature } from "../interfaces/general";

const title = "test";
const image = "/images/asd.jpg";
const description =
  "All players deserve to enjoy the high seas and shallow waters which is why there are no entry fees for High Tide’s sunny oasis. Explore the world, make new friends, and go on the fishing expedition of your dreams!";

export const mock_features: IFeature[] = [
  {
    id: 0,
    title: "Free to play",
    image,
    description: "Free to play " + description,
  },
  {
    id: 1,
    title: "Grind to earn",
    image,
    description: "Grind to earn " + description,
  },
  {
    id: 2,
    title: "Smart NFTs",
    image,
    description: "Smart NFTs " + description,
  },
];
