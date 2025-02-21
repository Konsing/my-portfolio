// Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 2rem 0;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.headingColor};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 2rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .project-item {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.6);
    max-width: 400px;
    transition: transform 0.15s ease-in-out;
    cursor: pointer;
    min-height: 500px;

    &:hover {
      transform: scale(1.05);
    }

    &:hover img {
      transform: rotate(3deg);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 1rem;
      transition: transform 0.15s ease-in-out;
    }

    h3 {
      font-family: "Trebuchet MS", sans-serif;
      font-size: 2rem;
      margin-bottom: 1px;
      color: ${({ theme }) => theme.headingColor};
      text-align: center;
    }

    ul {
      list-style-type: disc;
      margin-left: 20px;
      font-size: 1.2rem;
      text-align: left;
      color: ${({ theme }) => theme.text};
      border-radius: 30px;
      margin-bottom: 1rem; /* Extra spacing between bullet list and technologies */
    }

    .technologies {
      margin-top: auto;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.headingColor};  /* Changed color */
      font-weight: bold;
    }
  }

  .info-text {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 8px;
    display: inline-block;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.15s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h2 { font-size: 2rem; }
    p { font-size: 1rem; }
    .projects-grid { grid-template-columns: 1fr; }
    .project-item {
      max-width: 100%;
      h3 { font-size: 1.5rem; }
      ul { font-size: 1rem; }
      .technologies { font-size: 1rem; }
    }
  }
