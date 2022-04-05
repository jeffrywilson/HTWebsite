import { IFeature } from "../interfaces/general";

const title = "test";
const image1 = "/images/1_3 Features Photo.png";
const image2 = "/images/2_3 Features Photo.png";
const image3 = "/images/3_3 Features Photo.png";
const description =
  "All players deserve to enjoy the high seas and shallow waters which is why there are no entry fees for High Tide’s sunny oasis. Explore the world, make new friends, and go on the fishing expedition of your dreams!";

export const mock_features: IFeature[] = [
  {
    id: 0,
    title: "Free to play",
    image: image1,
    description: "Free to play " + description,
  },
  {
    id: 1,
    title: "Grind to earn",
    image: image2,
    description: "Grind to earn " + description,
  },
  {
    id: 2,
    title: "Smart NFTs",
    image: image3,
    description: "Smart NFTs " + description,
  },
];
