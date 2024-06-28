// src/components/Home.js
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

  h1 {
    font-size: 4rem;
    color: #fff;
    margin: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.5rem;
    color: #fff;
    margin: 0.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .down-arrow {
    font-size: 2rem;
    margin-top: 2rem;
    color: #fff;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }

    .down-arrow {
      font-size: 1.5rem;
    }
  }
`;

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <HomeContainer id="home" ref={ref}>
      <InteractiveBackground />
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0.5, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
        }}
      >
        Konsing Yukman Ham Lopez
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
        }}
      >
        Scroll down to learn more about me
      </motion.p>
      <motion.div
        className="down-arrow"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
        }}
      >
        ↓
      </motion.div>
    </HomeContainer>
  );
};

export default Home;
