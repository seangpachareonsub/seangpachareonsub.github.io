import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.scss'

import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {

  const [display, setDisplay] = useState(false)

  function showContent() {
    setDisplay(true)
  }

  return (
    <div>
      <Landing showContent={() => showContent()} />

      {display ? <>
        <About />
        <Projects />
        <Contact />
      </>
        : null}
    </div>

  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)