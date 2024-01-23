import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  li {
    list-style: none;
  }
  body, html {
    width: 100%;
    height: 100%;
    min-width: 1180px;
    box-sizing: border-box;
    background-color: #f0f0f0;
    font-family: 'Manrope', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
