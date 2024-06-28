import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1000;

  nav {
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin: 50px 0px 0px 0px;
    overflow: hidden;
    border: 1px solid white;
  }

  nav a {
    margin: auto;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-align: center;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    nav {
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 0.5rem; /* Reduce padding */
    }

    nav a {
      margin: 0.25rem 0; /* Reduce margin */
      padding: 0.25rem 0.5rem; /* Reduce padding */
      font-size: 0.875rem; /* Reduce font size */
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="education" smooth={true} duration={500}>Education</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="aboutMe" smooth={true} duration={500}>About Me</Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
