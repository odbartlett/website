import React from 'react';
import './Experience.css';
import AnimatedSection from '../AnimatedSection';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-list">

        {/* DraftKings */}
        <AnimatedSection direction="right" delay={0.1} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">06/2026 – Present</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"/>
              <div className="experience-content">
                <h3 className="experience-title">Consumer Data Science Intern</h3>
                <h4 className="experience-company">
                  <a href="https://www.draftkings.com/" target="_blank" rel="noopener noreferrer" className="experience-company-link">
                    DraftKings
                  </a> | Boston, MA
                </h4>
                <div className="experience-description">
                  <p>• Analyzing consumer behavior and engagement metrics across DraftKings' daily fantasy sports and sports betting platforms.</p>
                  <p>• Developing and maintaining data pipelines to support product analytics and A/B testing infrastructure at scale.</p>
                  <p>• Building statistical models for player retention, churn prediction, and lifetime value estimation.</p>
                  <p>• Collaborating with product and engineering teams to surface actionable insights from large-scale event data.</p>
                  <p>• Creating data visualizations and dashboards to communicate findings to business and product stakeholders.</p>
                </div>
                <div className="experience-skills">
                  <span>Python</span>
                  <span>SQL</span>
                  <span>Statistical Analysis</span>
                  <span>A/B Testing</span>
                  <span>Data Pipelines</span>
                  <span>Machine Learning</span>
                  <span>Consumer Analytics</span>
                  <span>Data Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Barman Laboratory */}
        <AnimatedSection direction="left" delay={0.2} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">09/2024 – Present</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"/>
              <div className="experience-content">
                <h3 className="experience-title">Project Lead – Computer Vision & UAV Software</h3>
                <h4 className="experience-company">
                  <a href="https://www.barman.wse.jhu.edu/home" target="_blank" rel="noopener noreferrer" className="experience-company-link">
                    The Barman Laboratory
                  </a> | Dr. Ishan Barman, Johns Hopkins University
                </h4>
                <div className="experience-description">
                  <p>• Designed and developed autonomous swarm drone software using Python and MAVLink libraries.</p>
                  <p>• Conducted pre-flight unit testing of 20+ hardware components and flight simulations for real and virtual UAV deployments.</p>
                  <p>• Devised custom, high-accuracy precision landing software (&lt;3 cm error) using OpenCV and Raspberry Pi cameras.</p>
                  <p>• Obtained the FAA Part 107 UAV Certification to test custom drones and software.</p>
                </div>
                <div className="experience-skills">
                  <span>Python</span>
                  <span>MAVLink</span>
                  <span>OpenCV</span>
                  <span>Computer Vision</span>
                  <span>Raspberry Pi</span>
                  <span>CAD</span>
                  <span>UAV Systems</span>
                  <span>FAA Part 107</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Karich & Associates */}
        <AnimatedSection direction="right" delay={0.3} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">05/2025 – 08/2025</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"/>
              <div className="experience-content">
                <h3 className="experience-title">AI Automation Engineer</h3>
                <h4 className="experience-company">
                  <a href="https://www.karich-and-associates.com/" target="_blank" rel="noopener noreferrer" className="experience-company-link">
                    Karich & Associates
                  </a> | Huntington Beach, CA
                </h4>
                <div className="experience-description">
                  <p>• Constructed a full-stack application to automate the patent application process for a Patent Law Firm — decreased expected completion time from &gt;3 weeks to less than a day.</p>
                  <p>• Designed a multi-agent RAG system to write the specification and claims sections of a patent application from a call transcript.</p>
                  <p>• Created a web scraper agent to handle prior art search, covering 4+ known patent databases with results ranked by relevancy.</p>
                </div>
                <div className="experience-skills">
                  <span>Multi-Agent Systems</span>
                  <span>RAG</span>
                  <span>Full-Stack</span>
                  <span>OpenAI API</span>
                  <span>Web Scraping</span>
                  <span>Automation</span>
                  <span>Prompt Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Aireful */}
        <AnimatedSection direction="left" delay={0.4} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">01/2025 – 06/2025</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"/>
              <div className="experience-content">
                <h3 className="experience-title">Backend AI Development Intern</h3>
                <h4 className="experience-company">
                  <a href="https://www.aireful.com/" target="_blank" rel="noopener noreferrer" className="experience-company-link">
                    Aireful (Startup)
                  </a> | Remote
                </h4>
                <div className="experience-description">
                  <p>• Developed and deployed AI-driven chatbot applications using JavaScript, OpenAI API, and Vercel.</p>
                  <p>• Designed and managed PostgreSQL database storage and authentication using Supabase.</p>
                  <p>• Implemented AI prompting techniques for enhanced chatbot performance.</p>
                  <p>• Collaborated within a 3-person engineering team, reporting directly to a Lead Engineer.</p>
                </div>
                <div className="experience-skills">
                  <span>JavaScript</span>
                  <span>OpenAI API</span>
                  <span>PostgreSQL</span>
                  <span>Supabase</span>
                  <span>LLMs</span>
                  <span>Vercel</span>
                  <span>Version Control</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

export default Experience;
