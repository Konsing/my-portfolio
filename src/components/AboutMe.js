import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const AboutMeContainer = styled(motion.section)`
  padding: 5rem 4%;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.headingColor};
  }

  .bio-card {
    max-width: 1000px;
    margin: 0 auto 2.5rem;
    padding: 2rem 2.5rem;
    background: ${({ theme }) => theme.surface};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 16px;
    text-align: left;

    p {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.textMuted};
      line-height: 1.85;
      font-weight: 400;
    }

    p + p {
      margin-top: 0.85rem;
    }

    strong {
      color: ${({ theme }) => theme.accentPrimary};
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h2 { font-size: 2rem; }
    .bio-card { padding: 1.5rem; }
    .bio-card p { font-size: 0.95rem; }
  }
`;

const Buttons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

const LinkButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.borderHover};
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.01em;

  .icon {
    font-size: 1.15rem;
    color: ${({ theme }) => theme.accentPrimary};
  }

  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.accentPrimary};
    box-shadow: 0 0 20px ${({ theme }) => theme.glow};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const reelAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const PhotoReel = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 2.5rem 0;
  border-radius: 12px;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
`;

const ReelContainer = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  animation: ${reelAnimation} 25s linear infinite;
  width: max-content;

  img {
    height: 180px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img { height: 100px; }
  }
`;

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const reelVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
  };

  const importAll = (r) => {
    let imgs = {};
    r.keys().forEach((item) => { imgs[item.replace('./', '')] = r(item); });
    return imgs;
  };

  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
  const imageNames = Object.keys(images).filter(name => name.startsWith('Konsing')).sort();

  return (
    <AboutMeContainer id="aboutMe" initial="hidden" animate={controls} variants={containerVariants} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="bio-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <p>
          Hello! I'm <strong>Konsing Ham Lopez</strong>, a fullstack software engineer with a focus on AI automation and LLM-powered systems.
        </p>
        <p>
          I build end-to-end products — from backend APIs and cloud infrastructure to polished frontends — with a growing specialty in
          designing AI pipelines, agent orchestration, and integrations with models like Gemini, Claude, and GPT.
        </p>
        <p>
          Beyond coding, I love gaming, watching films, and spending quality time with family.
        </p>
      </motion.div>

      <PhotoReel>
        <ReelContainer initial="hidden" animate={controls} variants={reelVariants}>
          {[...imageNames, ...imageNames].map((image, index) => (
            <img key={index} src={images[image]} alt={`Konsing ${index + 1}`} />
          ))}
        </ReelContainer>
      </PhotoReel>

      <Buttons
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <LinkButton
          href="https://www.linkedin.com/in/konsingham/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaLinkedin className="icon" /> LinkedIn
        </LinkButton>
        <LinkButton
          href="https://github.com/Konsing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaGithub className="icon" /> GitHub
        </LinkButton>
        <LinkButton
          href="mailto:ham.konsing@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaEnvelope className="icon" /> Email
        </LinkButton>
      </Buttons>
    </AboutMeContainer>
  );
};

export default AboutMe;
