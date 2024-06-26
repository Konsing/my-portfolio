// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.section`
  padding: 2rem 0;

  .skills-category {
    margin: 1rem 0;
  }

  .skills-category h3 {
    margin-bottom: 0.5rem;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;

    .skill-item {
      background: #ddd;
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 5px;
      display: flex;
      align-items: center;

      img {
        margin-right: 0.5rem;
        height: 24px;
        width: 24px;
      }
    }
  }
`;

const Skills = () => {
  const skills = {
    'Languages & Frameworks': [
      'C', 'C++', 'Python', 'Java', 'HTML/CSS', 'SQL/SQLite', 'PostgreSQL', 'Flask', 'Django', 'React', 'Node JS', 'C#'
    ],
    'Cloud & DevOps': [
      'Google Cloud Platform', 'Docker', 'MongoDB', 'AWS', 'Azure'
    ],
    'Misc. Tools': [
      'Git/GitHub', 'Jupyter Notebook', 'Bash/Shell scripting'
    ],
  };

  return (
    <SkillsContainer id="skills">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      {Object.entries(skills).map(([category, skillsList]) => (
        <motion.div
          key={category}
          className="skills-category"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>{category}</h3>
          <div className="skills-list">
            {skillsList.map(skill => (
              <motion.div
                key={skill}
                className="skill-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img src={`path_to_images/${skill.toLowerCase().replace(/ /g, '-')}.png`} alt={skill} />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
