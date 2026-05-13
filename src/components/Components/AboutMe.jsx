import React from "react";
import "./AboutMe.css";

function AboutMe({ scrollToProjects, scrollToContact }) {
  return (
    <section className="hero-section">
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-line" />
        <span className="hero-eyebrow-text">Available for opportunities</span>
        <span className="hero-eyebrow-line" />
      </div>

      <h1 className="hero-name">Owen Bartlett</h1>

      <h2 className="hero-subtitle">
        CS Student <span className="hero-at">@</span> Johns Hopkins University
      </h2>

      <p className="hero-description">
        A sophomore computer science student with a breadth of experience spanning
        full-stack development, AI systems, cloud architecture, and autonomous UAV
        software. Recruited collegiate water polo athlete — built for fast learning
        and high-pressure teams.
      </p>

      <div className="hero-skills">
        {['React', 'Node.js', 'AWS', 'Python', 'C/C++', 'OpenAI API'].map(s => (
          <span key={s} className="hero-skill-tag">{s}</span>
        ))}
      </div>

      <div className="hero-buttons">
        <button className="btn-primary" onClick={scrollToProjects}>
          <span className="btn-icon">&#x3c;/&#x3e;</span> View Projects
        </button>
        <button className="btn-secondary" onClick={scrollToContact}>
          <span className="btn-icon">✉</span> Contact Me
        </button>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  );
}

export default AboutMe;
