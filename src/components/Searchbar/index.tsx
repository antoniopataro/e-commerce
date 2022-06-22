import React, { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import Image from 'next/image';
import searchIcon from '../../../public/assets/header-icons/searchIcon.svg';

import { productsList } from '../Products/productsList';

import SearchbarStyles from './styles';

function Searchbar() {
  const searchbarRef = useRef<HTMLInputElement>(null);

  const [searchbarContent, setSearchbarContent] = useState('');
  const [isSearchbarFocused, setIsSearchbarFocused] = useState(false);

  /*@ts-ignore*/
  function handleFocus(e) {
    if (searchbarRef.current?.contains(e.target)) {
      setIsSearchbarFocused(true);
    } else {
      setIsSearchbarFocused(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', (e) => handleFocus(e));
    return () => {
      document.removeEventListener('click', (e) => handleFocus(e));
    };
  });

  const searchbarStyles: React.CSSProperties = {
    opacity: isSearchbarFocused ? '1' : '0',
    pointerEvents: isSearchbarFocused ? 'auto' : 'none'
  };

  return (
    <SearchbarStyles>
      <input
        type="text"
        placeholder="Search for a product."
        ref={searchbarRef}
        onChange={(e) => setSearchbarContent(e.target.value)}
      />
      <button>
        <Image src={searchIcon} alt="Favorites" width={20} />
      </button>
      <div id="suggestions" style={searchbarStyles}>
        <ul>
          {productsList
            .filter((product) => {
              if (product.name.toLowerCase().includes(searchbarContent.toLowerCase())) {
                return product;
              }
              return;
            })
            .map((product, index) => (
              <li key={index}>
                <Link href={`/product/${product.slug}`}>
                  <div className="product">
                    <Image src={product.image} alt={product.name} width={20} height={20} />
                    <h4>{product.name}</h4>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </SearchbarStyles>
  );
}

export default Searchbar;
