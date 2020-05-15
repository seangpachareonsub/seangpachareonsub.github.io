import React, { useEffect } from 'react'
import Rellax from 'rellax'

// import * as ScrollMagic from 'scrollmagic'
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"

const About = () => {

  useEffect(() => {
    const rellax = new Rellax('.rellax')
  }, [])

  return (
    <>

      <div id='para' >
        <h1> <small> (001) </small>Hello, I'm Kenn.</h1>
        <p> I'm a minimal and clean design addict with a front-end focus.  </p>
      </div>

      <div id='para'>
        <p>
          I'm also Junior <small> full-stack</small> Developer.
        </p>
      </div>


      <div id='para'>
        <p >
          I create projects under the notion that <small> "less is more"</small>, and my work
          reflects my enthusiasm for minimal and clean design.
        </p>
      </div>


      <div id='para' >
        <p >
          Beyond cultivating my ability to write <small> good code</small> and
          my perception in <small> UI design</small>, my aim is to take coding
          into the professional dimension.
        </p>
      </div>


      <div id='para' >
        <p>
          I strive to bring <small> value</small> and <small> grow</small> myself.  Take a look at my skills and recent work.
        </p>
      </div>
    </>
  )
}

export default About