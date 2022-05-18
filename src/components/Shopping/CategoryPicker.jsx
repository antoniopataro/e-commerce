import React, { useState } from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import filterIcon from "../../assets/category-picker-icons/filterIcon.svg";

const CategoryPickerContainer = styled.div`
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

      h4 {
        pointer-events: none;
      }
    }

    #active-category-indicator {
      position: absolute;

      z-index: 0;

      width: 100px;
      height: 100px;

      background-color: ${(props) => props.theme.primary};
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
`;

function CategoryPicker() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const handleCategory = (e) => {
    const start = document.getElementById("first-category");

    setIndicatorWidth(e.target.offsetWidth);
    setIndicatorX(e.target.offsetLeft - start.offsetLeft);
  };

  return (
    <CategoryPickerContainer theme={currentTheme}>
      <h2 id="category-picker-title">Category</h2>
      <div id="category-selector">
        <div
          id="first-category"
          className="category-option"
          onClick={(e) => handleCategory(e)}
        >
          <h4>Polo Shirt</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <h4>Girls Tshirt</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <h4>Acessories</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <h4>Socks</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <h4>Bags</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <h4>Shoes</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
          <h4>Hats</h4>
        </div>
        <div className="category-option" onClick={(e) => handleCategory(e)}>
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
    </CategoryPickerContainer>
  );
}

export default CategoryPicker;
