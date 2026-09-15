import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";

export const metadata = {
  title: "Experience — Vinay Tomar",
};

export default function ExperiencePage() {
  return (
    <>
      <section
        className="experience page-section"
        style={{ paddingTop: "8rem" }}
      >
        <div className="experience-container">
          <Reveal>
            <span className="section-kicker">Career So Far</span>

            <h2 className="section-title">
              Experience &amp;{" "}
              <span className="gradient-text">Achievements</span>
            </h2>
          </Reveal>

          <div className="timeline">
            <Reveal delay={0.1}>
              <div className="timeline-item">
                <h3>Full-Stack Web Developer</h3>

                <p className="date">
                  Self Projects • 2025 - Present
                </p>

                <ul>
                  <li>
                    Built full-stack web applications using React,
                    Node.js, Express.js and MongoDB.
                  </li>

                  <li>
                    Developed production-style projects including
                    GreenHub, Attendance Register and JobBoard.
                  </li>

                  <li>
                    Implemented REST APIs, JWT authentication,
                    role-based access control and secure httpOnly
                    cookie-based authentication.
                  </li>

                  <li>
                    Integrated email services using Nodemailer and
                    SendGrid for application and system notifications.
                  </li>

                  <li>
                    Built an AI chatbot using React, Vite and Groq API
                    with multiple AI models and chat history.
                  </li>

                  <li>
                    Worked with Git and GitHub for version control,
                    project management and deployment workflows.
                  </li>

                  <li>
                    Deployed projects using platforms such as Vercel
                    and Render.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="certifications-container">
          <Reveal>
            <span className="section-kicker">Credentials</span>

            <h2 className="section-title">
              Certifications
            </h2>
          </Reveal>

          <StaggerGroup className="cert-grid">
            <StaggerItem>
              <TiltCard className="cert-card">
                <h4>Operating Systems Basics</h4>
                <p>Cisco Networking Academy</p>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="cert-card">
                <h4>Computer Networks</h4>
                <p>Cisco Networking Academy</p>
              </TiltCard>
            </StaggerItem>

          </StaggerGroup>
        </div>
      </section>
    </>
  );
}