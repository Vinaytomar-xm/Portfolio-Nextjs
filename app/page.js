"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Reveal from "./components/Reveal";
import { StaggerGroup, StaggerItem } from "./components/Stagger";
import TiltCard from "./components/TiltCard";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const menuToggleRef = useRef(null);
  const navLinksRef = useRef(null);
  const heroContentRef = useRef(null);
  const refreshBtnRef = useRef(null);

  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Apply theme to <html data-theme="">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        menuToggleRef.current &&
        navLinksRef.current &&
        !menuToggleRef.current.contains(e.target) &&
        !navLinksRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  // Parallax effect for hero section
  // useEffect(() => {
  //   const onScroll = () => {
  //     const scrolledY = window.pageYOffset;
  //     const el = heroContentRef.current;
  //     if (el && scrolledY < window.innerHeight) {
  //       el.style.transform = `translateY(${scrolledY * 0.3}px)`;
  //       el.style.opacity = 1 - scrolledY / 700;
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const handleNavLinkClick = () => setMenuOpen(false);

  const handleRefresh = () => {
    if (refreshBtnRef.current) {
      refreshBtnRef.current.style.transform = "rotate(360deg) scale(0.9)";
    }
    setTimeout(() => location.reload(), 300);
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <nav id="navbar" ref={navRef} className={scrolled ? "scrolled" : ""}>
        <div className="logo">Vinay Tomar</div>
        <div className="nav-right">
          <ul
            className={`nav-links${menuOpen ? " active" : ""}`}
            id="navLinks"
            ref={navLinksRef}
          >
            <li>
              <a href="#about" onClick={handleNavLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleNavLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleNavLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" onClick={handleNavLinkClick}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </ul>
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <span id="themeIcon">{theme === "light" ? "🌙" : "☀️"}</span>
          </button>
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            id="menuToggle"
            aria-label="Toggle menu"
            ref={menuToggleRef}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-spotlight" aria-hidden="true">
          <span className="spotlight-beam beam-left"></span>
          <span className="spotlight-beam beam-right"></span>
        </div>
        <div className="hero-content" ref={heroContentRef}>
          <div className="hero-text">
            <div className="hero-label">💻 AVAILABLE FOR OPPORTUNITIES</div>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">Vinay Singh Tomar</span>
            </h1>
            <p className="hero-subtitle">
              I am 1st year B.Tech CSE student, passionate about the web development.
              I build responsive web applications and create efficient, logic-based solutions.
            </p>
            <p className="hero-location">Indore, Madhya Pradesh, India</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work →
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <Image
                src="/vinay.jpeg"
                alt="Vinay Singh Tomar"
                width={320}
                height={320}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <Reveal>
            <span className="section-kicker">About Me</span>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about-text">
              I am a 1st year Computer Science student at Medi-Caps University with a strong interest in
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

      <section className="about" id="skills" style={{ paddingTop: "4rem" }}>
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

      <section className="projects" id="projects">
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

      <section className="experience" id="experience">
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

      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-grid">
            <Reveal className="contact-intro">
              <span className="section-kicker">Get In Touch</span>
              <h2 className="section-title">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="contact-subtitle">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions.
              </p>
              <div className="contact-availability">
                <span className="pulse-dot"></span> Currently available for opportunities
              </div>
              <div className="contact-socials">
                <a
                  href="https://github.com/Vinaytomar-xm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  💻
                </a>
                <a
                  href="https://linkedin.com/in/vinay-singh-tomar-5b65b9377"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  🔗
                </a>
                <a href="mailto:Tomarvinaysingh70@gmail.com" aria-label="Email">
                  📧
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="contact-panel-wrap">
              <TiltCard className="contact-panel">
                <a
                  href="mailto:Tomarvinaysingh70@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row"
                >
                  <span className="contact-row-icon">📧</span>
                  <span className="contact-row-text">
                    <span className="contact-row-label">Email</span>
                    <span className="contact-row-value">[ Email.&#160;protected ]</span>
                  </span>
                  <span className="contact-row-arrow">→</span>
                </a>
                <a className="contact-row" target="_blank" rel="noreferrer">
                  <span className="contact-row-icon">📱</span>
                  <span className="contact-row-text">
                    <span className="contact-row-label">Mobile</span>
                    <span className="contact-row-value">+91 8236076680</span>
                  </span>
                  <span className="contact-row-arrow">→</span>
                </a>
                <a
                  href="https://github.com/Vinaytomar-xm"
                  className="contact-row"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-row-icon">💻</span>
                  <span className="contact-row-text">
                    <span className="contact-row-label">GitHub</span>
                    <span className="contact-row-value">@Vinaytomar-xm</span>
                  </span>
                  <span className="contact-row-arrow">→</span>
                </a>
                <a
                  href="https://linkedin.com/in/vinay-singh-tomar-5b65b9377"
                  className="contact-row"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-row-icon">🔗</span>
                  <span className="contact-row-text">
                    <span className="contact-row-label">LinkedIn</span>
                    <span className="contact-row-value">Vinay Singh Tomar</span>
                  </span>
                  <span className="contact-row-arrow">→</span>
                </a>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Vinay Tomar</div>
            <p className="footer-tagline">
              1st year CSE student building clean, responsive web experiences with the MERN stack —
              one project at a time.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/Vinaytomar-xm"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                💻
              </a>
              <a
                href="https://linkedin.com/in/vinay-singh-tomar-5b65b9377"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                🔗
              </a>
              <a href="mailto:Tomarvinaysingh70@gmail.com" aria-label="Email">
                📧
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p>Tomarvinaysingh70@gmail.com</p>
            <p>+91 8236076680</p>
            <p>Indore, Madhya Pradesh, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Vinay Singh Tomar • Built with passion &amp; code ❤️</p>
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑ Back to top
          </button>
        </div>
      </footer>

      <a
        href="/Vinay_resume.pdf"
        download="Vinay_Resume.pdf"
        className="resume-btn"
        aria-label="Download Resume"
        title="Download Resume"
      >
        📄
      </a>

      <button
        className="refresh-btn"
        id="refreshBtn"
        ref={refreshBtnRef}
        aria-label="Refresh page"
        title="Refresh Page"
        onClick={handleRefresh}
      >
        🔄
      </button>
    </>
  );
}
