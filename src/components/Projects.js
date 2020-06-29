import React, { useEffect, useState } from 'react'
import hoverEffect from 'hover-effect'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

  const [projContainer, setProjContainer] = useState(['.trek', '.honne', '.kap', '.fin', '.pac'])


  useEffect(() => {
    AOS.init()

    new hoverEffect({
      parent: document.querySelector('#honne-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/2HgFJDD.png',
      image2: 'https://i.imgur.com/uENHP3X.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 2.25
    })

    new hoverEffect({
      parent: document.querySelector('#kap-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/Tptws7T.png',
      image2: 'https://i.imgur.com/pzvHIdN.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 0.5
    })


    new hoverEffect({
      parent: document.querySelector('#trek-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/T5hVqYy.png',
      image2: 'https://i.imgur.com/NyOmmN7.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 0.5
    })

    new hoverEffect({
      parent: document.querySelector('#fin-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/LXtbJSv.png',
      image2: 'https://i.imgur.com/2qUvTgr.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      speedIn: 1.5,
      speedOut: 1.5,
      angle: Math.PI / 8,
      imagesRatio: 0.5
    })

    new hoverEffect({
      parent: document.querySelector('#pac-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/kXiOi5j.png',
      image2: 'https://i.imgur.com/SbYPbw4.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      angle: Math.PI / 5,
      imagesRatio: 1.17
    })

    const containers = projContainer.map(el => document.querySelector(el + '-container'))
    let currentPos = window.pageYOffset
    const distort = () => {
      const newPos = window.pageYOffset
      const diff = newPos - currentPos
      const speed = diff * 0.05

      containers.map(el => el.style.transform = `skewY(${speed}deg)`)
      currentPos = newPos
      requestAnimationFrame(distort)
    }
    distort()
  }, [])

  const show = (e) => {
    e.target.firstChild.innerText = 'CLICK TO EXPLORE APP 🧐'
  }

  const remove = (e) => {
    const images = ['honne-image', 'kap-image', 'fin-image', 'pac-image']
    const dates = ['15.04.20', '24.03.20', '11.03.20', '20.01.20']

    images.map((el, i) => e.target.id === el ? e.target.firstChild.innerText = dates[i] : null)
  }


  return (
    <>

      <div id='para' data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease"
        data-aos-offset="200">
        <h1 className='section-title'> <small> (002) </small> Recent Work </h1>
      </div>


      <h5 className='text-slider'>
        <span>
          - TREK - TREK - TREK - TREK - TREK - TREK - TREK - TREK
          - TREK - TREK - TREK - TREK - TREK - TREK - TREK - TREK -
        </span>
      </h5>

      <div className="trek-container">
        <div data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease" id="trek-image">
          <p> 03.06.20 </p>
        </div>

        <img data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"
          src="https://i.imgur.com/NyOmmN7.png" alt="" />

        <div data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease"
          id='proj-text'>

          <h1> Trek </h1>
          <div>

          </div>
          <p > <small> PRJ CONCPT </small> <br />
            An individual effort creating a social travel app consuming TFL's public API and allows 
            users to plan journeys as well as check for live travel updates. The app will include a social 
            feature where users can post pictures and statuses mimicking a social media platform.
            <br /> <br />
            Trek is not currently live but is in the early stages of development and below are the first mockups and drafts of the application. 
            Please visit the GitHub repository to follow the progression of the app.
          </p>
          <br />
          <small> TECH BEING IMPLEMENTED</small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Node.js </li>
            <li> Express.js</li>
            <li> HTML5/SASS </li>
            <li> GreenSock Animation Platform </li>
            <li> React Map GL </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/trek'>
            <ion-icon name="logo-github"></ion-icon> VIEW REPO </a>
        </div>
        <svg id='circle-1' width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div >



      <h5 className='text-slider'>
        <span>
          - HONNE - HONNE - HONNE - HONNE - HONNE - HONNE - HONNE - HONNE
          - HONNE - HONNE - HONNE - HONNE - HONNE - HONNE - HONNE - HONNE -
        </span>
      </h5>

      <div className="honne-container">
        <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          id='proj-text'>

          <h1> HONNE </h1>
          <p> <small> PRJ CONCPT </small> <br />
            An individual project launching a full stack dating application
            connecting users on a deeper level. HONNE
            was developed with user authentication, CRUD operations and
          implements a Django stack with a React front-end. <br /> <br />
            Users are matched based on
            answering a collection of questions set by potential matches. As a result,
            they can identify if their matches’ values and goals align with their own.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6)</li>
            <li> Django Rest Framework </li>
            <li> Python </li>
            <li> PostgreSQL</li>
            <li> HTML5/SASS </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> React Map GL </li>
            <li> GreenSock Animation Platform </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/honne'>
            <ion-icon name="logo-github"></ion-icon> VIEW REPO </a>
        </div>
        <a href="https://ga-honne.herokuapp.com/" target='_blank'>
          <div
            data-aos="fade-up" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id="honne-image">

            <p> 15.04.20 </p>
          </div>
        </a>
      </div >

      <h5 className='text-slider'>
        <span>
          - KAP - KAP - KAP - KAP - KAP - KAP - KAP - KAP
          - KAP - KAP - KAP - KAP - KAP - KAP - KAP - KAP -
        </span>
      </h5>

      <div className="kap-container">
        <a href="https://ga-kap.herokuapp.com/" target='_blank'>
          <div data-aos="fade-up" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)} id="kap-image">
            <p> 24.03.20 </p>
          </div>
        </a>
        <img data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"
          src="https://i.imgur.com/MYtlWlw.png" alt="" />
        <div data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease"
          id='proj-text'>

          <h1> KAP </h1>
          <div>

          </div>
          <p > <small> PRJ CONCPT </small> <br />
            A group development of a full stack application utilising a MERN stack.
            Inspired by the COVID-19 lockdown, KAP features login authentication and
            provides users with a collection of activity ideas whilst being kept indoors.
            <br /> <br />
            KAP was designed to bring people together through the sharing of ideas. The app
            utilises CRUD operations giving users power to manage their uploaded content.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Node.js </li>
            <li> Express.js</li>
            <li> HTML5/SASS </li>
            <li> GreenSock Animation Platform </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> Nodemailer </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/kap'>
            <ion-icon name="logo-github"></ion-icon> VIEW REPO </a>
        </div>
        <svg id='circle-1' width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div >

      <h5 className='text-slider'>
        <span>
          - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER
          - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER -
        </span>
      </h5>

      <div className="fin-container">
        <a href="http://seangpachareonsub.com/financier/" target='_blank'>
          <div data-aos="fade-up" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)} id="fin-image">
            <p> 11.03.20 </p>
          </div>
        </a>
        <img id='fin-imageTwo' data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="800" data-aos-easing="ease"
          src="https://i.imgur.com/8jmRsRA.png" alt="" />

        <div data-aos="fade-up" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease"
          id='proj-text'>
          <h1> Financier </h1>
          <p> <small> PRJ CONCPT </small> <br />
            A paired production of a React front-end application consuming a public API.
            Financier aims to bridge together the most relevant global news and updated
            CryptoCurrency market prices.
            <br /> <br />
            The application's interface allows users to browse as well as search for specific
            news articles and is equipped with a user interactive CryptoCurrency price chart.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> HTML5/SASS </li>
            <li> Moment.js</li>
            <li> Axios </li>
            <li> New York Times API </li>
            <li> CoinGecko API </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/financier'>
            <ion-icon name="logo-github"></ion-icon> VIEW REPO </a>
        </div>

        <svg id='circle-1' width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div >

      <h5 className='text-slider'>
        <span>
          - PACMAN - PACMAN  - PACMAN  - PACMAN  - PACMAN - PACMAN  - PACMAN
          - PACMAN - PACMAN  - PACMAN  - PACMAN  - PACMAN - PACMAN  - PACMAN -
        </span>
      </h5>

      <div className="pac-container">
        <a href="http://seangpachareonsub.com/pac-man/src/index.html" target='_blank'>
          <div data-aos="fade-right" data-aos-offset="300"
            data-aos-duration="800" data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)} id="pac-image">
            <p> 20.01.20 </p>
          </div>
        </a>
        <div data-aos="fade-left" data-aos-offset="300"
          data-aos-duration="1000" data-aos-easing="ease"
          id='proj-text'>
          <h1> Pac-Man</h1>
          <p> <small> PRJ CONCPT </small> <br />
            An individual recreation of the popular grid based game, Pac-Man. The game consists of
            two different maps that mimics and aims to keep the authenticity of
            the original game. Players play against the clock and points are recorded
            on a score leader board on game end.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> JavaScript (ES6) </li>
            <li> HTML5/CSS </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/pacman'>
            <ion-icon name="logo-github"></ion-icon> VIEW REPO </a>
        </div>
      </div >


      <h6> More projects coming soon ... </h6>
    </>
  )
}

export default Projects