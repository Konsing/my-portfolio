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
    color: black;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    text-align: center;
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
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(0deg, #f9f6ff, #a1ffce);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #333;
      text-align: center;
    }

    ul {
      list-style-type: disc;
      margin-left: 20px;
      font-size: 1.2rem;
      text-align: left;
      color: rgb(0, 0, 0);
      border-radius: 30px;
    }

    .technologies {
      margin-top: 1rem;
      font-size: 1.2rem;
      color: #333;
      font-weight: bold;
    }
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
    technologies: ["Python", "Apache Airflow", "Google APIs", "Streamlit", "Google Cloud Platform (GCP)"],
    image: "path_to_your_image_1.jpg" // Replace with the actual image path
  },
  {
    title: "Blog Platform Development (Full Stack)",
    description: [
      "Built a blog application with Node.js and Handlebars.",
      "Implemented Google OAuth for authentication.",
      "Utilized AJAX for dynamic updates.",
      "Stored data with SQLite and Dockerized the app."
    ],
    technologies: ["Node.js", "Express", "Handlebars", "HTML", "CSS", "JavaScript", "Google OAuth", "AJAX", "SQLite", "Docker"],
    image: "path_to_your_image_2.jpg" // Replace with the actual image path
  },
  {
    title: "Artificial Neural Network Model with Website Integration",
    description: [
      "Developed ANN for heart disease risk.",
      "Created a web interface for user input.",
      "Achieved 82.95% accuracy in predictions.",
      "Managed data from 1190 observations."
    ],
    technologies: ["TensorFlow", "Python", "HTML", "CSS"],
    image: "path_to_your_image_3.jpg" // Replace with the actual image path
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
    image: "path_to_your_image_4.jpg" // Replace with the actual image path
  }
];

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  };

  return (
    <ProjectsContainer id="projects">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }} // Increased duration by 20%
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial="hidden"
            whileInView="visible"
            variants={index % 2 === 0 ? projectVariants : fadeInUp}
          >
            <img src={project.image} alt={project.title} />
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
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
