import Reveal from "../components/Reveal";
import { StaggerGroup, StaggerItem } from "../components/Stagger";
import TiltCard from "../components/TiltCard";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiC,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export const metadata = {
  title: "Skills — Vinay Tomar",
};

const webSkills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "REST APIs", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  // { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
];
const programmingSkills = [
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "C", icon: <SiC />, color: "#A8B9CC" },
];

const frameworkSkills = [
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
  { name: "Pandas", icon: <SiPandas />, color: "#599D4A" },
  { name: "Streamlit", icon: <SiStreamlit />, color: "#FF4B4B" },
];

const toolSkills = [
  { name: "Git", icon: <FaGitAlt />, color: "#F05033" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "VS Code", icon: <VscCode />, color: "#0078D4" },
];

const coreSkills = [
  { name: "Operating Systems", icon: <FaCode />, color: "#000000" },
  { name: "Logic Building", icon: <FaCode />, color: "#000000" },
  { name: "Problem Solving", icon: <FaCode />, color: "#000000" },
  { name: "Responsive Design", icon: <FaCode />, color: "#000000" },
  { name: "Version Control", icon: <FaGitAlt />, color: "#F05033" },
];

function SkillItems({ skills }) {
  return (
    <div className="skill-items">
      {skills.map((skill) => (
        <span className="skill-tag" key={skill.name}>
          <span className="skill-icon"  style={{ color: skill.color }}>{skill.icon}</span>
          <span>{skill.name}</span>
        </span>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <section
      className="about page-section"
      style={{ paddingTop: "8rem" }}
    >
      <div
        className="about-container"
        style={{ display: "block" }}
      >
        <Reveal>
          <span className="section-kicker">
            What I Work With
          </span>

          <h2 className="section-title">
            Technical{" "}
            <span className="gradient-text">Skills</span>
          </h2>
        </Reveal>

        <StaggerGroup className="skills-grid">

          {/* Web Development */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Web Development</h3>
              <SkillItems skills={webSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Programming Languages */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Programming Languages</h3>
              <SkillItems skills={programmingSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Libraries & Frameworks */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Libraries &amp; Frameworks</h3>
              <SkillItems skills={frameworkSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Tools & Technologies */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Tools &amp; Technologies</h3>
              <SkillItems skills={toolSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Core Concepts */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Core Concepts</h3>
              <SkillItems skills={coreSkills} />
            </TiltCard>
          </StaggerItem>

        </StaggerGroup>
      </div>
    </section>
  );
}