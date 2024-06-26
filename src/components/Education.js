// src/components/Education.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.section`
  padding: 2rem 0;

  .education-item {
    margin: 1rem 0;
    padding: 1rem;
    background: #eee;
    border-radius: 5px;
  }
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="education-item"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3>University 1</h3>
        <p>Details about university 1</p>
      </motion.div>
      <motion.div
        className="education-item"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3>University 2</h3>
        <p>Details about university 2</p>
      </motion.div>
    </EducationContainer>
  );
};

export default Education;
