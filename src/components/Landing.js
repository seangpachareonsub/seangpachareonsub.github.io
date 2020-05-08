import React, { useEffect, useState, useRef } from 'react'
import { TimelineLite, Expo } from 'gsap'
import Rellax from 'rellax'


const Landing = ({ showContent }) => {

  document.addEventListener('scroll', () => {
    input.current.value = window.pageYOffset
  })

  const [counter, setCounter] = useState(0)
  const phrase = useRef()
  const input = useRef()

  let i = 0

  useEffect(() => {
    input.current.value = 0
    const rellax = new Rellax('.rellax')

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
      onComplete: () => showContent()
    })
    t1
      .to('.content', 1, { width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', 0.3, { opacity: 0 })
      .to('.content', 0.7, { height: '100%', ease: Expo.easeInOut }, '+=0.5')
      .to('.content', 0.1, { position: 'relative', top: 0 })
      .to('.sections', 0.5, { opacity: 1 })


  }

  
  const scroll = (e) => {
    window.scrollTo(0, e.target.value)
  }

  return (

    <main>

      {/* <div className='loading'>
        <div className='hide' id='progress-bar' style={{ width: counter + '%' }} ></div>
        <h1 className='hide'> 0 - {counter}% </h1>
      </div> */}




      <div className='content' >

        <input ref={input}
          onChange={(e) => scroll(e)} min='0' max='1466' type="range"/ >

        <header className='sections'>
          <span> KS </span>
          <div></div>
          <span ref={phrase} > CREATIVE</span>
        </header>


        <div className="buffer"></div>

        <section className='sections'>

          <p className='rellax' data-rellax-speed='-7'>
            Hi, I'm Kenn. I'm a <small> minimal </small> and <small>clean  </small> design addict. </p>

        </section>

      </div>



    </main>


  )
}

export default Landing