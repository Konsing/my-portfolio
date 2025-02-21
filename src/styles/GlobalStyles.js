// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    padding-top: 1rem;
    font-family: 'Arial', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease, color 0.3s ease;
  }
  
  h1, h2, h3 {
    padding: 0.5rem 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  nav {
    position: fixed;
    background: ${({ theme }) => theme.navBackground};
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 1000;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.borderColor};
  
    a {
      margin: 0 1rem;
      border-radius: 30px;
    }
  }
  
  section {
    padding: 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 1rem;
      width: 100%;
  
      a {
        margin: 0.5rem 0;
      }
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    h3 {
      font-size: 1.25rem;
    }
  
    section {
      padding: 1rem;
    }
  }
`;

export default GlobalStyles;
