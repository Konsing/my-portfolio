import React from 'react';
import styled from 'styled-components'; // Removed keyframes as it's not used
import { motion } from 'framer-motion';

const EducationContainer = styled.section`
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

  .education-item {
    margin: 2rem 0.5rem;
    padding: 1rem;
    background: linear-gradient(170deg, #c2e9fb, #a1c4fd);
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    transition: transform 0.3s;
    cursor: pointer;
    text-decoration: none;
    position: relative; /* For overlay positioning */

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
        font-size: 2.2rem; /* Slightly increased font size */
        margin-bottom: 0.5rem;
        color: #333;
      }

      p {
        font-size: 1.2rem; /* Slightly increased font size */
        color: #333;
      }

      .gpa {
        font-size: 1.2rem; /* Ensure GPA is visible */
        font-weight: bold;
        color: #000; /* Darker color for better visibility */
      }
    }

    .institution-images {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;

      img {
        height: 13rem;
        width: auto;
        margin: 0.5rem;
        position: relative;
        z-index: 1; /* Ensure overlay is on top */
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h2 {
      font-size: 2rem;
    }

    .education-item {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      img.logo {
        height: 4rem;
      }

      .institution-info {
        h3 {
          font-size: 1.5rem;
        }

        p, .gpa {
          font-size: 1rem;
        }
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
  background: rgba(0, 0, 0, 0.5); /* Adjust color and opacity as needed */
  z-index: 2;
`;

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const Education = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        type: 'spring',
        stiffness: 100
      } 
    }
  };

  const overlayVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 0, 
      transition: { 
        duration: .80,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <EducationContainer id="education">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Education
      </motion.h2>
      <motion.a
        href="https://www.ucdavis.edu/"
        className="education-item"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="institution-info">
          <img src={images['UCD.png']} alt="UC Davis Logo" className="logo" />
          <h3>University of California, Davis</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p className="gpa">Total GPA: 3.63</p>
        </div>
        <div className="institution-images">
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['UCDavis.jpg']} alt="UC Davis Campus" />
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['UCDavis2.jpg']} alt="UC Davis Campus 2" />
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['UCDavis3.jpg']} alt="UC Davis Campus 3" />
        </div>
      </motion.a>
      <motion.a
        href="https://www.berkeleycitycollege.edu/"
        className="education-item"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="institution-info">
          <img src={images['BCC.png']} alt="Berkeley City College Logo" className="logo" />
          <h3>Berkeley City College</h3>
          <p>Associate of Science in Mathematics</p>
          <p className="gpa">Total GPA: 3.97</p>
        </div>
        <div className="institution-images">
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['BCCollege.jpg']} alt="Berkeley City College Campus" />
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['BCCollege2.jpg']} alt="Berkeley City College Campus 2" />
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['BCCollege3.jpg']} alt="Berkeley City College Campus 3" />
        </div>
      </motion.a>
      <motion.a
        href="https://ochs.amethodschools.org/"
        className="education-item"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="institution-info">
          <img src={images['OCHS.png']} alt="Oakland Charter High School Logo" className="logo" />
          <h3>Oakland Charter High School</h3>
          <p>High School Diploma</p>
          <p className="gpa">Total GPA: 3.92</p>
        </div>
        <div className="institution-images">
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['OCHS1.jpg']} alt="Oakland Charter High School" />
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['OCHS2.jpg']} alt="Oakland Charter High School 2" />
          <Overlay
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          />
          <img src={images['OCHS3.jpg']} alt="Oakland Charter High School 3" />
        </div>
      </motion.a>
    </EducationContainer>
  );
};

export default Education;
