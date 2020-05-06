import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/style.scss'
import Baffle from 'baffle-react'



const App = () => {
  return (
    // LANDING
    <main>
      <section>

        <div>
          <h1> SEANGPACHAREONSUB </h1>
          <p> I'm Kenn. Let me lead you through who I am and what I do. </p>
        </div>

        <ion-icon name="arrow-down-sharp"></ion-icon>
        <svg height="410" width="410">
          <circle cx="205" cy="205" r="200" />  
        </svg>
      </section>


      <section>
        <h1> KS </h1>
        <h1> EA </h1>
        <h1> NG </h1>
      </section>
    </main>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)