import React, { useEffect, useState } from 'react'

const Contact = () => {

  const [messageInputs, setMessageInputs] = useState([])

  const updateMessage = (e) => {
    const inputs = Array.from(document.querySelectorAll('input'))
    const messages = [...messageInputs]

    inputs.map((el, i) => {
      e.target === inputs[i] ? (
        messages.splice(i, i, e.target.value),
        setMessageInputs(messages)
      ) : null
    })

  }

  const submitMessage = () => {
    console.log(messageInputs)
  }

  return (
    <>
      <div id='para'>
        <h1 className='section-title'>
          <small> (003) </small> <span> Talk to Me </span>
        </h1>
      </div>

      <div className="contact">

        <div className="message">
          <p> HELLO, </p>
          <p> MY NAME IS <input onChange={(e) => updateMessage(e)}
            type="text" required /> </p>
          <p> HERE IS MY EMAIL <input onChange={(e) => updateMessage(e)}
            type="email" required /> </p>
          <p> LET'S TALK ABOUT <input onChange={(e) => updateMessage(e)}
            type="text" required /> </p>
        </div>


        <section>
          <button onClick={submitMessage}> Send </button>
          <div id='socials'>
            <h1> STALK ME </h1>
            <div>
              <a href="https://www.linkedin.com/in/kennseang/"> LINKEDIN </a>
              <a href="https://github.com/seangpachareonsub"> GITHUB </a>
            </div>

          </div>
        </section>


      </div>
    </>
  )
}

export default Contact