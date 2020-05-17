import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const [messageInputs, setMessageInputs] = useState({
    personName: '',
    personEmail: '',
    personMessage: ''

  })

  const updateMessage = (e) => {
    const { name, value } = e.target
    const messages = { ...messageInputs, [name]: value }
    setMessageInputs(messages)
  }

  const submitMessage = (e) => {
    const button = document.querySelector('#form-button')
    e.preventDefault()

    button.innerHTML = 'Finding Kenn...'
    button.style.animation = 'bounce 0.75s alternate ease-in-out infinite'

    emailjs.sendForm('outlook', 'email', e.target, 'user_KphhJtzxSz89fGr0StW6v')
      .then(res => {
        button.style.backgroundColor = 'lightseagreen'
        button.style.animation = ''
        button.innerHTML = 'Message Sent!'

        Array.from(document.querySelectorAll('input')).map(el => el.value = '')

        setTimeout(() => {
          button.style.backgroundColor = 'lightsalmon'
          button.innerHTML = 'Send'
        }, 3200)
      })
  }

  return (
    <>
      <div id='para'>
        <h1 className='section-title'>
          <small> (003) </small> <span> Talk to Me </span>
        </h1>
      </div>

      <form onChange={(e) => updateMessage(e)} 
        onSubmit={(e) => submitMessage(e)}>
        <div>
          <p> HELLO, </p>
          <p> MY NAME IS <input name='personName' 
            type="text" required /> </p>
          <p> HERE IS MY EMAIL <input name='personEmail'
            type="email" required /> </p>
          <p> LET'S TALK ABOUT <input name='personMessage'
            type="text" required /> </p>
        </div>

        <section>
          <button id='form-button'> Send </button>
          <div id='socials'>
            <h1> STALK ME </h1>
            <div>
              <a href="https://www.linkedin.com/in/kennseang/"> LINKEDIN </a>
              <a href="https://github.com/seangpachareonsub"> GITHUB </a>
            </div>

          </div>
        </section>

      </form>






      {/* </div> */}
    </>
  )
}

export default Contact