// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <InteractiveBackground />
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Konsing Yukman Ham Lopez
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Scroll down to learn more about me
      </motion.p>
    </HomeContainer>
  );
};

export default Home;
