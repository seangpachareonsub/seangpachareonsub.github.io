import React, { useEffect, useState, useRef } from 'react'
import { TimelineLite, Expo } from 'gsap'
import Typist from 'react-typist'

import { LiquidDistortionText } from 'react-text-fun'

import Rellax from 'rellax'

import main from '../lib'

const Landing = () => {

  const [counter, setCounter] = useState(0)
  const [nav, setNav] = useState(['WHO\'S TALKING?', 'STUFF I\'VE DONE', 'STALK ME'])

  useEffect(() => {
    main()
    const rellax = new Rellax('.rellax')
  }, [])

  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000
  }

  const animate = () => {

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
        }, 30)
      }
    })

    t1
      .to('.quote', 0.7, { opacity: 0 })
      .to('quote', 0.1, { display: 'none' })
      .to('#count', 0.3, { opacity: 1 })
  }


  const reveal = () => {

    const t1 = new TimelineLite({
      onComplete: () => {

        // setDisplay(true)
      }
    })
    t1
      .to('.follow', 1.2, { width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', 0.3, { opacity: 0 })
      .to('.hide', 0.1, { display: 'none' })
      .to('.follow', 0.7, { height: '100%', ease: Expo.easeInOut }, '+=0.5')
      .to('.content', 0.7, { width: '100%', ease: Expo.easeInOut })
      .to('.title-lines', 0.4, { opacity: 1, stagger: 0.1 })
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
      {/* <div className='loading'>

        <div className="quote">
          <h1> Define Thoughts </h1>
          <p>
            <Typist avgTypingDelay={55} stdTypingDelay={45} cursor={cursor}>
              <Typist.Delay ms={1500} />
              Abstract ideas are concepts that need to be visualized,
              as they cannot be illustrated through concrete (real) examples.
              Explaining the progression of logic in a (computer)
              program will be possible only if the reader can correctly visualize (imagine)
            it in his mind. <br /> <br />

              <Typist.Delay ms={1000} />
              <span onClick={animate}> Click to visualize Folio '20</span>
            </Typist>
          </p>
        </div>

        <div className="follow"></div>
        <div className='hide' id='progress-bar' style={{ width: counter + '%' }} ></div>
        <p id='count' className='hide'> 0 - {counter}% </p>

      </div> */}


      <div className='content'>

        <div id='scroll'></div>

        <section>
          <p> VISUALIZE </p>
          <p> DRAFT 009 OF </p>
          <p> FOLIO '20. </p>
          <p> EST. 12/05 </p>
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

            {/* <li onClick={(e) => scroll(e)}> WHOS'S TALKING? </li>
            <li onClick={(e) => scroll(e)}> STUFF I'VE DONE </li>
            <li onClick={(e) => scroll(e)}> STALK ME </li> */}
          </ul>
        </nav>

      </div>

    </main >


  )
}

export default Landing