// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 2rem 0;

  .project-item {
    margin: 1rem 0;
    padding: 1rem;
    background: #eee;
    border-radius: 5px;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className="project-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <h3>Project {index + 1}</h3>
          <p>Description of project {index + 1}</p>
        </motion.div>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
