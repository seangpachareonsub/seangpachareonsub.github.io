import React, { useEffect } from 'react'
import Rellax from 'rellax'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    const rellax = new Rellax('.rellax')
    AOS.init()

  }, [])

  return (
    <>
      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease">
        <h1 className='section-title' > <small> (001) </small>Hello, I'm Kenn.</h1>
        <p> I'm a minimal and clean design addict with a front-end focus.  </p>
      </div>

      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>
          I'm also Junior <small> full-stack</small> Developer.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p >
          I create projects under the notion that <small> "less is more"</small> and my work
          reflects my desire to learn and push boundaries.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p >
          Beyond cultivating my ability to write <small> good code</small> and
          my perception in <small> UI design</small>, my aim is to take coding
          into the professional dimension.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>
          I strive to bring <small> value</small> and <small> continously grow</small> myself.
          Browse through what I've done recently.
        </p>
      </div>

    </>
  )
}

export default About