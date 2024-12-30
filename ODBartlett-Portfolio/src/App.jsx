import React from 'react';

//import component
import Header from './components/Components/header'
import CardSlider from './components/Components/CardSlider'
import AboutMe from './components/Components/AboutMe'
import Contact from './components/Components/Contact'
import Footer from './components/Components/footer'


function App() {

  return (
    <>

    <Header />
    
    <h1>
      <div className = "h1-special">
        I'm Owen.
      </div>
      Software Engineer, and some other stuff.
    </h1>
    
    <div className='line'/>

    <div className='section-header'>
      01 About Me
      <div className='section-header-special'>
        hello.
      </div>
    </div>
    <AboutMe/>
    
    <div className='section-header'>
      02 Projects
      <div className='section-header-special'>
        Some Stuff.
      </div>
    </div>
    <CardSlider/>

    <div className='section-header'>
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
