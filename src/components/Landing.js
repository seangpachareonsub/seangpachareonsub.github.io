import React, { useEffect } from 'react'
import Rellax from 'rellax'


const Landing = () => {

  // useEffect(() => {
  //   const rellax = new Rellax('.rellax')
  // }, [])

  function scroll() {
    window.scrollTo(0, 733)
  }

  return (

    <main>
      <section>
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

  
      <section>
        <div> <p> KS </p> </div>
        <div> <p> EA </p> </div>
        <div> <p> NG </p> </div>
      </section>
    </main>
  )
}

export default Landing