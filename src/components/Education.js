import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.section`
  padding: 5rem 4%;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.headingColor};
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h2 { font-size: 2rem; }
  }
`;

const EducationCard = styled(motion.a)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 16px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    box-shadow: 0 0 40px ${({ theme }) => theme.glow};
    transform: translateY(-3px);
  }

  img.logo {
    height: 6rem;
    width: 6rem;
    object-fit: contain;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }

  .institution-info {
    flex: 1;
    text-align: left;

    h3 {
      font-size: 1.35rem;
      font-weight: 600;
      color: ${({ theme }) => theme.headingColor};
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.textMuted};
      line-height: 1.5;
    }
  }

  .institution-images {
    display: flex;
    gap: 0.75rem;
    flex-shrink: 0;

    img {
      height: 11rem;
      width: auto;
      border-radius: 10px;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    img.logo {
      height: 3.5rem;
      width: 3.5rem;
      margin-right: 0;
    }

    .institution-info {
      h3 { font-size: 1.15rem; }
      p { font-size: 0.875rem; }
    }

    .institution-images {
      width: 100%;
      overflow-x: auto;

      img {
        height: 7rem;
      }
    }
  }
`;

const importAll = (r) => {
  let imgs = {};
  r.keys().forEach((item) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const Education = () => {
  return (
    <EducationContainer id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <EducationCard
        href="https://www.ucdavis.edu/"
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
      >
        <img src={images['UCD.png']} alt="UC Davis Logo" className="logo" />
        <div className="institution-info">
          <h3>University of California, Davis</h3>
          <p>Bachelor of Science in Computer Science</p>
        </div>
        <div className="institution-images">
          <img src={images['UCDavis.jpg']} alt="UC Davis Campus" />
          <img src={images['UCDavis2.jpg']} alt="UC Davis Campus 2" />
          <img src={images['UCDavis3.jpg']} alt="UC Davis Campus 3" />
        </div>
      </EducationCard>

      <EducationCard
        href="https://www.berkeleycitycollege.edu/"
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
      >
        <img src={images['BCC.png']} alt="Berkeley City College Logo" className="logo" />
        <div className="institution-info">
          <h3>Berkeley City College</h3>
          <p>Associate of Science in Mathematics</p>
        </div>
        <div className="institution-images">
          <img src={images['BCCollege.jpg']} alt="Berkeley City College Campus" />
          <img src={images['BCCollege2.jpg']} alt="Berkeley City College Campus 2" />
          <img src={images['BCCollege3.jpg']} alt="Berkeley City College Campus 3" />
        </div>
      </EducationCard>

      <EducationCard
        href="https://ochs.amethodschools.org/"
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
      >
        <img src={images['OCHS.png']} alt="Oakland Charter High School Logo" className="logo" />
        <div className="institution-info">
          <h3>Oakland Charter High School</h3>
          <p>High School Diploma</p>
        </div>
        <div className="institution-images">
          <img src={images['OCHS1.jpg']} alt="Oakland Charter High School" />
          <img src={images['OCHS2.jpg']} alt="Oakland Charter High School 2" />
          <img src={images['OCHS3.jpg']} alt="Oakland Charter High School 3" />
        </div>
      </EducationCard>
    </EducationContainer>
  );
};

export default Education;
