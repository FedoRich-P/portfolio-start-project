import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    background-color: transparent ;
  border-color: transparent;


  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  section {
    margin-bottom: 70px;
    text-align: center;
    outline: 1px solid blue;
  }
`;
