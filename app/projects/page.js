
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
                alt="Personal Portfolio"
              />
            </div>

            <div className="project-content">
              <h3>Personal Portfolio</h3>

              <p>
                A modern, responsive developer portfolio built with Next.js,
                showcasing my skills, projects, experience and technical journey
                with interactive UI and smooth animations and transitions.
              </p>

              <div className="project-tech">
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">JavaScript</span>
                {/* <span className="tech-badge">Tailwind CSS</span> */}
                <span className="tech-badge">ShadCN UI</span>
                <span className="tech-badge">Framer Motion</span>
                <span className="tech-badge">Responsive UI</span>
                <span className="tech-badge">Vercel</span>
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
              <h3>GreenHub - Renewable Energy Marketplace</h3>

              <p>
                A renewable energy marketplace that enables direct peer-to-peer
                trading between energy producers and buyers. Users can buy, sell
                and manage renewable energy without traditional middlemen.
              </p>

              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">JWT Auth</span>
                <span className="tech-badge">REST API</span>
                <span className="tech-badge">Bcrypt</span>
                <span className="tech-badge">SendGrid</span>
                <span className="tech-badge">Vercel</span>
                <span className="tech-badge">Render</span>
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
                alt="Attendance Register"
              />
            </div>

            <div className="project-content">
              <h3>Attendance Register - College Management System</h3>

              <p>
                A secure MERN-based attendance management system with
                role-based access for Admin, Teachers and Students.
                Teachers can mark attendance while students can track
                their overall and subject-wise attendance.
              </p>

              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">JWT Auth</span>
                <span className="tech-badge">REST API</span>
                <span className="tech-badge">Bcrypt</span>
                <span className="tech-badge">Vercel</span>
                <span className="tech-badge">Render</span>
              </div>

              <a
                href="YOUR_ATTENDANCE_LIVE_URL"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </TiltCard>
        </StaggerItem>

        {/* Job Portal */}
        <StaggerItem>
          <TiltCard className="project-card">
            <div className="project-image">
              <img
                src="/JobPortalThumbnail.png"
                alt="JobPortal"
              />
            </div>

            <div className="project-content">
              <h3>JobBoard - Full-Stack Job Platform</h3>

              <p>
                A full-stack job portal connecting job seekers and companies,
                with job browsing, applications, application tracking,
                job posting and automatic email notifications on status updates.
              </p>

              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">JWT Auth</span>
                <span className="tech-badge">REST API</span>
                <span className="tech-badge">Nodemailer</span>
                <span className="tech-badge">Vercel</span>
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
              <h3>FuteeAI - AI Chatbot</h3>

              <p>
                A fast AI chatbot powered by Groq API with multiple AI models,
                chat history, Markdown rendering and a fully responsive dark UI.
              </p>

              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Vite</span>
                <span className="tech-badge">Groq API</span>
                <span className="tech-badge">Lucide React</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">Vercel</span>
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