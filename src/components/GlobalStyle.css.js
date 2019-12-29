import { createGlobalStyle } from 'styled-components';

import GraphikRegularWoff2 from '../assets/fonts/Graphik-Regular-Web.woff2';
import GraphikMediumWoff2 from '../assets/fonts/Graphik-Medium-Web.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Graphik";
    src: url(${GraphikRegularWoff2}) format('woff2');    
    font-weight: 400;
  }

  @font-face {
    font-family: "Graphik";
    src: url(${GraphikMediumWoff2}) format('woff2');    
    font-weight: 500;
  }

  html, #___gatsby {
    height: 100%;
  }

  body {
    font-family: "Graphik", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .container {
    width: 1100px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyle;