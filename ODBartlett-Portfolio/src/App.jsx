import { useState } from 'react'
import './App.css'

//import component
import Header from './components/header'
import CardSlider from './components/CardSlider'
import AboutMe from './components/AboutMe'


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
      
    </>
  )
}

export default App
