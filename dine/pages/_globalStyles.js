import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    box-sizing: border-box;
    font-family: Spartan, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
