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
  background: ${({ theme }) => theme.background};
  overflow: hidden;
`;

const Orb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  will-change: transform, opacity;
`;

const InteractiveBackground = () => {
  const orbs = [
    {
      color: 'rgba(56, 189, 248, 0.08)',
      size: 500,
      top: '10%',
      left: '20%',
      duration: 20,
    },
    {
      color: 'rgba(129, 140, 248, 0.06)',
      size: 600,
      top: '50%',
      right: '10%',
      duration: 25,
    },
    {
      color: 'rgba(56, 189, 248, 0.05)',
      size: 400,
      bottom: '10%',
      left: '50%',
      duration: 22,
    },
  ];

  return (
    <BackgroundContainer>
      {orbs.map((orb, i) => (
        <Orb
          key={i}
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default InteractiveBackground;
