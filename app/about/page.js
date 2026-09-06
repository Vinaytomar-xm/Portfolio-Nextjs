import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";

export const metadata = {
  title: "About — Vinay Tomar",
};

export default function AboutPage() {
  return (
    <section className="about page-section">
      <div className="about-container">
        <Reveal>
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="about-text">
            I am a Computer Science student at Medi-Caps University with a strong interest in
            web development and software engineering. I enjoy building clean, responsive, and
            user-friendly web applications with a focus on maintainable and scalable code.
          </p>
          <p className="about-text">
            I have hands-on experience with HTML, CSS, JavaScript, React, and Tailwind CSS, along with
            backend exposure using Node.js, Express.js, and REST APIs. I also work with Python and C for
            problem-solving and have experience with MongoDB and SQL databases.
          </p>
          <p className="about-text">
            I actively improve my skills through real-world projects, virtual internships, and
            self-learning, and enjoy exploring new technologies, contributing to open-source projects,
            and strengthening my problem-solving abilities through competitive programming. I am eager
            to gain industry exposure and collaborate on impactful, real-world projects.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="section-title" style={{ fontSize: "2rem" }}>
            Education
          </h3>
          <StaggerGroup className="education-list">
            <StaggerItem>
              <TiltCard className="education-card">
                <h4>B.Tech - Computer Science &amp; Engineering</h4>
                <p>Medi-Caps University</p>
                <p>2025 - 2029</p>
                CGPA: <span className="score">9.38</span>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="education-card">
                <h4>Senior Secondary (Science)</h4>
                <p>Govt. Excellence H.S. School</p>
                <p>2025</p>
                <span className="score">84.20%</span>
              </TiltCard>
            </StaggerItem>
            <StaggerItem>
              <TiltCard className="education-card">
                <h4>Secondary (Class X)</h4>
                <p>C M Rise Govt. Secondary School</p>
                <p>2023</p>
                <span className="score">92%</span>
              </TiltCard>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
