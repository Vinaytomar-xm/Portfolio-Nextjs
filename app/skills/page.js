import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";

export const metadata = {
  title: "Skills — Vinay Tomar",
};

export default function SkillsPage() {
  return (
    <section className="about page-section" style={{ paddingTop: "8rem" }}>
      <div className="about-container" style={{ display: "block" }}>
        <Reveal>
          <span className="section-kicker">What I Work With</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </Reveal>
        <StaggerGroup className="skills-grid">
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-items">
                <span className="skill-tag">HTML5/CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Rest APIs</span>
                <span className="skill-tag">Node.js/Express.js</span>
                <span className="skill-tag">MongoDB/SQL</span>
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-items">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C</span>
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Libraries &amp; Frameworks</h3>
              <div className="skill-items">
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Streamlit</span>
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Tools &amp; Technologies</h3>
              <div className="skill-items">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Core Concepts</h3>
              <div className="skill-items">
                <span className="skill-tag">Operating Systems</span>
                <span className="skill-tag">Logic Building</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Version Control</span>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
