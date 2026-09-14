
import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";

export const metadata = {
  title: "Projects — Vinay Tomar",
};

export default function ProjectsPage() {
  return (
    <section className="projects page-section" style={{ paddingTop: "8rem" }}>
      <Reveal className="projects-header">
        <span className="section-kicker">Selected Work</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p style={{ color: "var(--gray)", fontSize: "1.1rem" }}>
          A showcase of my recent development work
        </p>
      </Reveal>

      <StaggerGroup className="projects-grid">

        {/* Portfolio */}
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/MyPortfolioThumbnail.png"
                alt="Personal Portfolio Website"
              />
            </div>

            <div className="project-content">
              <h3>Personal Portfolio Website</h3>
              <p>
                Designed and deployed a fully responsive portfolio website to
                showcase my skills, projects, and experience. Features modern
                UI/UX design with smooth animations and mobile-first approach.
              </p>

              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>

              <a
                href="https://vtomar-portfolio.vercel.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>

        {/*GreenHub */}
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/GreenHubThumbnail.png"
                alt="GreenHub"
              />
            </div>

            <div className="project-content">
              <h3>GreenHub - Renewable Energy Management</h3>
              <p>
                Buy & Sell Green Energy Directly
                Connect solar owners, wind farms & biogas plants with consumers & investors directly. No middlemen. No broker fees. 100% green.
              </p>

              <div className="project-tech">
                <span className="tech-badge">MERN Stack</span>
                <span className="tech-badge">Rest API</span>
                <span className="tech-badge">Jwt Auth</span>
                <span className="tech-badge">Vercel</span>
                <span className="tech-badge">Render</span>
                <span className="tech-badge">SendGrid</span>
              </div>

              <a
                href="https://greenhub-frontend-coral.vercel.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>


        {/* AMS */}
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/AmsThumbnail.png"
                alt="AMS"
              />
            </div>

            <div className="project-content">
              <h3>Attendence Management System</h3>
              <p>
                Developed a Python-based encryption tool that allows users to
                securely encrypt and decrypt messages using various algorithms.
              </p>

              <div className="project-tech">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Cryptography</span>
                <span className="tech-badge">Streamlit</span>
              </div>

              <a
                href="#"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>


        {/* AMS */}
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/JobPortalThumbnail.png"
                alt="Job Portal"
              />
            </div>

            <div className="project-content">
              <h3>Job Portal</h3>
              <p>
                Developed a Python-based encryption tool that allows users to
                securely encrypt and decrypt messages using various algorithms.
              </p>

              <div className="project-tech">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Cryptography</span>
                <span className="tech-badge">Streamlit</span>
              </div>

              <a
                href="https://job-portal-frontend-peach-beta.vercel.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>



        {/* FuteeAI */}
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/FuteeAiThumbnail.png"
                alt="FuteeAI Chatbot"
              />
            </div>

            <div className="project-content">
              <h3>FuteeAi_chatbot</h3>
              <p>
                Developed a chatbot application using React for the frontend
                and integrated it with a Groq API backend. The chatbot provides
                intelligent responses based on user input.
              </p>

              <div className="project-tech">
                <span className="tech-badge">Vite + React</span>
                <span className="tech-badge">Groq API / REST API</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">HTML/CSS</span>
              </div>

              <a
                href="https://chatwithfutee.vercel.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>


        {/* AI Background Remover */}
        {/* <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/images/projects/bg-remover.png"
                alt="AI Background Remover"
              />
            </div>

            <div className="project-content">
              <h3>AI Background Remover</h3>
              <p>
                Built a Python application that removes background from images
                using AI and advanced image processing techniques.
              </p>

              <div className="project-tech">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Streamlit</span>
                <span className="tech-badge">PIL</span>
                <span className="tech-badge">Rembg</span>
                <span className="tech-badge">OpenCV</span>
              </div>

              <a
                href="https://bgremovertool.streamlit.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem> */}

      </StaggerGroup>
    </section>
  );
}