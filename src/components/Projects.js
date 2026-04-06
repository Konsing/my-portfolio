import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 5rem 4%;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.headingColor};
  }

  .subtitle {
    font-size: 1rem;
    color: ${({ theme }) => theme.textMuted};
    margin-bottom: 3rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h2 { font-size: 2rem; }
    .projects-grid { grid-template-columns: 1fr; }
  }
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 16px;
  width: 100%;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  min-height: 480px;
  text-align: left;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    box-shadow: 0 0 40px ${({ theme }) => theme.glow};
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 1.25rem;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: rotate(2deg) scale(1.02);
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.accentPrimary};
    line-height: 1.3;
  }

  ul {
    list-style: none;
    margin: 0 0 1.25rem 0;
    padding: 0;
    flex: 1;

    li {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.text};
      line-height: 1.7;
      padding-left: 1rem;
      position: relative;
      margin-bottom: 0.35rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.6em;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${({ theme }) => theme.accentPrimary};
      }
    }
  }
`;

const TechPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
`;

const Pill = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.surfaceHover};
  color: ${({ theme }) => theme.accentPrimary};
  border: 1px solid ${({ theme }) => theme.borderColor};
  letter-spacing: 0.01em;
`;

const importAll = (r) => {
  let imgs = {};
  r.keys().forEach((item) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
};

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const projects = [
  {                                                                                                         
    title: "RAG Knowledge Assistant",
    description: [                                                                                        
      "From-scratch RAG system — no LangChain. Custom chunking, embedding, retrieval, and cited generation.",                                                                                             
      "MCP server with auto-research tools that search ArXiv/web, ingest results, and answer in one call.",                                                                                                   
      "Section-aware chunking for academic papers, trafilatura extraction for web pages, 5 document types.",                                                                                                  
      "React chat UI, FastAPI backend, Qdrant vectors, configurable LLM (OpenAI or Claude)."       
    ],                                                                                                    
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Qdrant", "sentence-transformers", "MCP SDK", "OpenAI API", "Tailwind CSS", "Docker"],                                                            
    image: images['RAG.png'],                                                                  
    link: "https://github.com/Konsing/rag-knowledge-assistant"                                            
  },
  {
    title: "Voice-Powered AI Assistant",
    description: [
      "Real-time voice conversations with AI using browser-native Speech APIs and Groq LLM.",
      "Three animated companion themes with immersive ambient effects and particle animations.",
      "25+ language support, customizable TTS voices, and conversation export/import.",
      "Password-gated access, sections navigation, and a built-in system guide."
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Groq API", "Web Speech API", "Web Audio API",
      "Vercel"],
    image: images['VoiceAssistant.png'],
    link: "https://github.com/Konsing/Voice-Powered-Ai-Agents"
  },
  {
    title: "AI Inbox Automation — Email Classification Pipeline",
    description: [
      "Connects to Gmail via OAuth and classifies emails using Google Gemini in a single API call.",
      "Real-time pipeline visualization streamed to the browser via Server-Sent Events.",
      "Posts Slack digest notifications and skips already-classified emails to save API budget.",
      "Demo mode with live activity feed, run summary dashboard, and persistent history."
    ],
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Google Gemini", "Gmail API", "Supabase", "Slack Webhooks", "Vercel"],
    image: images['InboxAutomation.png'],
    link: "https://github.com/Konsing/Inbox-Automation-System"
  },
  {
    title: "Startup Pulse — Market Intelligence Dashboard",
    description: [
      "Automated pipeline that scrapes software engineering jobs from YC, Greenhouse, Ashby, and Hacker News.",
      "Orchestrated ETL workflows with Apache Airflow and stored analytics data in Google BigQuery.",
      "Extracted trending tech skills using NLP (TF-IDF + taxonomy matching).",
      "Built an interactive Streamlit dashboard to explore job market trends."
    ],
    technologies: ["Python", "Apache Airflow", "Google BigQuery", "Streamlit", "Playwright", "NLTK", "Scikit-learn", "Docker"],
    image: images['StartupPulse.png'],
    link: "https://github.com/Konsing/Startup-Pulse"
  },
  {
    title: "Electric Grid Energy X",
    description: [
      "Simulated electricity provider with a full-stack TypeScript monorepo.",
      "RESTful API with 38 endpoints, JWT auth, and role-based access control.",
      "Next.js web portal and React Native mobile app.",
      "166 tests including a 71-test RBAC matrix across every role and endpoint.",
      "Reproducible performance benchmarks with strategic indexing."
    ],
    technologies: ["React Native (Expo)", "Next.js 14", "Express", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: images['EGX.png'],
    link: "https://github.com/Konsing/Electric-Grid-Energy-X"
  },
  {
    title: "FINDIT4ME — Product Aggregator",
    description: [
      "Aggregates merchandise from Shopify, eBay, and Google Shopping (SerpAPI) into a unified storefront.",
      "Automated daily product refresh via GitHub Actions with retry logic and deduplication.",
      "Client-side filtering, sorting, and responsive product grid with sold-out badges.",
      "Deployed on Vercel with Upstash Redis caching for 24-hour search result persistence."
    ],
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "SerpAPI", "eBay Browse API", "Upstash Redis", "Vercel", "GitHub Actions"],
    image: images['FINDIT4ME.png'],
    link: "https://github.com/Konsing/FINDIT4ME"
  },
  {
    title: "AI PR Reviewer — Automated Code Review Bot",
    description: [
      "GitHub App that reviews PRs using Llama 3.3 70B via Groq.",
      "Posts inline comments with severity badges and auto-labels PRs.",
      "Configurable per-repo via .pr-reviewer.yml.",
      "Deployed on Railway — install on any repo for automatic reviews."
    ],
    technologies: ["TypeScript", "Node.js", "Probot", "Groq SDK", "Llama 3.3 70B", "GitHub Apps API", "Vitest", "Railway"],
    image: images['PR1.png'],
    link: "https://github.com/Konsing/Automated-PR-Reviewer"
  },
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
      "Built audio system in C#/Unity: integrated SFX and cyberpunk tracks with per-level transitions through StageManager singleton.",
      "Implemented persistent audio settings using Unity's Audio Mixer.",
      "Designed enemy movement patterns and waypoint configurations for levels 2–6.",
      "Managed the project repository and coordinated a five-person team through development."
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
    technologies: ["Node.js", "Express", "Handlebars", "HTML", "CSS", "JavaScript", "Google OAuth", "AJAX", "SQLite", "Docker", "AWS (EC2, S3, Lightsail"],
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
      "2048: Implemented from scratch, works as expected with separate files.",
      "Minesweeper: Adapted with UI adjustments, flag system improvements, and game enhancements."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Handlebars"],
    image: images['GameArcade.jpg'],
    link: "https://github.com/Konsing/Game-Arcade-Site_2048_Minesweeper_Connect4"
  },
  {
    title: "Connect 4 AI Agents and Game Simulator",
    description: [
      "Implemented various AI agents and a game simulator for Connect 4.",
      "Included strategies: random moves, minimax, alpha-beta pruning, and Monte Carlo simulations.",
      "Scripts to evaluate AI agent performance across a series of games."
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
      "Supports command execution, built-in commands, output redirection, and piping.",
      "Built-in ls-like command (sls)."
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
    technologies: ["React", "GitHub Pages", "JavaScript", "Styled-components", "Framer-Motion"],
    image: images['PSite.jpg'],
    link: "https://github.com/Konsing/my-portfolio"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Click any project to view it on GitHub
      </motion.p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, margin: "-50px" }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <ul>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <TechPills>
              {project.technologies.map((tech, idx) => (
                <Pill key={idx}>{tech}</Pill>
              ))}
            </TechPills>
          </ProjectCard>
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
