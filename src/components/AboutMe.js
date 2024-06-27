import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const AboutMeContainer = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  border-radius: 10px;
  margin: 2rem auto;
  text-align: center;
  max-width: 800px;

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
    justify-content: center;
    gap: 1.5rem;

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
`;

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        type: 'spring',
        stiffness: 100
      } 
    }
  };

  return (
    <AboutMeContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello! I'm Konsing Ham, a passionate software developer with experience in building web applications using modern technologies. I love learning new things and solving complex problems.
      </motion.p>
      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="https://www.linkedin.com/in/konsingham/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
        <a href={`my-portfolio/public/resume.pdf`} download>
          <FaFileDownload className="icon" /> Resume
        </a>
        <a href="https://github.com/Konsing" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
      </motion.div>
    </AboutMeContainer>
  );
};

export default AboutMe;
