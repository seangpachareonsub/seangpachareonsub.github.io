import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.scss'

import Landing from './components/Landing'
import About from './components/About'


import Rellax from 'rellax'
import { TimelineLite, Expo } from 'gsap'
import baffle from 'baffle'


let a = baffle('.baffle', {
  characters: '█▒░/>>£$@%*',
  speed: 100
}).start()
a.reveal([1000], [1000])





const App = () => {
 



  


  return (
    <>
    
     <Landing />

    </>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)