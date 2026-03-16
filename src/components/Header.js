import React, { useState, useEffect } from 'react';
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
  top: 24px;
  padding: 0 1rem;
  opacity: ${({ $scrolled }) => ($scrolled ? 1 : 0.9)};
  transition: opacity 0.3s ease;

  nav {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.4rem 0.5rem;
    background: ${({ theme }) => theme.navBackground};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 16px;
    overflow: hidden;
  }

  @media (max-width: 800px) {
    top: 12px;

    nav {
      width: 95%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.15rem;
      padding: 0.4rem;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0.5rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  letter-spacing: 0.01em;

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surfaceHover};
  }

  &.active {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surfaceHover};
  }

  @media (max-width: 800px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer
      $scrolled={scrolled}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav>
        <NavLink to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</NavLink>
        <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>Projects</NavLink>
        <NavLink to="skills" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>Skills</NavLink>
        <NavLink to="education" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>Education</NavLink>
        <NavLink to="aboutMe" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>About</NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
