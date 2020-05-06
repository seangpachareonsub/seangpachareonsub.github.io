import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.scss'

import Landing from './components/Landing'




const App = () => {

  return ( 
    <> 
    <Landing />
    
    <div className="about">
      <header>
        <span> No. 1</span>
        <h1> WHO'S TALKING ?</h1>
      </header>
    </div>

    </>
    
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)