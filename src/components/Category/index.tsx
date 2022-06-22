import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import poloshirtIcon from '../../../public/assets/category-icons/poloshirtIcon.png';
import girlstshirtIcon from '../../../public/assets/category-icons/girlstshirtIcon.png';
import acessoriesIcon from '../../../public/assets/category-icons/acessoriesIcon.png';
import socksIcon from '../../../public/assets/category-icons/socksIcon.png';
import bagsIcon from '../../../public/assets/category-icons/bagsIcon.png';
import shoesIcon from '../../../public/assets/category-icons/shoesIcon.png';
import hatsIcon from '../../../public/assets/category-icons/hatsIcon.png';
import topsIcon from '../../../public/assets/category-icons/topsIcon.png';

import { useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/categorySlice';

import CategoryStyles from './styles';

interface IndicatorRectData {
  x: number;
  width: number;
}

function Category() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState<HTMLElement>();
  const [indicatorRect, setIndicatorRect] = useState<IndicatorRectData>();

  function handleCategory(e: React.MouseEvent<HTMLElement>, category: string) {
    setCategory(e.target as HTMLElement);
    dispatch(changeCategory(category));
  }

  const categoryRectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refRect = {
      x: categoryRectRef.current?.getBoundingClientRect().x,
      width: categoryRectRef.current?.getBoundingClientRect().width
    };
    const clickedRect = {
      x: category?.getBoundingClientRect().x
    };
    const updatedRect = {
      x: Number(clickedRect.x) - Number(refRect.x),
      width: Number(refRect.width)
    };

    setIndicatorRect(updatedRect);
  }, [category]);

  const indicatorStyles = {
    transform: `translateX(${indicatorRect?.x}px)`,
    width: `${indicatorRect?.width}px`
  };

  return (
    <CategoryStyles>
      <h2>Category</h2>
      <div id="categories">
        <div className="category" onClick={(e) => handleCategory(e, 'Polo Shirt')} ref={categoryRectRef}>
          <Image src={poloshirtIcon} alt="Polo Shirt" width={30} height={30} />
          <h4>Polo Shirt</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Girls T-Shirt')}>
          <Image src={girlstshirtIcon} alt="Girls T-Shirt" width={30} height={30} />
          <h4>Girls T-Shirt</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Acessories')}>
          <Image src={acessoriesIcon} alt="Acessories" width={30} height={30} />
          <h4>Acessories</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Socks')}>
          <Image src={socksIcon} alt="Socks" width={30} height={30} />
          <h4>Socks</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Bags')}>
          <Image src={bagsIcon} alt="Bags" width={30} height={30} />
          <h4>Bags</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Shoes')}>
          <Image src={shoesIcon} alt="Shoes" width={30} height={30} />
          <h4>Shoes</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Hats')}>
          <Image src={hatsIcon} alt="Hats" width={30} height={30} />
          <h4>Hats</h4>
        </div>
        <div className="category" onClick={(e) => handleCategory(e, 'Tops')}>
          <Image src={topsIcon} alt="Tops" width={30} height={30} />
          <h4>Tops</h4>
        </div>
        <div id="indicator" style={indicatorStyles} />
      </div>
    </CategoryStyles>
  );
}

export default Category;
