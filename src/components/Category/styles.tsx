import styled from 'styled-components';

const CategoryStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 20px;

  padding: 20px 0;

  #categories {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100px;

    background-color: white;

    border-radius: 4px;

    .category {
      display: flex;
      flex-direction: column;

      z-index: 1;

      width: 100%;
      height: 100%;

      align-items: center;
      justify-content: center;

      cursor: pointer;

      h4,
      span,
      img {
        pointer-events: none;
      }

      h4 {
        color: #c2c7d2;
      }
    }

    #indicator {
      position: absolute;

      z-index: 0;

      width: 100px;
      height: 100px;

      background-color: #393d45;

      transition: 0.25s ease;
      transition-property: width transform;

      border-radius: 4px;
    }
  }
`;

export default CategoryStyles;
