import React from 'react'

import About from './About/About'
import Home from './Home/Home'
import Work from './Work/Work'
import Skills from './Skills/Skills'
import Education from './Education/Education'

function MainSection() {
  return (
    <div className='lg:ml-[20%]'>
        <Home/>
        <About/>
        <Work/>
        <Skills/>
        <Education/>
    </div>
  )
}

export default MainSection