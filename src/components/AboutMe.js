import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const AboutMeContainer = styled(motion.section)`
  padding: 3rem 2rem;
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  border-radius: 10px;
  margin: 2rem auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: black;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.2rem;
    color: #333;
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
      padding: 0.75rem 1.5rem;
      font-size: 1.2rem;
      color: white;
      background: #4b79a1;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 2rem 4rem;
      transition: background 0.3s, transform 0.3s;
      text-decoration: none;

      &:hover {
        background: #3b688f;
        transform: scale(1.05);
      }

      .icon {
        margin-right: 0.5rem;
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
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    img {
      height: 100px;
    }
  }
`;

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
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
      transition: { 
        duration: 0.76,
        type: 'spring',
        stiffness: 100
      } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.4,
        type: 'spring',
        stiffness: 100
      } 
    }
  };

  const reelVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.75,
        delay: 0.6
      } 
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
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .80 }}
      >
        Hello! I'm Konsing Ham Lopez, a dedicated software developer with a strong foundation in software engineering and 
        a passion for tackling challenging projects. I thrive on learning new technologies and quickly adapting to 
        unfamiliar tools and frameworks. My experience spans software engineering and DevOps practices. Outside of coding, 
        I enjoy gaming, watching films/shows, and spending time with family.
      </motion.p>
      <PhotoReel>
        <ReelContainer
          initial="hidden"
          animate={controls}
          variants={reelVariants}
        >
          {[...imageNames, ...imageNames].map((image, index) => (
            <img key={index} src={images[image]} alt={`Konsing ${index + 1}`} />
          ))}
        </ReelContainer>
      </PhotoReel>
      <motion.div
        className="buttons"
        initial="hidden"
        animate={controls}
        variants={buttonVariants}
      >
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
          href={`resume.pdf`}
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFileDownload className="icon" /> Resume
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
