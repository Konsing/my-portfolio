// Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InteractiveBackground from './InteractiveBackground';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  background: ${({ theme }) => theme.background};
  position: relative;

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.headingColor};
    margin: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin: 0.5rem;
  }

  .down-arrow {
    font-size: 2rem;
    margin-top: 2rem;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    h1 { font-size: 3rem; }
    p { font-size: 1.2rem; }
    .down-arrow { font-size: 1.5rem; }
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 1001;
  transition: background 0.3s ease, color 0.3s ease;
`;

const Home = ({ toggleTheme }) => {
  const h1Controls = useAnimation();
  const otherControls = useAnimation();
  const [h1Ref, h1InView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [otherRef, otherInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    h1InView ? h1Controls.start('visible') : h1Controls.start('hidden');
  }, [h1Controls, h1InView]);

  React.useEffect(() => {
    if (otherInView) otherControls.start('visible');
  }, [otherControls, otherInView]);

  return (
    <HomeContainer id="home">
      <ToggleButton onClick={toggleTheme}>Toggle Mode</ToggleButton>
      <InteractiveBackground />
      <motion.h1
        ref={h1Ref}
        initial="hidden"
        animate={h1Controls}
        variants={{
          hidden: { scale: 0.5, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } }
        }}
      >
        Konsing Yukman Ham Lopez
      </motion.h1>
      <motion.p
        ref={otherRef}
        initial={{ y: 50, opacity: 0 }}
        animate={otherControls}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Scroll down to learn more about me
      </motion.p>
      <motion.div
        className="down-arrow"
        initial={{ opacity: 0 }}
        animate={otherControls}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        ↓
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
