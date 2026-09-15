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
  FaDocker,
  FaCode,
  FaJava,
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
  SiNextdotjs,
  SiShadcnui ,
  SiFramer,
  SiVercel,
  SiGraphql,
  SiNetlify,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";

export const metadata = {
  title: "Skills — Vinay Tomar",
};

const languageSkills = [
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#3776AB",
  },
  {
    name: "C",
    icon: <SiC />,
    color: "#A8B9CC",
  },
  {
    name: "C++",
    icon: <TbBrandCpp />,
    color: "#00599C"
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "#ED8B00"
  },
];

const frontendSkills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572B6",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  {
    name: "ShadCN UI",
    icon: <SiShadcnui />,
    color: "#000000",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "#0055FF",
  },
  {
    name: "Responsive Design",
    icon: <FaCode />,
    color: "#000000",
  },
];

const backendDatabaseSkills = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
  },
  // {
  //   name: "MySQL",
  //   icon: <SiMysql />,
  //   color: "#4479A1",
  // },
  {
    name: "REST APIs",
    icon: <SiPostman />,
    color: "#FF6C37",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql/>,
    color: "#E10098",
  },
  {
    name: "JWT Authentication",
    icon: <FaCode />,
    color: "#000000",
  },
  {
    name: "Bcrypt",
    icon: <FaCode />,
    color: "#000000",
  },
  {
    name: "Nodemailer",
    icon: <FaCode />,
    color: "#22B573",
  },
  {
    name: "SendGrid",
    icon: <FaCode />,
    color: "#1A82E2",
  },
  {
    name: "Groq API",
    icon: <FaCode />,
    color: "#000000",
  },
];

const librariesSkills = [
  {
    name: "NumPy",
    icon: <SiNumpy />,
    color: "#013243",
  },
  {
    name: "Pandas",
    icon: <SiPandas />,
    color: "#599D4A",
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit />,
    color: "#FF4B4B",
  },
];

const toolsDeploymentSkills = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05033",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#181717",
  },
  {
    name: "VS Code",
    icon: <VscCode />,
    color: "#0078D4",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "#FF6C37",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "#2496ED",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "#000000",
  },
   {
    name: "Netlify",
    icon: <SiNetlify />,
    color: "#00C7B7",
  },
  {
    name: "Render",
    icon: <FaCode />,
    color: "#46E3B7",
  },
];

const coreSkills = [
   {
    name: "Computer Networks",
    icon: <FaCode />,
    color: "#000000",
  },
  {
    name: "Operating Systems",
    icon: <FaCode />,
    color: "#000000",
  },
   {
    name: "OOPs",
    icon: <FaCode />,
    color: "#000000",
  },
  // {
  //   name: "Logic Building",
  //   icon: <FaCode />,
  //   color: "#000000",
  // },
  // {
  //   name: "Problem Solving",
  //   icon: <FaCode />,
  //   color: "#000000",
  // },
  {
    name: "Version Control",
    icon: <FaGitAlt />,
    color: "#F05033",
  },
];

function SkillItems({ skills }) {
  return (
    <div className="skill-items">
      {skills.map((skill) => (
        <span className="skill-tag" key={skill.name}>
          <span
            className="skill-icon"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </span>

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

          {/* Languages */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Languages</h3>
              <SkillItems skills={languageSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Frontend */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Frontend</h3>
              <SkillItems skills={frontendSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Backend & Database */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Backend &amp; Database</h3>
              <SkillItems skills={backendDatabaseSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Libraries & Frameworks */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Libraries &amp; Frameworks</h3>
              <SkillItems skills={librariesSkills} />
            </TiltCard>
          </StaggerItem>

          {/* Tools & Deployment */}
          <StaggerItem>
            <TiltCard className="skill-category">
              <h3>Tools &amp; Deployment</h3>
              <SkillItems skills={toolsDeploymentSkills} />
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