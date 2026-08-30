import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";

export const metadata = {
  title: "Experience — Vinay Tomar",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="experience page-section" style={{ paddingTop: "8rem" }}>
        <div className="experience-container">
          <Reveal>
            <span className="section-kicker">Career So Far</span>
            <h2 className="section-title">
              Experience &amp; <span className="gradient-text">Achievements</span>
            </h2>
          </Reveal>
          <div className="timeline">
            <Reveal delay={0.1}>
              <div className="timeline-item">
                <h3>Web Developer</h3>
                <p className="date">Self Projects • 2025 - Present</p>
                <ul>
                  <li>Built multiple frontend layouts focusing on responsive design principles</li>
                  <li>Developed Python utilities including Ai_chatbot, Encryption tool &amp; Bg remover</li>
                  <li>Utilized Git and GitHub for version control and project management</li>
                  <li>Strengthened problem-solving and logic-building skills through hands-on projects</li>
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
            <h2 className="section-title">Certifications</h2>
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
                <h4>Technology Job Simulation</h4>
                <p>Deloitte (via Forage)</p>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="cert-card">
                <h4>To-Do App with Local Storage</h4>
                <p>SkillEcted (JSSAV Edu)</p>
              </TiltCard>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
