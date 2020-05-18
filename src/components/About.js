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
        <h1 className='section-title' > <small> (001) </small> WHO AM I?</h1>
      </div>

      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <h2> Hello, I'm Kenn. </h2>
        <p>
        I'm a Junior Full Stack Developer and a recent graduate of the Software Engineering 
        programme at General Assembly, London.
        </p>
      </div>

      <div id='para'
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p>
          I create projects under the notion that "less is more" and my work
          reflects my addiction for minimal and clean design as well as my 
          desire to push boundaries.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p >
          Beyond cultivating my overall ability to write good code, 
          I am currently learning Redux, Jest and basic UX design to further 
          my front end focus.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>
          My aim is to take coding into the professional dimension where
          I hope to bring value and continously grow myself.
        </p>
      </div>

    </>
  )
}

export default About