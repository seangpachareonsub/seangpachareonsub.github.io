import React, { useEffect, useState } from 'react'
import Typist from 'react-typist'
import { LiquidDistortionText } from 'react-text-fun'
import Rellax from 'rellax'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { TimelineLite, gsap, CSSPlugin, Expo } from 'gsap'
gsap.registerPlugin( CSSPlugin )

const Landing = ({ showContent }) => {

  const [counter, setCounter] = useState(0)
  const [nav, setNav] = useState(['WHO\'S TALKING?', 'STUFF I\'VE DONE', 'STALK ME'])

  useEffect(() => {
    const rellax = new Rellax('.rellax')
    AOS.init()
  }, [])

  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000
  }

  const animate = () => {
    setTimeout(() => {

      const t1 = new TimelineLite({
        onComplete: () => {
          const count = setInterval(() => {
            setCounter(counter => {
              counter < 100 ? setCounter(counter + 1) : (
                clearInterval(count),
                setCounter(100),
                reveal()
              )
            })
          }, 25)
        }
      })
      t1
        .to('.quote', 0.7, { opacity: 0 })
        .to('quote', 0.1, { display: 'none' })
        .to('#count', 0.3, { opacity: 1 })

    }, 2000)
  }


  const reveal = () => {

    const t1 = new TimelineLite({
      onComplete: () => {
        showContent()
      }
    })
    t1
      .to('.follow', 1.2, { width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', 0.3, { opacity: 0 })
      .to('.hide', 0.1, { display: 'none' })
      .to('.follow', 0.7, { height: '100%', ease: Expo.easeInOut }, '+=0.5')
      .to('.content', 0.7, { width: '100%', ease: Expo.easeInOut })
      .to('.rellax', 0.1, { display: 'block' })
      .to('.rellax', 0.6, { opacity: 1, stagger: 0.15, ease: Expo.easeInOut })
      .to('#scroll, li', 0.2, { opacity: 1 })
      .to('main', 0.1, { marginBottom: '15vw' })
  }

  const scroll = (e) => {
    const section = document.querySelectorAll('.section-title')

    switch (e.target.innerHTML) {
      case '- WHO\'S TALKING?':
        section[0].scrollIntoView({
          block: 'center'
        })
        break
      case '- STUFF I\'VE DONE':
        section[1].scrollIntoView({
          block: 'center'
        })
        break
      case '- STALK ME':
        section[2].scrollIntoView({
          block: 'center'
        })
        break
    }

  }


  return (

    <main >
      <div className='loading'>

        <div className="quote">
          <h1> Define Thoughts </h1>
          <p>
            <Typist avgTypingDelay={55} onTypingDone={animate} stdTypingDelay={65} cursor={cursor}>
              <Typist.Delay ms={1500} />
              Abstract ideas are concepts that need to be visualized,
              they cannot be illustrated through real examples.
              Explaining the progression of logic in a (computer)
              program will only be possible if the reader can correctly imagine
              it.
            </Typist>
          </p>
        </div>

        <div className="follow"></div>
        <div className='hide' id='progress-bar' style={{ width: counter + '%' }} ></div>
        <p id='count' className='hide'> 0 {counter}% </p>

      </div>


      <div className='content'>
        <div id='scroll'></div>

        <section>
          <p className='rellax' data-rellax-speed='1.3'> VISUALIZE </p>
          <p className='rellax' data-rellax-speed='0.4'> DRAFT 009 OF </p>
          <p className='rellax' data-rellax-speed='-0.5'> FOLIO '20&copy; </p>
          <p className='rellax' data-rellax-speed='-1.4'> EST. 12/05 </p>
        </section>

        <nav>
          <ul>

            {nav.map((nav, i) => {
              return (
                <li key={i} onClick={(e) => scroll(e)} >
                  <LiquidDistortionText
                    text={'-' + ' ' + nav}
                    fontSize={20}
                    speed={0.3}
                    volatility={0.023}
                    fill='pink'
                    fontFamily='raleway'
                    fontWeight={500}
                    paddingRight={5}
                  />
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

    </main >


  )
}

export default Landing