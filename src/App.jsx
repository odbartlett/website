import React, { useRef, useEffect, useState } from 'react';
import "./App.css"

import Header from './components/Components/header'
import CardSlider from './components/Components/CardSlider'
import AboutMe from './components/Components/AboutMe'
import Contact from './components/Components/Contact'
import Footer from './components/Components/footer'
import Experience from './components/Components/Experience'

function App() {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const projectsContentRef = useRef(null);
  const experienceContentRef = useRef(null);
  const contactContentRef = useRef(null);

  const [visibleSections, setVisibleSections] = useState({
    projects: false,
    projectsContent: false,
    experience: false,
    experienceContent: false,
    contact: false,
    contactContent: false
  });

  const scrollToProjects  = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToExperience = () => experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact   = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const targets = [
      { ref: projectsRef,      key: 'projects' },
      { ref: projectsContentRef, key: 'projectsContent' },
      { ref: experienceRef,    key: 'experience' },
      { ref: experienceContentRef, key: 'experienceContent' },
      { ref: contactRef,       key: 'contact' },
      { ref: contactContentRef, key: 'contactContent' },
    ];

    const observers = targets.map(({ ref, key }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [key]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <Header
        scrollToProjects={scrollToProjects}
        scrollToExperience={scrollToExperience}
        scrollToContact={scrollToContact}
      />

      <AboutMe
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />

      {/* Projects */}
      <div
        id="projects"
        className="scroll-reveal"
        ref={projectsRef}
        style={{ opacity: visibleSections.projects ? 1 : 0, transform: visibleSections.projects ? 'translateY(0)' : 'translateY(40px)' }}
      >
        <div className="section-header">
          <div className="section-label">
            <span className="section-num">02</span>
            <div className="section-rule"/>
          </div>
          <div className="section-title">Projects</div>
          <div className="section-subtitle">Some things I've built</div>
        </div>
      </div>

      <div
        className="scroll-reveal"
        ref={projectsContentRef}
        style={{ opacity: visibleSections.projectsContent ? 1 : 0, transform: visibleSections.projectsContent ? 'translateY(0)' : 'translateY(40px)' }}
      >
        <CardSlider />
      </div>

      {/* Experience */}
      <div
        id="experience"
        className="scroll-reveal"
        ref={experienceRef}
        style={{ opacity: visibleSections.experience ? 1 : 0, transform: visibleSections.experience ? 'translateY(0)' : 'translateY(40px)' }}
      >
        <div className="section-header">
          <div className="section-label">
            <span className="section-num">03</span>
            <div className="section-rule"/>
          </div>
          <div className="section-title">Experience</div>
          <div className="section-subtitle">Where I've worked</div>
        </div>
      </div>

      <div
        className="scroll-reveal"
        ref={experienceContentRef}
        style={{ opacity: visibleSections.experienceContent ? 1 : 0, transform: visibleSections.experienceContent ? 'translateY(0)' : 'translateY(40px)' }}
      >
        <Experience />
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="scroll-reveal"
        ref={contactRef}
        style={{ opacity: visibleSections.contact ? 1 : 0, transform: visibleSections.contact ? 'translateY(0)' : 'translateY(40px)' }}
      >
        <div className="section-header">
          <div className="section-label">
            <span className="section-num">04</span>
            <div className="section-rule"/>
          </div>
          <div className="section-title">Contact</div>
          <div className="section-subtitle">Let's connect</div>
        </div>
      </div>

      <div ref={contactContentRef} className={visibleSections.contactContent ? "visible-content" : "hidden-content"}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
