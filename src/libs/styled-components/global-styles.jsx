import "../../assets/fonts/index.css";

import { createGlobalStyle } from "styled-components";

import { BREAK_POINT, COLOR, FONT_SIZE } from "./reference-tokens";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: ${FONT_SIZE.md};
  }
  html{
    /** 배경 색상 */
    background-color: ${COLOR.COMMON[1000]};
    /** 폰트 등 색상 */
    color: ${COLOR.COMMON[0]};
    /** 폰트 설정 */
    font-family: 'SOYO_Maple_Bold';
    /** 폰트 크기 */
    font-size: 62.5%; // '1rem' = '10px'
    @media screen and (max-width: ${BREAK_POINT.md}) {
      font-size: 56.25%; // '1rem' = '9px'
    }
    @media screen and (max-width: ${BREAK_POINT.sm}) {
      font-size: 50%; // '1rem' = '8px'
    }
  }
  h1 {
    font-size: ${FONT_SIZE.xl};
  }
  h2 {
    font-size: ${FONT_SIZE.lg};
  }
  h3 {
    font-size: ${FONT_SIZE.bg};
  }
  button {
    border: none;
  }
  input {
    outline: none;
  }  
  ul, li {
    list-style: none;
  }
`;

export default GlobalStyles;