`;

const importAll = (r) => {
  let imgs = {};
  r.keys().forEach((item) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const projects = [
  {
    title: "Criterion Collection Stremio Add-on",
    description: [
      "Stremio add-on for browsing the Criterion Collection.",
      "Scrapes movie metadata dynamically using Selenium.",
      "Displays posters and integrates seamlessly with Stremio.",
      "Deployed on Render for public access."
    ],
    technologies: ["JavaScript", "Node.js", "Stremio Add-on SDK", "Selenium", "Flask", "Docker"],
    image: images['CriterionAddon.png'],
    link: "https://github.com/Konsing/Criterion_Collection_Add-On_Stremio"
  },
  {
    title: "AI-Powered Resume Generator",
    description: [
      "AI-driven resume analysis for ATS optimization.",
      "Provides keyword suggestions and formatting improvements.",
      "Built with OpenAI API, Flask, and React.",
      "Real-time resume feedback based on job descriptions."
    ],
    technologies: ["Python", "Flask", "React", "OpenAI API", "PostgreSQL", "OAuth2", "Docker"],
    image: images['AI_Resume.png'],
    link: "https://github.com/Konsing/AI-Powered_Resume_Optimizer"
  },
  {
    title: "UC Davis EcoCAR Electric Vehicle",
    description: [
      "Automated onboarding/offboarding with Python and Google APIs.",
      "Created real-time dashboards with Streamlit.",
      "Integrated Google OAuth2 and Gmail API for communications.",
      "Deployed solutions on GCP."
    ],
    technologies: ["Python", "Apache Airflow", "Google APIs", "Streamlit", "Google Cloud Platform (GCP)"],
    image: images['ECSite.jpg'],
    link: "https://github.com/Konsing/EcoCar-Automation"
  },
  {
    title: "Punch Hell - Bullet Hell Game",
    description: [
      "Developed a bullet hell game called 'Punch Hell'",
      "Utilized C#/Unity for assembling the entire game's SFX and music."
    ],
    technologies: ["Unity", "C#"],
    image: images['PHGame.jpg'],
    link: "https://github.com/Konsing/Punch-Hell-Game_Unity"
  },
  {
    title: "Yappin' Blog Platform Development",
    description: [
      "Built a blog application with Node.js and Handlebars.",
      "Implemented Google OAuth for authentication.",
      "Utilized AJAX for dynamic updates.",
      "Stored data with SQLite and Dockerized the app."
    ],
    technologies: ["Node.js", "Express", "Handlebars", "HTML", "CSS", "JavaScript", "Google OAuth", "AJAX", "SQLite", "Docker"],
    image: images['BSite.jpg'],
    link: "https://github.com/Konsing/Yappin-Blog-Site_Full_Stack"
  },
  {
    title: "Artificial Neural Network Model with Website Integration",
    description: [
      "Developed ANN for heart disease risk.",
      "Created a web interface for user input.",
      "Achieved 82.95% accuracy in predictions.",
      "Managed data from 1190 observations."
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "TensorFlow", "Sci-Kit", "Seaborn"],
    image: images['ANNSite.jpg'],
    link: "https://github.com/Konsing/Heart-Risk-ANN-Model_Website"
  },
  {
    title: "Game Arcade Website",
    description: [
      "Connect4: Implemented from scratch, fully functional with dedicated CSS, JS, and HTML files.",
      "2048: Implemented from scratch, works as expected with separate files for CSS, JavaScript, and HTML.",
      "Minesweeper: Adapted from an existing repository with UI adjustments, flag system improvements, and game dynamic enhancements."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Handlebars"],
    image: images['GameArcade.jpg'],
    link: "https://github.com/Konsing/Game-Arcade-Site_2048_Minesweeper_Connect4"
  },
  {
    title: "Connect 4 AI Agents and Game Simulator",
    description: [
      "Implemented various AI agents and a game simulator for Connect 4.",
      "Included strategies: random moves, minimax algorithm, alpha-beta pruning, and Monte Carlo simulations.",
      "Scripts to run and evaluate the performance of these AI agents in a series of games."
    ],
    technologies: ["Python", "Jupyter Notebook", "Pygame"],
    image: images['Connect4AI.png'],
    link: "https://github.com/Konsing/Connect-4-AI-Agents-and-Game-Simulator"
  },
  {
    title: "MS-FAT Variant Development (File System in C)",
    description: [
      "Created a file system in C.",
      "Managed 128 files with 32 open file descriptors.",
      "Implemented a FAT for data tracking.",
      "Improved performance and data integrity."
    ],
    technologies: ["C"],
    image: images['FSSite.png'],
    link: "https://github.com/Konsing/File_System_MS-FAT-Variant"
  },
  {
    title: "Simple Shell Implementation in C",
    description: [
      "Implemented a simple shell in C.",
      "Supports command execution, built-in commands (`exit`, `cd`, `pwd`), output redirection, and piping.",
      "Built-in `ls`-like command (`sls`)."
    ],
    technologies: ["C"],
    image: images['sshell.jpg'],
    link: "https://github.com/Konsing/sshell-Simple-Shell-Implementation-in-C-Linux-Bash-"
  },
  {
    title: "Java MySQL Banking Application",
    description: [
      "Developed a simple banking application using Java and MySQL.",
      "Performed basic CRUD operations.",
      "Tested with multiple Java classes for database operations."
    ],
    technologies: ["Java", "MySQL", "JDBC"],
    image: images['Banking.jpg'],
    link: "https://github.com/Konsing/Java-MySQL-Banking-Application"
  },
  {
    title: "Web Crawler with BrowserMob Proxy and Selenium",
    description: [
      "Implemented a web crawler using BrowserMob Proxy and Selenium.",
      "Captured network traffic in HAR format.",
      "Handled 1,000,000 URLs with proper error logging."
    ],
    technologies: ["Python", "Selenium", "BrowserMob Proxy"],
    image: images['WebCrawler.jpg'],
    link: "https://github.com/Konsing/Web-Crawler-with-BrowserMob-Proxy-and-Selenium"
  },
  {
    title: "Portfolio Website",
    description: [
      "Developed and published a personal portfolio website using GitHub Pages.",
      "Utilized React for dynamic content rendering, styled-components for custom styling, and framer-motion for animations."
    ],
    technologies: ["React", "GitHub Pages", "HTML", "CSS", "JavaScript", "Styled-components", "Framer-Motion"],
    image: images['PSite.jpg'],
    link: "https://github.com/Konsing/my-portfolio"
  }
];

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.15, type: 'spring', stiffness: 100 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.15, type: 'spring', stiffness: 100 } }
  };

  return (
    <ProjectsContainer id="projects">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <p className="info-text">🚀 Click on a project to view more details on GitHub! 🔗</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial="hidden"
            whileInView="visible"
            variants={index % 2 === 0 ? projectVariants : fadeInUp}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(project.link, "_blank")}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <ul>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="technologies">
              Technologies Used: {project.technologies.join(', ')}
            </div>
          </motion.div>
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
