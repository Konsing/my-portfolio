import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 2rem 0;
  background: linear-gradient(120deg, #a1ffce, #f9f6ff);
  border-radius: 10px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #black;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .project-item {
    margin: 1.5rem auto;
    padding: 1.5rem;
    linear-gradient(0deg, #f9f6ff, #a1ffce);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 800px;
  }

  .technologies {
    margin-top: 1rem;
    font-size: 1.20rem;
    color: #333;
    font-weight: bold;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    font-size: 1.5rem;
    text-align: left;
    color: rgb(0, 0, 0);
    border-radius: 30px;
  }
`;

const projects = [
  {
    title: "UC Davis EcoCAR Electric Vehicle",
    description: [
      "Automated onboarding/offboarding with Python and Google APIs.",
      "Created real-time dashboards with Streamlit.",
      "Integrated Google OAuth2 and Gmail API for communications.",
      "Deployed solutions on GCP."
    ],
    technologies: ["Python", "Apache Airflow", "Google APIs", "Streamlit", "Google Cloud Platform (GCP)"]
  },
  {
    title: "Blog Platform Development (Full Stack)",
    description: [
      "Built a blog application with Node.js and Handlebars.",
      "Implemented Google OAuth for authentication.",
      "Utilized AJAX for dynamic updates.",
      "Stored data with SQLite and Dockerized the app."
    ],
    technologies: ["Node.js", "Express", "Handlebars", "HTML", "CSS", "JavaScript", "Google OAuth", "AJAX", "SQLite", "Docker"]
  },
  {
    title: "Artificial Neural Network Model with Website Integration",
    description: [
      "Developed ANN for heart disease risk.",
      "Created a web interface for user input.",
      "Achieved 82.95% accuracy in predictions.",
      "Managed data from 1190 observations."
    ],
    technologies: ["TensorFlow", "Python", "HTML", "CSS"]
  },
  {
    title: "MS-FAT Variant Development (File System in C)",
    description: [
      "Created a file system in C.",
      "Managed 128 files with 32 open file descriptors.",
      "Implemented a FAT for data tracking.",
      "Improved performance and data integrity."
    ],
    technologies: ["C"]
  }
];

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
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <h3>{project.title}</h3>
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
    </ProjectsContainer>
  );
};

export default Projects;
