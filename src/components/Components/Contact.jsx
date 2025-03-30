import React from "react";
import "./Contact.css";
import "../../index.css";
import AnimatedSection from '../AnimatedSection';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">

      <div className="contact-links-container">
        <AnimatedSection direction="up" delay={0.2}>
          <a 
            href="https://www.linkedin.com/in/owen-bartlett-7a539729a" 
            className="contact-link-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.25}>
          <a 
            href="mailto:odbartlett1@gmail.com" 
            className="contact-link-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.3}>
          <a 
            href="https://github.com/odbartlett" 
            className="contact-link-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
