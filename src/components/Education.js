// Education.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.section`
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  margin: 2rem auto;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.headingColor};
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  }

  .education-item {
    margin: 2rem 0.5rem;
    padding: 1rem;
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    transition: transform 0.3s;
    cursor: pointer;
    text-decoration: none;
    position: relative;

    &:hover {
      transform: scale(1.02);
    }

    img.logo {
      margin: 1rem;
      height: 6rem;
      width: auto;
    }

    .institution-info {
      flex: 1;
      text-align: left;

      h3 {
        font-size: 2.2rem;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.headingColor};
      }

      p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.text};
      }

      .gpa {
        font-size: 1.2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.text};
      }
    }

    .institution-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      img {
        height: 13rem;
        width: auto;
        margin: 0.5rem;
        position: relative;
        z-index: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h2 { font-size: 2rem; }

    .education-item {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      img.logo { height: 4rem; }

      .institution-info {
        h3 { font-size: 1.5rem; }
        p, .gpa { font-size: 1rem; }
      }

      .institution-images {
        flex-direction: column;

        img {
          height: 8rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.05);
  z-index: 2;
`;

const importAll = (r) => {
  let imgs = {};
  r.keys().forEach((item) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, type: 'spring', stiffness: 100 } }
  };

  const overlayVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  return (
    <EducationContainer id="education">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <motion.a
        href="https://www.ucdavis.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="education-item"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
      >
        <div className="institution-info">
          <img src={images['UCD.png']} alt="UC Davis Logo" className="logo" />
          <h3>University of California, Davis</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p className="gpa">Total GPA: 3.63</p>
        </div>
        <div className="institution-images">
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['UCDavis.jpg']} alt="UC Davis Campus" />
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['UCDavis2.jpg']} alt="UC Davis Campus 2" />
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['UCDavis3.jpg']} alt="UC Davis Campus 3" />
        </div>
      </motion.a>
      <motion.a
        href="https://www.berkeleycitycollege.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="education-item"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
      >
        <div className="institution-info">
          <img src={images['BCC.png']} alt="Berkeley City College Logo" className="logo" />
          <h3>Berkeley City College</h3>
          <p>Associate of Science in Mathematics</p>
          <p className="gpa">Total GPA: 3.97</p>
        </div>
        <div className="institution-images">
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['BCCollege.jpg']} alt="Berkeley City College Campus" />
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['BCCollege2.jpg']} alt="Berkeley City College Campus 2" />
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['BCCollege3.jpg']} alt="Berkeley City College Campus 3" />
        </div>
      </motion.a>
      <motion.a
        href="https://ochs.amethodschools.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="education-item"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
      >
        <div className="institution-info">
          <img src={images['OCHS.png']} alt="Oakland Charter High School Logo" className="logo" />
          <h3>Oakland Charter High School</h3>
          <p>High School Diploma</p>
          <p className="gpa">Total GPA: 3.92</p>
        </div>
        <div className="institution-images">
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['OCHS1.jpg']} alt="Oakland Charter High School" />
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['OCHS2.jpg']} alt="Oakland Charter High School 2" />
          <Overlay initial="hidden" animate="visible" variants={overlayVariants} />
          <img src={images['OCHS3.jpg']} alt="Oakland Charter High School 3" />
        </div>
      </motion.a>
    </EducationContainer>
  );
};

export default Education;
