import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root, body, html {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${({ theme }) => theme.white_background};
    color: ${({theme}) => theme.black};
  };

body , input , button , textarea {
  font: 400 16px 'Roboto', sans-serif;
}

  button {
cursor: pointer;
  };
  a{
    text-decoration: none;
  };
`;
