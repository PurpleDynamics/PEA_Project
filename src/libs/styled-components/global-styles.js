import { createGlobalStyle } from "styled-components"
import '../../assets/fonts/index.css'
import { BREAK_POINT, COLOR, FONT_SIZE } from './reference-tokens'

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

    /** 컨텐츠 색상 */
    color: ${COLOR.COMMON[0]};

    /** 폰트 설정 */
    font-family: 'SOYO_Maple_Bold';

    /** 폰트 크기 */
    font-size: 62.5%;
    @media screen and (max-width: ${BREAK_POINT.md}) {
      font-size: 56.25%;
    }
    @media screen and (max-width: ${BREAK_POINT.sm}) {
      font-size: 50%;
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
`

export default GlobalStyles