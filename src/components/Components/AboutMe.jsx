
import React from "react";
import "../../index.css";
import "./AboutMe.css";
import headshot from "../../assets/headshot.jpeg";

function AboutMe({ scrollToProjects, scrollToContact }) {
  return (
    <div className="hero-section">
      <h1 className="hero-name">Owen Bartlett</h1>
      <h2 className="hero-subtitle">CS Student at Johns Hopkins University</h2>
      
      <p className="hero-description">
        A sophmore computer science student whose experience covers a vast
                  area of expertice, and is characterized by an ability to 
                  adapt to new challenges and learn new skills quickly. 
                  A recruited college athelete for water polo and has worked with
                  teams of all shapes and sizes. Always eager to learn and grow.
      </p>
      
      <div className="hero-buttons">
        <button className="view-projects-btn" onClick={scrollToProjects}>
          <span>&#x3c;/&#x3e;</span> View Projects
        </button>
        <button className="contact-me-btn" onClick={scrollToContact}>
          <span>✉</span> Contact Me
        </button>
      </div>
    </div>
  );
}

export default AboutMe;