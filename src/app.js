import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.scss'

import Landing from './components/Landing'
import About from './components/About'


import Rellax from 'rellax'
import { TimelineLite, Expo } from 'gsap'
import baffle from 'baffle'






const App = () => {



  const [display, setDisplay] = useState(false)

  function showContent() {
    setDisplay(true)
  }

  return (
    <>
     <Landing showContent={() => showContent()} />
     
     {/* {display && */}
      <About />
     {/* } */}
    </>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)