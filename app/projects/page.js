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
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-icon">🌐</div>
            <div className="project-content">
              <h3>Personal Portfolio Website</h3>
              <p>
                Designed and deployed a fully responsive portfolio website to showcase my skills,
                projects, and experience. Features modern UI/UX design with smooth animations and
                mobile-first approach.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <a href="https://vtomar-portfolio.vercel.app/" className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-icon">🤖</div>
            <div className="project-content">
              <h3>FuteeAi_chatbot</h3>
              <p>
                Developed a chatbot application using React for the frontend and integrated it with a
                Groq API backend. The chatbot provides intelligent responses based on user input,
                demonstrating proficiency in both frontend development and API integration.
              </p>
              <div className="project-tech">
                <span className="tech-badge"> Vite+React</span>
                <span className="tech-badge"> Groq API/Rest API</span>
                <span className="tech-badge"> javascript</span>
                <span className="tech-badge"> Html/css</span>
              </div>
              <a href="https://chatwithfutee.vercel.app/" className="project-link" target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-icon">🔐</div>
            <div className="project-content">
              <h3>Encryption Tool</h3>
              <p>
                Developed a Python-based encryption tool that allows users to securely encrypt and
                decrypt messages using various algorithms. The tool features a user-friendly interface
                and supports multiple encryption methods for enhanced security.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Cryptography</span>
                <span className="tech-badge">Streamlit</span>
              </div>
              <a href="https://encriptiontool.streamlit.app/" className="project-link" target="_blank" rel="noreferrer">
                View on Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>

        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-icon">🖼️</div>
            <div className="project-content">
              <h3>AI Background Remover</h3>
              <p>
                Built a Python application that removes background from images using AI. The tool
                leverages advanced image processing techniques to isolate and remove backgrounds from
                photos.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Streamlit</span>
                <span className="tech-badge">PIL</span>
                <span className="tech-badge">Rembg</span>
                <span className="tech-badge">OpenCV</span>
              </div>
              <a href="https://bgremovertool.streamlit.app/" className="project-link" target="_blank" rel="noreferrer">
                View on Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
