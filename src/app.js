import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.scss'

import Landing from './components/Landing'
import Rellax from 'rellax'



const App = () => {


  return (
    <>
      <Landing />

      <div className="about">
        <header>
          <span> No. 1</span>
          <h1> WHO'S TALKING ?</h1>
        </header>

        <section>
          <div>
            <p>
              I'm Kenn, a Junior Full-stack Developer.
              I create projects under the notion that less is more, and my work
              reflects my enthusiasm for minimal and clean design.
              Beyond cultivating my ability to write good code
              and my perception in UI design, my aim is to take coding
              into the professional dimension, where I hope to bring value and grow myself.
            </p>
          </div>

          <div>
            <h1> My work implements: </h1>
            <ul>
              <li> HTML, CSS(SASS), JSX </li>
              <li> JavaScript </li>
              <li> React </li>
              <li> MERN & Django(DRF) Stack </li>
              <li> PostgreSQL & MongoDB </li>
              <li> Git & GitHub </li>
            </ul>
          </div>

        </section>

      </div>

    </>

  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)