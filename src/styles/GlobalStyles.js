import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  h1, h2, h3 {
    padding: 0.5rem 0;
    letter-spacing: -0.02em;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  nav {
    position: fixed;
    background: ${({ theme }) => theme.navBackground};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    z-index: 1000;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.borderColor};

    a {
      margin: 0 1rem;
      border-radius: 8px;
    }
  }

  section {
    padding: 0.5rem 0;
  }

  ::selection {
    background: rgba(56, 189, 248, 0.25);
    color: #fff;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0.4rem;

      a {
        margin: 0;
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
