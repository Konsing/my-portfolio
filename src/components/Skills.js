import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.section`
  padding: 5rem 4%;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.headingColor};
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h2 { font-size: 2rem; }
  }
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.accentGradient};
    border-radius: 1px;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  min-width: 100px;
  width: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    box-shadow: 0 0 20px ${({ theme }) => theme.glow};
    transform: translateY(-2px);
  }

  img {
    height: 3.5rem;
    width: 3.5rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0.6rem;

    img {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

const SkillLabel = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  display: inline-block;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const importAll = (r) => {
  let imgs = {};
  r.keys().forEach((item) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const skills = {
  'Languages': [
    { name: 'C', icon: 'C.svg' },
    { name: 'C++', icon: 'C++.svg' },
    { name: 'Python', icon: 'Python.svg' },
    { name: 'Java', icon: 'Java.svg' },
    { name: 'JavaScript', icon: 'JavaScript.svg' },
    { name: 'TypeScript', icon: 'TypeScript.svg' },
    { name: 'HTML', icon: 'HTML5.svg' },
    { name: 'CSS', icon: 'CSS.svg' },
    { name: 'SQL', icon: 'SQL.svg' },
    { name: 'Bash', icon: 'Bash.svg' },
  ],
  'Frameworks & Databases': [
    { name: 'Next.js', icon: 'Nextjs.svg' },
    { name: 'React', icon: 'React.svg' },
    { name: 'Django', icon: 'Django.svg' },
    { name: 'Express', icon: 'ExpressJS.svg' },
    { name: 'Flask', icon: 'Flask.svg' },
    { name: 'Node.js', icon: 'NodeJS.svg' },
    { name: 'Tailwind', icon: 'TailwindCSS.svg' },
    { name: 'Streamlit', icon: 'Streamlit.svg' },
    { name: 'PostgreSQL', icon: 'PostgreSQL.svg' },
    { name: 'MongoDB', icon: 'MongoDB.svg' },
  ],
  'Tools & Infrastructure': [
    { name: 'Git', icon: 'Git.svg' },
    { name: 'GitHub', icon: 'GitHub.svg' },
    { name: 'Docker', icon: 'Docker.svg' },
    { name: 'AWS', icon: 'AWS.svg' },
    { name: 'GCP', icon: 'GCloud.svg' },
    { name: 'GitHub Actions', icon: 'GitHub.svg' },
    { name: 'Jira', icon: 'Jira.svg' },
    { name: 'Gemini', icon: 'GoogleGemini.svg' },
    { name: 'Claude API', icon: 'Claude.svg' },
    { name: 'OpenAI', icon: 'OpenAI.svg' },
    { name: 'Groq', icon: 'Groq.svg' },
  ],
};

const letterVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.06, type: 'spring', stiffness: 300, damping: 15 }
  })
};

const categoryVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'spring', stiffness: 120 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, type: 'spring', stiffness: 200, damping: 18 }
  })
};

const bounceVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.04, type: 'spring', stiffness: 400, damping: 12 }
  })
};

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {"Skills".split('').map((char, i) => (
          <motion.span key={i} variants={letterVariants} custom={i}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
      {Object.entries(skills).map(([category, skillsList]) => (
        <CategorySection
          key={category}
          initial="hidden"
          whileInView="visible"
          variants={categoryVariants}
          viewport={{ once: true }}
        >
          <CategoryTitle
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 150 }}
            viewport={{ once: true }}
          >
            {category}
          </CategoryTitle>
          <SkillsGrid>
            {skillsList.map((skill, skillIndex) => (
              <SkillItem
                key={skill.name}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                custom={skillIndex}
                viewport={{ once: true }}
              >
                <img src={images[skill.icon]} alt={skill.name} />
                <SkillLabel>
                  {skill.name.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      variants={bounceVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={i}
                      viewport={{ once: true }}
                      style={{ display: 'inline-block' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </SkillLabel>
              </SkillItem>
            ))}
          </SkillsGrid>
        </CategorySection>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
