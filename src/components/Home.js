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
  background: #fff;

  h1 {
    font-size: 4rem;
    color: #000;
    margin: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    color: #000;
    margin: 0.5rem;
  }

  .down-arrow {
    font-size: 2rem;
    margin-top: 2rem;
    color: #000;
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
  // Separate refs and controls: h1 reanimates; the others animate once.
  const h1Controls = useAnimation();
  const otherControls = useAnimation();
  const [h1Ref, h1InView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [otherRef, otherInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (h1InView) {
      h1Controls.start('visible');
    } else {
      h1Controls.start('hidden');
    }
  }, [h1Controls, h1InView]);

  React.useEffect(() => {
    if (otherInView) {
      otherControls.start('visible');
    }
  }, [otherControls, otherInView]);

  return (
    <HomeContainer id="home">
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
