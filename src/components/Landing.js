import React, { useEffect, useState } from 'react'
import { TimelineLite, Expo } from 'gsap'


const Landing = () => {

  const [display, setDisplay] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {

    const count = setInterval(() => {
      setCounter(counter => {
        counter < 100 ? setCounter(counter + 1) : (
          clearInterval(count),
          setCounter(100),
          reveal()
        )
      })
    }, 30)
  }, [])


  function reveal() {

    const t1 = new TimelineLite({
      onComplete: () => setTimeout(() => {
        setDisplay(true)
      }, 1000)

    })

    t1
      .to('.content', 1, { width: '100%', ease: Expo.easeInOut }, '+=0.7')
      .to('.hide', 0.1, { display: 'none' })
      .to('.content', 0.7, { height: '100vh', ease: Expo.easeInOut }, '+=0.5')
      .to('.sections', 0.5, { opacity: 1 })

  }

  function scroll() {
    window.scrollTo(0, 733)
  }

  return (

    <main>

      <div className='loading'>
        <div className='hide' id='initial' style={{ width: counter + '%' }} ></div>
        <h1 className='hide'> {counter} </h1>
      </div>


      <div className='content'>

        <section className='sections'>
          <div>
            <h1> SEANGPACHAREONSUB </h1>
            <p> Hello world. Let me take you through who I am and what I do. </p>
          </div>

          <span onClick={scroll}> Click to scroll </span>
          <ion-icon onClick={scroll} name="arrow-down-sharp"></ion-icon>
          <svg onClick={scroll} height="410" width="410">
            <circle cx="205" cy="205" r="200" />
          </svg>
        </section>

        <section className='sections'>
          <div> <p> KS </p> </div>
          <div> <p> EA </p> </div>
          <div> <p> NG </p> </div>
        </section>

      </div>



    </main>


  )
}

export default Landing