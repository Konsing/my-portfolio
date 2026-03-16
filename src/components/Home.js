import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';

const HomeContainer = styled.section`
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.homeGradient};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    padding-top: 80px;
  }
`;

const GradientName = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  background: ${({ theme }) => theme.accentGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textMuted};
  white-space: nowrap;
  line-height: 1.6;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
    max-width: 90%;
  }
`;

const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textMuted};

  span {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 40px;
  background: ${({ theme }) => theme.accentGradient};
  border-radius: 1px;
  transform-origin: top;
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <InteractiveBackground />
      <GradientName
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Konsing Yukman Ham Lopez
      </GradientName>
      <Tagline
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Fullstack Software Engineer | AI Automation & LLM Systems
      </Tagline>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span>Scroll</span>
        <ScrollLine
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home;
