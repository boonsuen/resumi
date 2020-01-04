import { createGlobalStyle } from 'styled-components';

import './layout.css';
import GraphikRegularWoff2 from '../assets/fonts/Graphik-Regular-Web.woff2';
import GraphikMediumWoff2 from '../assets/fonts/Graphik-Medium-Web.woff2';

// Why are the @font-face rules extracted to be used on its own? 
// GlobalStyle causes custom fonts to be re-requested when
// it get rerendered, or some other possible behaviors like
// rehyration, component state change.
// This will cause font loading problems like FOIT and FOUT. Bad bad.
export const fontFaceRules = `
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
`;

const GlobalStyle = createGlobalStyle`
  html, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    font-family: "Graphik", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6  {
    font-weight: 500;
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