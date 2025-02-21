// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 50px; /* Positions the header 20px from the top */
  
  nav {
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin: 0; /* Remove the old 50px margin */
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.borderColor};
    background: ${({ theme }) => theme.background};
  }

  nav a {
    margin: auto;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-align: center;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    nav {
      flex-direction: row;
      align-items: center;
      width: 90%;
      padding: 0.5rem;
    }

    nav a {
      margin: 0.25rem 0;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
  }
`;

const ToggleButton = styled.button`
  margin: auto;
  width: 35px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <nav>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="education" smooth={true} duration={500}>Education</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="aboutMe" smooth={true} duration={500}>About</Link>
        <ToggleButton onClick={toggleTheme}>
          {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </ToggleButton>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
