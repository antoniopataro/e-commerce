import { v4 as uuidv4 } from "uuid";

import bannerImage from "../../assets/bannerImage.png";

export const productsList = [
  {
    name: "Product 1",
    price: 60.0,
    category: "Polo Shirt",
    image: bannerImage,
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Product 2",
    price: 74.99,
    category: "Polo Shirt",
    image: bannerImage,
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Product 1",
    price: 25.1,
    category: "Girls Tshirt",
    image: bannerImage,
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Product 2",
    price: 30.0,
    category: "Girls Tshirt",
    image: bannerImage,
    id: uuidv4(),
    quantity: 1,
  },
];
