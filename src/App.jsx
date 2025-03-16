import React, { useRef } from 'react';
import "./App.css"

//import component
import Header from './components/Components/header'
import CardSlider from './components/Components/CardSlider'
import AboutMe from './components/Components/AboutMe'
import Contact from './components/Components/Contact'
import Footer from './components/Components/footer'


function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Header />
    
    {/* Hero Section - replaces both "I'm Owen" and "01 About Me" sections */}
    <AboutMe 
      scrollToProjects={scrollToProjects}
      scrollToContact={scrollToContact}
    />
    
    <div className='section-header' ref={projectsRef} style={{ borderTop: 'none' }}>
      02 Projects
      <div className='section-header-special'>
        Some things I've Built:
      </div>
    </div>
    <CardSlider/>

    <div className='section-header' ref={contactRef}>
      03 Contact
      <div className='section-header-special'>
        Reach Me
      </div>
    </div>
    <Contact/>
    
    <Footer/>
    </>
  )
}

export default App