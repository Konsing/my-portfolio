// src/components/InteractiveBackground.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
`;

const generateRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});

const InteractiveBackground = () => {
  const circles = Array.from({ length: 20 }).map((_, i) => (
    <Circle
      key={i}
      style={generateRandomPosition()}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'mirror',
        delay: i * 0.2,
      }}
      size={`${Math.random() * 100 + 50}px`}
    />
  ));

  return <BackgroundContainer>{circles}</BackgroundContainer>;
};

export default InteractiveBackground;
