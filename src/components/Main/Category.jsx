import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/categorySlice";

import filterIcon from "../../assets/category-picker-icons/filterIcon.svg";
import poloshirtIcon from "../../assets/category-picker-icons/poloshirtIcon.png";
import girlstshirtIcon from "../../assets/category-picker-icons/girlstshirtIcon.png";
import acessoriesIcon from "../../assets/category-picker-icons/acessoriesIcon.png";
import socksIcon from "../../assets/category-picker-icons/socksIcon.png";
import bagsIcon from "../../assets/category-picker-icons/bagsIcon.png";
import shoesIcon from "../../assets/category-picker-icons/shoesIcon.png";
import hatsIcon from "../../assets/category-picker-icons/hatsIcon.png";
import topsIcon from "../../assets/category-picker-icons/topsIcon.png";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80vw;

  margin-top: 100px;
  gap: 50px;

  #category-picker-title {
    color: ${(props) => props.theme.primary};
  }

  #category-selector {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100px;

    background-color: ${(props) => props.theme.secondary};

    .category-option {
      display: flex;
      flex-direction: column;

      z-index: 1;

      width: 100%;

      align-items: center;
      justify-content: flex-end;

      padding: 10px;

      cursor: pointer;

      color: ${(props) => props.theme.tertiary};
      background-color: transparent;

      .category-image {
        display: flex;
        height: 100%;

        align-items: center;
        justify-content: center;

        pointer-events: none;
      }

      h4,
      img {
        pointer-events: none;
      }
    }

    #active-category-indicator {
      position: absolute;

      z-index: 0;

      width: 100px;
      height: 100px;

      background-color: ${(props) => props.theme.indicator};
    }

    #category-option-filter {
      position: absolute;
      display: flex;

      right: 10vw;

      transform: translateY(-40px);

      width: 40px;
      height: 40px;

      align-items: center;
      justify-content: center;

      cursor: pointer;

      background-color: ${(props) => props.theme.primary};
    }
  }

  img {
    filter: ${(props) => props.theme.filter};
    pointer-events: none;
  }
`;

function Category() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const handleCategory = (e) => {
    updateIndicator(e);
    dispatch(changeCategory(e.target.textContent));
  };

  const updateIndicator = (e) => {
    const start = document.getElementById("first-category");
    setIndicatorWidth(start.offsetWidth);

    if (e) {
      setIndicatorX(start.offsetLeft - start.offsetWidth);
      setIndicatorX(e.target.offsetLeft - start.offsetLeft);
      return;
    }
  };

  const updateIndicatorOnLoad = useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", () => updateIndicator());
  }, []);

  return (
    <CategoryContainer theme={currentTheme}>
      <h2 id="category-picker-title">Category</h2>
      <div id="category-selector">
        <div
          id="first-category"
          className="category-option"
          onClick={(e) => handleCategory(e)}
        >
          <div className="category-image">
            <img src={poloshirtIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Polo Shirt</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={girlstshirtIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Girls Tshirt</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={acessoriesIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Acessories</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={socksIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Socks</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={bagsIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Bags</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={shoesIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Shoes</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={hatsIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Hats</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <div className="category-image">
            <img src={topsIcon} alt="Girls Tshirt" width={35} />
          </div>
          <h4>Tops</h4>
        </div>
        <div id="category-option-filter">
          <img src={filterIcon} alt="Option Filter" width={20} />
        </div>
        <motion.div
          id="active-category-indicator"
          animate={{ x: indicatorX, width: indicatorWidth }}
          transition={{ ease: "easeOut" }}
        ></motion.div>
      </div>
    </CategoryContainer>
  );
}

export default Category;
