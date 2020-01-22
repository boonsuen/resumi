import { createGlobalStyle } from 'styled-components';

import './global.css';
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
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Graphik", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
    font-weight: 400;
    color: #26282D;
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

    &:focus {
      outline: none;
    }
  }

  input {
    color: #26282D;
  }

  .container {
    width: 1100px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;