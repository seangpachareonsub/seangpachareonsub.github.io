import React, { useEffect, useState, useRef } from 'react'
import { TimelineLite, Expo } from 'gsap'
import Rellax from 'rellax'

// import { FliesText, SplitColorChannelText, DistortionText, LiquidDistortionText } from 'react-text-fun'

import main from '../lib'

const Landing = () => {


  const [counter, setCounter] = useState(0)
  const phrase = useRef()
  const [display, setDisplay] = useState(true)

  let i = 0

  useEffect(() => {

    // main()

    const rellax = new Rellax('.rellax', {
      breakpoints: [300, 600, 1201]
    })


    // const count = setInterval(() => {
    //   setCounter(counter => {
    //     counter < 100 ? setCounter(counter + 1) : (
    //       clearInterval(count),
    //       setCounter(100),
    //       reveal()
    //     )
    //   })
    // }, 30)

    const words = ['CREATIVE', 'PASSIONATE', 'RELENTLESS', 'MINIMALIST', 'MOTIVATED']
    setInterval(() => {
      phrase.current.innerHTML = words[i]
      i === 4 ? i = 0 : i += 1
    }, 3000)

  }, [])


  function reveal() {


    const t1 = new TimelineLite({
      onComplete: () => {

        setDisplay(true)

        setTimeout(() => {
          const rellax = new Rellax('.rellax', {
            breakpoints: [300, 600, 1201]
          })
        }, 500)


      }
    })
    t1
      .to('.content', 1, { width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', 0.3, { opacity: 0 })
      .to('.content', 0.7, { height: '100%', ease: Expo.easeInOut }, '+=0.5')
      .to('.content', 0.1, { position: 'relative' })
      .to('.loading', 0.1, { display: 'none' })
      .to('.sections', 0.5, { opacity: 1 })
      .to('.container', 0.1, { flexDirection: 'column' })
  }



  function image() {
    const image = document.querySelector('#honne-image')

    image.style.opacity = 1
    image.style.filter = 'blur(0)'
    image.style.transform = 'translateX(0)'
  }

  function remove() {
    const image = document.querySelector('#honne-image')

    image.style.opacity = 0
    image.style.filter = 'blur(2px)'
    image.style.transform = 'translateX(-50px)'
  }

  function change(e) {
    e.target.play()
  }

  function changeback(e) {
    e.target.pause()
  }


  return (

    <main className='container'>

      {/* 
      <div className='loading'>
        <div className='hide' id='progress-bar' style={{ width: counter + '%' }} ></div>
        <h1 className='hide'> 0 - {counter}% </h1>
      </div> */}


      <div className='content'>

        <header className='sections'>
          <span> KS </span>
          <div></div>
          <span ref={phrase} > CREATIVE</span>
        </header>

        <div className="buffer"></div>

        <section className='sections'>

          <p className='rellax' data-rellax-speed='-7.5'>
            Hi, I'm Kenn. I'm a <small> minimal </small> and <small>clean  </small> design addict. </p>

        </section>

      </div>


      {display ?
        <>
          <div id='about-title' className='rellax' data-rellax-speed='-4.7'>
            <span> No. 1</span>
            <h1> WHO'S TALKING ?</h1>
          </div>

          <div id='para' className='rellax' data-rellax-speed='-4' data-rellax-mobile-speed='-3.9' >
            <p>
              I'm also a Junior <small> full-stack  </small> Developer.
            </p>
          </div>

          <div id='para' className='rellax' data-rellax-speed='-4.35' data-rellax-mobile-speed='-3.7' >
            <p >
              I create projects under the notion that <small> "less is more" </small>, and my work
              reflects my enthusiasm for minimal and clean design.
            </p>
          </div>

          <div id='para' className='rellax' data-rellax-speed='-3.55' data-rellax-mobile-speed='-3.18'>
            <p >
              Beyond cultivating my ability to write <small> good code </small>
              and my  perception in <small> UI design  </small> , my aim is to take coding
              into the professional dimension.
            </p>
          </div>

          <div id='para' className='rellax' data-rellax-speed='-2.5' data-rellax-mobile-speed='-2.27'>
            <p>
              I strive to bring <small> value  </small>and <small> grow </small> myself.  Take a look at my recent work.
            </p>
          </div>

          {/* PORTFOLIO */}
          <div id='work-title' className='rellax' data-rellax-speed='-1.95'>
            <span> No. 2</span>
            <h1> WHAT I'VE DONE </h1>

          </div>


          {/* work/projects */}

          <div onMouseLeave={remove} onMouseOver={image} id='honne' className='rellax' data-rellax-speed='-1.7'>
            {/* <video onMouseLeave={(e) => changeback(e)} onMouseEnter={(e) => change(e)} 
              id='honne-image' src="https://i.imgur.com/RXfp0iT.mp4" loop /> */}
            <h1> HONNE </h1>
            <h4> Connect, really connect.</h4>
            <p> Individually creating a full-stack app featuring CRUD operations. Honne implements
               a Django stack with a React front-end and PostgreSQL as it's database
               manager. </p>


          </div>

          <div id='kap' className='rellax' data-rellax-speed='-0.5'>

            <h1> KAP </h1>
            <h4> Your stay at home guide </h4>
            <p> A group development of an app utilising a MERN stack. Built with CRUD operations, KAP
              allows users to share stay at home ideas and activities.
            </p>


          </div>


          <div id='financier' className='rellax' data-rellax-speed='0.3'>

            <h1> FINANCIER </h1>
            <h4> Keeping you updated </h4>
            <p> A React app consuming the New York Times and CoinGecko open source
              API's. Financier is a news application that integrates financial market data
            </p>
          </div>

          <div id='pacman' className='rellax' data-rellax-speed='1'>

            <h1> PAC-MAN</h1>
            <h4> Waka Waka </h4>
            <p> Recreation of the popular grid based game Pac-Man. Built with vanilla JavaScript, the game implements
              the main features of the classic 90's arcade game.
            </p>
          </div>


          <div id='contact-title' className='rellax' data-rellax-speed='1.1'>
            <span> No. 3 </span>
            <h1> HOW TO STALK ME </h1>
          </div>

          <div id='contact' className='rellax' data-rellax-speed='1.6'>
            <a href="" > EMAIL</a>
            <a href="" > LINKEDIN </a>
            <a href="" > GITHUB </a>
            <a href=""> INSTAGRAM </a>
          </div>


        </>


        : null
      }
    </main >


  )
}

export default Landing