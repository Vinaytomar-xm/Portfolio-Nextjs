import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

export const metadata = {
  title: "Contact — Vinay Tomar",
};

export default function ContactPage() {
  return (
    <section className="contact page-section" style={{ paddingTop: "8rem" }}>
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
  );
}
