import { v4 as uuidv4 } from "uuid";

import shirt from "../assets/product-images/shirt.png";
import pants from "../assets/product-images/pants.png";

export const productsList = [
  {
    name: "Green Shirt",
    price: 19.9,
    category: "Polo Shirt",
    image: shirt,
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Blue Pants",
    price: 39.9,
    category: "Polo Shirt",
    image: pants,
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "Supreme Blue Pants",
    price: 999.9,
    category: "Girls Tshirt",
    image: pants,
    id: uuidv4(),
    quantity: 1,
  },
  {
    name: "A Terrible T-Shirt",
    price: 9.9,
    category: "Girls Tshirt",
    image: shirt,
    id: uuidv4(),
    quantity: 1,
  },
];
