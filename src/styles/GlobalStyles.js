import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-top: 1rem; /* Welcome Text padding*/
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    color: #333;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    margin: 100px;
  }

  nav {
    position: fixed;
    background: linear-gradient(0.25turn, #d79259, #986c2f83, #ec845b); /* Gradient background for nav */
    padding: 0.5rem;
    display: flex;
    justify-content: center
    align-items: center;
    color: #fff;
    z-index: 1000;
    border-radius: 30px;
    border: 1px solid white;

    a {
      margin: 0 1rem;
      border-radius: 30px;
    }
  }

  section {
    padding: 0.5rem 0;
  }

  @media (max-width: 768px) {
    a {
      margin: 0; /* Remove large margins on links */
    }

    nav {
      flex-direction: column;
      padding: 1rem;
      width: 100%; /* Make nav full width on mobile */

      a {
        margin: 0.5rem 0; /* Adjust link margins for better spacing */
      }
    }

    h1 {
      font-size: 2rem; /* Adjust heading sizes for smaller screens */
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    section {
      padding: 1rem; /* Increase section padding for better readability */
    }
  }
`;

export default GlobalStyles;
