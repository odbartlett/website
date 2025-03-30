import React, { useRef, useEffect, useState } from 'react';
import "./App.css"

//import component
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

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current && isInViewport(projectsRef.current)) {
        setVisibleSections(prev => ({ ...prev, projects: true }));
      }
      
      if (projectsContentRef.current && isInViewport(projectsContentRef.current)) {
        setVisibleSections(prev => ({ ...prev, projectsContent: true }));
      }
      
      if (experienceRef.current && isInViewport(experienceRef.current)) {
        setVisibleSections(prev => ({ ...prev, experience: true }));
      }
      
      if (experienceContentRef.current && isInViewport(experienceContentRef.current)) {
        setVisibleSections(prev => ({ ...prev, experienceContent: true }));
      }
      
      if (contactRef.current && isInViewport(contactRef.current)) {
        setVisibleSections(prev => ({ ...prev, contact: true }));
      }
      
      if (contactContentRef.current && isInViewport(contactContentRef.current)) {
        setVisibleSections(prev => ({ ...prev, contactContent: true }));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Header scrollToExperience={scrollToExperience} />
    
    {/* Hero Section */}
    <AboutMe 
      scrollToProjects={scrollToProjects}
      scrollToContact={scrollToContact}
      scrollToExperience={scrollToExperience}
    />
    
    {/* Projects Section with scroll reveal */}
    <div className="scroll-reveal" style={{ opacity: visibleSections.projects ? 1 : 0, transform: visibleSections.projects ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className='section-header' ref={projectsRef}>
        02 Projects
        <div className='section-header-special'>
          Some things I've Built:
        </div>
      </div>
    </div>
    
    <div className="scroll-reveal" ref={projectsContentRef} style={{ opacity: visibleSections.projectsContent ? 1 : 0, transform: visibleSections.projectsContent ? 'translateY(0)' : 'translateY(50px)' }}>
      <CardSlider/>
    </div>

    {/* Experience Section with scroll reveal */}
    <div className="scroll-reveal" style={{ opacity: visibleSections.experience ? 1 : 0, transform: visibleSections.experience ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className='section-header' ref={experienceRef}>
        03 Experience
        <div className='section-header-special'>
          Where I've Worked:
        </div>
      </div>
    </div>
    
    <div className="scroll-reveal" ref={experienceContentRef} style={{ opacity: visibleSections.experienceContent ? 1 : 0, transform: visibleSections.experienceContent ? 'translateY(0)' : 'translateY(50px)' }}>
      <Experience/>
    </div>

    {/* Contact Section with scroll reveal */}
    <div className="scroll-reveal" style={{ opacity: visibleSections.contact ? 1 : 0, transform: visibleSections.contact ? 'translateY(0)' : 'translateY(50px)' }}>
      <div className='section-header' ref={contactRef}>
        04 Contact
        <div className='section-header-special'>
          Reach Me
        </div>
      </div>
    </div>
    
    {/* Important: Don't wrap the Contact component in a div with a style that changes opacity */}
    {/* This was causing the links to be non-clickable */}
    <Contact ref={contactContentRef} className={visibleSections.contactContent ? "visible-content" : "hidden-content"} />
    
    <Footer/>
    </>
  )
}

export default App