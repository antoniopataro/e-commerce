import { StaticImageData } from 'next/image';

import { v4 as uuidv4 } from 'uuid';

import bag1 from '../../../public/assets/product-images/bag1.png';
import bag2 from '../../../public/assets/product-images/bag2.png';
import bag3 from '../../../public/assets/product-images/bag3.png';
import bag4 from '../../../public/assets/product-images/bag4.png';
import bag5 from '../../../public/assets/product-images/bag5.png';
import bikini from '../../../public/assets/product-images/bikini.png';
import dress from '../../../public/assets/product-images/dress.png';
import gloves from '../../../public/assets/product-images/gloves.png';
import hat from '../../../public/assets/product-images/hat.png';
import higheels from '../../../public/assets/product-images/highheels.png';
import pants from '../../../public/assets/product-images/pants.png';
import ring from '../../../public/assets/product-images/ring.png';
import scarf from '../../../public/assets/product-images/scarf.png';
import shirt from '../../../public/assets/product-images/shirt.png';
import shirt2 from '../../../public/assets/product-images/shirt2.png';
import shoes from '../../../public/assets/product-images/shoes.png';
import shorts from '../../../public/assets/product-images/shorts.png';
import slippers from '../../../public/assets/product-images/slippers.png';
import sneakers from '../../../public/assets/product-images/sneakers.png';
import socks from '../../../public/assets/product-images/socks.png';
import sunglasses from '../../../public/assets/product-images/sunglasses.png';
import sweater from '../../../public/assets/product-images/sweater.png';
import tie from '../../../public/assets/product-images/tie.png';
import underwear from '../../../public/assets/product-images/underwear.png';

export interface ProductInterface {
  name: string;
  price: number;
  category: string;
  image: StaticImageData;
  id: string;
  quantity: number;
  slug: string;
}

export const productsList: Array<Product> = [
  {
    name: 'Hand Bag',
    price: 14.9,
    category: 'Bags',
    image: bag1,
    id: uuidv4(),
    quantity: 1,
    slug: 'hand-bag'
  },
  {
    name: 'Bag',
    price: 19.9,
    category: 'Bags',
    image: bag2,
    id: uuidv4(),
    quantity: 1,
    slug: 'bag'
  },
  {
    name: 'Toiletry Bag',
    price: 14.9,
    category: 'Bags',
    image: bag3,
    id: uuidv4(),
    quantity: 1,
    slug: 'toiletry-bag'
  },
  {
    name: 'Market Bag',
    price: 9.9,
    category: 'Bags',
    image: bag4,
    id: uuidv4(),
    quantity: 1,
    slug: 'market-bag'
  },
  {
    name: 'Schoolbag',
    price: 24.9,
    category: 'Bags',
    image: bag5,
    id: uuidv4(),
    quantity: 1,
    slug: 'schoolbag'
  },
  {
    name: 'Bikini',
    price: 29.9,
    category: 'Tops',
    image: bikini,
    id: uuidv4(),
    quantity: 1,
    slug: 'bikini'
  },
  {
    name: 'Dress',
    price: 39.9,
    category: 'Girls T-Shirt',
    image: dress,
    id: uuidv4(),
    quantity: 1,
    slug: 'dress'
  },
  {
    name: 'Gloves',
    price: 4.9,
    category: 'Acessories',
    image: gloves,
    id: uuidv4(),
    quantity: 1,
    slug: 'gloves'
  },
  {
    name: 'Hat',
    price: 29.9,
    category: 'Hats',
    image: hat,
    id: uuidv4(),
    quantity: 1,
    slug: 'hat'
  },
  {
    name: 'Highheels',
    price: 29.9,
    category: 'Shoes',
    image: higheels,
    id: uuidv4(),
    quantity: 1,
    slug: 'highheels'
  },
  {
    name: 'Pants',
    price: 39.9,
    category: 'Acessories',
    image: pants,
    id: uuidv4(),
    quantity: 1,
    slug: 'pants'
  },
  {
    name: 'Ring',
    price: 299.9,
    category: 'Acessories',
    image: ring,
    id: uuidv4(),
    quantity: 1,
    slug: 'ring'
  },
  {
    name: 'Scarf',
    price: 29.9,
    category: 'Acessories',
    image: scarf,
    id: uuidv4(),
    quantity: 1,
    slug: 'scarf'
  },
  {
    name: 'Polo Shirt',
    price: 19.9,
    category: 'Polo Shirt',
    image: shirt,
    id: uuidv4(),
    quantity: 1,
    slug: 'polo-shirt'
  },
  {
    name: 'Shirt',
    price: 39.9,
    category: 'Girls T-Shirt',
    image: shirt2,
    id: uuidv4(),
    quantity: 1,
    slug: 'shirt'
  },
  {
    name: 'Shoes',
    price: 39.9,
    category: 'Shoes',
    image: shoes,
    id: uuidv4(),
    quantity: 1,
    slug: 'shoes'
  },
  {
    name: 'Shorts',
    price: 29.9,
    category: 'Acessories',
    image: shorts,
    id: uuidv4(),
    quantity: 1,
    slug: 'shorts'
  },
  {
    name: 'Slippers',
    price: 9.9,
    category: 'Shoes',
    image: slippers,
    id: uuidv4(),
    quantity: 1,
    slug: 'slippers'
  },
  {
    name: 'Sneakers',
    price: 19.9,
    category: 'Shoes',
    image: sneakers,
    id: uuidv4(),
    quantity: 1,
    slug: 'sneakers'
  },
  {
    name: 'Socks',
    price: 4.9,
    category: 'Socks',
    image: socks,
    id: uuidv4(),
    quantity: 1,
    slug: 'socks'
  },
  {
    name: 'Sunglasses',
    price: 49.9,
    category: 'Acessories',
    image: sunglasses,
    id: uuidv4(),
    quantity: 1,
    slug: 'sunglasses'
  },
  {
    name: 'Sweater',
    price: 99.9,
    category: 'Acessories',
    image: sweater,
    id: uuidv4(),
    quantity: 1,
    slug: 'sweater'
  },
  {
    name: 'Tie',
    price: 39.9,
    category: 'Acessories',
    image: tie,
    id: uuidv4(),
    quantity: 1,
    slug: 'tie'
  },
  {
    name: 'Underwear',
    price: 19.9,
    category: 'Acessories',
    image: underwear,
    id: uuidv4(),
    quantity: 1,
    slug: 'underwear'
  }
];
