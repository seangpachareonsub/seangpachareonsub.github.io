import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(() => {
    AOS.init()
  }, [])

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
      <div data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800" data-aos-easing="ease"
        id='para'>
        <h1 className='section-title'>
          <small> (003) </small> <span> Talk to Me </span>
        </h1>
      </div>

      <form onChange={(e) => updateMessage(e)}
        onSubmit={(e) => submitMessage(e)}>
        <div data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay='400'
          data-aos-duration="1000" data-aos-easing="ease">
          <p > HELLO, </p>

          <p>
            MY NAME IS <input name='personName' autoComplete='off'
              type="text" required /> </p>

          <p>
            HERE IS MY EMAIL <input name='personEmail' autoComplete='off'
              type="email" required /> </p>

          <p>
            LET'S TALK ABOUT <input name='personMessage' autoComplete='off'
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