import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, #___gatsby {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  input, button, a {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  .container {
    width: 1100px;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyle;