import React, { useState, useEffect, useCallback } from 'react';
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
  color: ${({ theme, $isActive }) => $isActive ? theme.text : theme.textMuted};
  background: ${({ theme, $isActive }) => $isActive ? theme.surfaceHover : 'transparent'};
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  letter-spacing: 0.01em;

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surfaceHover};
  }

  @media (max-width: 800px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }
`;

const sections = ['home', 'projects', 'skills', 'education', 'aboutMe'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const detectSection = useCallback(() => {
    const scrollY = window.scrollY + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection('home');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      detectSection();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    detectSection();
    return () => window.removeEventListener('scroll', onScroll);
  }, [detectSection]);

  return (
    <HeaderContainer
      $scrolled={scrolled}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav>
        <NavLink to="home" smooth={true} duration={500} $isActive={activeSection === 'home'}>Home</NavLink>
        <NavLink to="projects" smooth={true} duration={500} offset={+20} $isActive={activeSection === 'projects'}>Projects</NavLink>
        <NavLink to="skills" smooth={true} duration={500} offset={+20} $isActive={activeSection === 'skills'}>Skills</NavLink>
        <NavLink to="education" smooth={true} duration={500} offset={+50} $isActive={activeSection === 'education'}>Education</NavLink>
        <NavLink to="aboutMe" smooth={true} duration={500} offset={-10} $isActive={activeSection === 'aboutMe'}>About</NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
