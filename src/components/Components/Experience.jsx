import React from 'react';
import './Experience.css';
import AnimatedSection from '../AnimatedSection';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-list">
        {/* Job 1 */}
        <AnimatedSection direction="right" delay={0.1} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">01/2025 - Present</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">Backend AI Development Intern</h3>
                <h4 className="experience-company">
                  <a 
                    href="https://www.aireful.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-company-link"
                  >
                    Aireful (Startup)
                  </a> | Remote
                </h4>
                <div className="experience-description">
                  <p>• Developed and deployed AI-driven chatbot applications using JavaScript, OpenAI API, and Vercel.</p>
                  <p>• Designed and managed PostgreSQL database storage using Supabase.</p>
                  <p>• Implemented AI prompting techniques for enhanced chatbot performance.</p>
                  <p>• Worked within a 3-person engineering team, reporting directly to a Lead Engineer.</p>
                </div>
                <div className="experience-skills">
                  <span>JavaScript</span>
                  <span>OpenAI API</span>
                  <span>PostgreSQL</span>
                  <span>Supabase</span>
                  <span>Large Language Models</span>
                  <span>Version Control</span>
                  <span>Unit Testing</span>
                  <span>Debugging</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Job 2 */}
        <AnimatedSection direction="left" delay={0.2} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">09/2024 - Present</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">Project Lead – Computer Vision & UAV Software</h3>
                <h4 className="experience-company">
                  <a 
                    href="https://www.barman.wse.jhu.edu/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-company-link"
                  >
                    The Barman Laboratory
                  </a> | Dr. Ishan Barman, Johns Hopkins University
                </h4>
                <div className="experience-description">
                  <p>• Designed and developed autonomous swarm drone software using Python and MAVLink libraries.</p>
                  <p>• Conducted unit testing and flight simulations for real and virtual UAV deployments.</p>
                  <p>• Led team meetings, managed project timelines, and reported to Lead Investigator & Head Professor.</p>
                  <p>• Designed CAD models and developed Webots-based drone simulations.</p>
                  <p>• Certification: FAA Part 107 UAV Certified Pilot.</p>
                </div>
                <div className="experience-skills">
                  <span>Python</span>
                  <span>MAVLink</span>
                  <span>CAD</span>
                  <span>Functional Testing</span>
                  <span>TCP/IP</span>
                  <span>WebSockets</span>
                  <span>HTTP</span>
                  <span>Problem-Solving</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Job 3 */}
        <AnimatedSection direction="right" delay={0.3} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">05/2024 - Present</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">Software Development Intern – Full-Stack & Cloud Computing</h3>
                <h4 className="experience-company">
                  <a 
                    href="https://www.onlinedraft.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-company-link"
                  >
                    Online Draft (Startup)
                  </a> | Remote
                </h4>
                <div className="experience-description">
                  <p>• Developed full-stack applications leveraging AWS cloud architecture (Lambda, CloudWatch, DynamoDB, S3).</p>
                  <p>• Migrated relational databases (S3) to NoSQL database systems (DynamoDB).</p>
                  <p>• Designed and tested REST APIs using Postman.</p>
                  <p>• Implemented React + Node.js full-stack functionality.</p>
                  <p>• Participated in weekly engineering and business strategy meetings.</p>
                  <p>• Certification: AWS Certified Cloud Practitioner.</p>
                </div>
                <div className="experience-skills">
                  <span>AWS</span>
                  <span>Lambda</span>
                  <span>DynamoDB</span>
                  <span>S3</span>
                  <span>REST APIs</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Cloud Computing</span>
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