import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const wiggle = keyframes`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
`;

const bounce = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { transform: translateY(20%); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
`;

const SkillsContainer = styled.section`
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  margin: 2rem auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #000;
  }

  .skills-category {
    margin: 2rem 0;

    h3 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #000;
    }
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .skill-item {
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
      background: #fff;
      border: 1px solid #000;
      transition: transform 0.3s;

      &:hover {
        animation: ${wiggle} 0.5s infinite;
      }

      img {
        margin-bottom: 0.5rem;
        height: 6rem;
        width: 6rem;
      }

      span {
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        display: inline-block;
        animation: ${bounce} 1s forwards;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .skills-list {
      .skill-item {
        width: 100px;

        img {
          height: 4rem;
          width: 4rem;
        }

        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const Skills = () => {
  const skills = {
    'Programming Languages': [
      'C.svg', 'C++.svg', 'Python.svg', 'Java.svg', 'JavaScript.svg', 'TypeScript.svg'
    ],
    'Web Development': [
      'HTML5.svg', 'CSS.svg', 'React.svg', 'NodeJS.svg', 'Flask.svg', 'Django.svg', 'Express.jpg', 'Handlebars.jpg'
    ],
    'Databases': [
      'SQL.svg', 'SQLite.svg', 'PostgreSQL.svg', 'MongoDB.svg'
    ],
    'Cloud & DevOps': [
      'GCloud.svg', 'Docker.svg', 'AWS.svg', 'Azure.svg'
    ],
    'Tools': [
      'GitHub.svg', 'Git.svg', 'Bash.svg', 'Json.svg', 'Selenium.png'
    ],
  };

  const letterVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.075, type: 'spring', stiffness: 400 }
    })
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <SkillsContainer id="skills">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      {Object.entries(skills).map(([category, skillsList]) => (
        <motion.div
          key={category}
          className="skills-category"
          initial="hidden"
          whileInView="visible"
          variants={categoryVariants}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {category}
          </motion.h3>
          <div className="skills-list">
            {skillsList.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                className="skill-item"
                initial="hidden"
                whileInView="visible"
                variants={letterVariants}
                custom={skillIndex}
                viewport={{ once: true }}
              >
                <img src={images[skill]} alt={skill.replace('.svg', '').replace('.jpg', '').replace('.png', '')} />
                <span>
                  {skill
                    .replace('.svg', '')
                    .replace('.jpg', '')
                    .replace('.png', '')
                    .split('')
                    .map((char, i) => (
                      <motion.span key={i} variants={letterVariants} custom={i}>
                        {char}
                      </motion.span>
                    ))}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
