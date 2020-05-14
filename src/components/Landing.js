import React, { useEffect, useState, useRef } from 'react'
import { TimelineLite, Expo } from 'gsap'
import Typist from 'react-typist'
import hoverEffect from 'hover-effect'

import Rellax from 'rellax'

import main from '../lib'

const Landing = () => {

  const [counter, setCounter] = useState(0)

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
    const options = document.querySelectorAll('h3')

    switch (e.target) {
      case options[1]:
        window.scrollTo(0, 900)
        break
      case options[2]:
        window.scrollTo(0, 3400)
    }


  }


  return (

    <main >
      {/* <div className='loading'>

        <div className="quote">
          <h1> 12/05 </h1>
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


      <div className='content' >

        <div id='scroll'></div>


        {/* <p className='title-lines'> Hi, I'm Kenn. </p>
          <p className='title-lines'> A <span> minimal </span> and  </p>
          <p className='title-lines'> <span> clean </span> design addict,   </p>
          <p className='title-lines'> with a </p>
          <p className='title-lines'> <span> front-end </span> focus. </p> */}

        <section>
          <h1> FOLIO '20 </h1>
          <h2> VER. 009 </h2>
        </section>

        <section>
          <h3 > CONTAINS </h3>
          <h3 
            onClick={(e) => scroll(e)}> WHO'S TALKING?</h3>
          <h3 
            onClick={(e) => scroll(e)}>  STUFF I'VE DONE </h3>
          <h3
            onClick={(e) => scroll(e)}> STALK ME </h3>
        </section>

      </div>




    </main >


  )
}

export default Landing