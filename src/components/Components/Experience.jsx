import React from 'react';
import './Experience.css';
import AnimatedSection from '../AnimatedSection';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-list">
        {/* Job 1 - New Karich & Associates */}
        <AnimatedSection direction="right" delay={0.1} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">05/2025 - 08/2025</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">Software Development Intern – Full-Stack Development & Consulting</h3>
                <h4 className="experience-company">
                  <a 
                    href="https://www.karich-and-associates.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-company-link"
                  >
                    Karich & Associates
                  </a> | Huntington Beach, CA
                </h4>
                <div className="experience-description">
                  <p>• Developed a full-stack application designed to automate the patent application process.</p>
                  <p>• Created an entire dynamoDB key-attribute schema designed to maximize both time and cost efficiency.</p>
                  <p>• Created AI agents to automate daily tasks of a law firm, using a variety of existing apis.</p>
                  <p>• Utilized prompt engineering to get the desired result out of OpenAI APIs.</p>
                  <p>• Consulted on the design and development of novel software prior to patent application</p>
                </div>
                <div className="experience-skills">
                  <span>Full-Stack Development</span>
                  <span>DynamoDB</span>
                  <span>AI Agents</span>
                  <span>OpenAI API</span>
                  <span>Prompt Engineering</span>
                  <span>Patent Applications</span>
                  <span>Consulting</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Job 2 - Online Draft (moved from position 3) */}
        <AnimatedSection direction="left" delay={0.2} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">05/2024 - Present</div>
            <div className="experience-content-wrapper">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">Software Development and Co-Owner – Full-Stack & Cloud Computing</h3>
                <h4 className="experience-company">
                  <a 
                    href="https://www.onlinedraft.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="experience-company-link"
                  >
                    Online Draft (Startup)
                  </a> | Hybrid - Newport Beach, CA
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
        
        {/* Job 3 - Aireful (moved from position 1) */}
        <AnimatedSection direction="right" delay={0.3} animateOnce={true}>
          <div className="experience-item">
            <div className="experience-date">01/2025 - 06/2025</div>
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
                  <p>• Designed and managed PostgreSQL database storage and authentication using Supabase.</p>
                  <p>• Implemented AI prompting techniques for enhanced chatbot performance.</p>
                  <p>• Used git for version control and collaborated with a 3-person engineering team, reporting directly to a Lead Engineer.</p>
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
        
        {/* Job 4 - Barman Laboratory (moved from position 2) */}
        <AnimatedSection direction="left" delay={0.4} animateOnce={true}>
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
      </div>
    </div>
  );
}

export default Experience; 