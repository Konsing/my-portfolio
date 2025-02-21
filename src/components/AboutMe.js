import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const AboutMeContainer = styled(motion.section)`
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 10px;
  margin: 2rem auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #000;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.2rem;
    color: #000;
    margin-bottom: 1.5rem;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.85rem 1.75rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      background: #000;
      border: 1px solid #000;
      border-radius: 50px;
      cursor: pointer;
      margin: 1rem 2rem;
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

      &:hover {
        background: #fff;
        color: #000;
        transform: scale(1.08);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
      }

      &:active {
        transform: scale(0.95);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      }

      .icon {
        margin-right: 0.6rem;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .buttons {
      flex-direction: column;
      gap: 0.5rem;

      a {
        font-size: 1rem;
        margin: 0;
      }
    }
  }
`;

const reelAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const PhotoReel = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 2rem 0;
`;

const ReelContainer = styled(motion.div)`
  display: flex;
  animation: ${reelAnimation} 20s linear infinite;
  width: calc(200px * 11 * 2);
  transform: translateX(0);
  img {
    height: 200px;
    margin-right: 0; /* Removed margin to prevent shaking */
  }

  @media (max-width: 768px) {
    img {
      height: 100px;
    }
  }
`;

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', stiffness: 100 }
    }
  };

  const reelVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 }
    }
  };

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };

  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
  const imageNames = Object.keys(images).filter(name => name.startsWith('Konsing')).sort();

  return (
    <AboutMeContainer
      id="aboutMe"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      ref={ref}
    >
      <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
        About Me
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Hello! I'm Konsing Ham Lopez, a software developer passionate about building efficient and scalable solutions.
        With a strong foundation in backend development and system architecture, I enjoy tackling complex projects and
        adapting to new technologies. My experience spans full-stack development, cloud infrastructure, and automation.
        Beyond coding, I love gaming, watching films, and spending quality time with family.
      </motion.p>
      <PhotoReel>
        <ReelContainer initial="hidden" animate={controls} variants={reelVariants}>
          {[...imageNames, ...imageNames].map((image, index) => (
            <img key={index} src={images[image]} alt={`Konsing ${index + 1}`} />
          ))}
        </ReelContainer>
      </PhotoReel>
      <motion.div initial="hidden" animate={controls} variants={buttonVariants} className="buttons">
        <motion.a
          href="https://www.linkedin.com/in/konsingham/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="icon" /> LinkedIn
        </motion.a>
        <motion.a
          href="https://github.com/Konsing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="icon" /> GitHub
        </motion.a>
        <motion.a
          href="mailto:ham.konsing@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaEnvelope className="icon" /> Email
        </motion.a>
      </motion.div>
    </AboutMeContainer>
  );
};

export default AboutMe;
