import React, { useEffect, useState } from 'react'

import Rellax from 'rellax'
import hoverEffect from 'hover-effect'

import Slider from "react-slick";

const Projects = () => {

  useEffect(() => {
    const rellax = new Rellax('.rellax')

    new hoverEffect({
      parent: document.querySelector('#honne-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/NNtiUd2.png',
      image2: 'https://i.imgur.com/AdRbDrq.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      imagesRatio: 2.25
    })

    new hoverEffect({
      parent: document.querySelector('#kap-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/Tptws7T.png',
      image2: 'https://i.imgur.com/MYtlWlw.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      imagesRatio: 0.52
    })

    new hoverEffect({
      parent: document.querySelector('#fin-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/LXtbJSv.png',
      image2: 'https://i.imgur.com/8jmRsRA.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      imagesRatio: 0.52
    })

    new hoverEffect({
      parent: document.querySelector('#pac-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/kXiOi5j.png',
      image2: 'https://i.imgur.com/SbYPbw4.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      imagesRatio: 1.1
    })

   

  }, [])

  const show = (e) => {
    e.target.firstChild.innerText = 'EXPLORE'
  }



  return (
    <>
      <div id='para' >
        <h1 className='section-title'> <small> (002) </small> Recent Work </h1>
      </div>

      <div className="honne-container">
        <div id='proj-text'>
          <h1> HONNE </h1>
          <p> <small> PRJ CONCPT </small> <br/>
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
            <li> JavaScript </li>
            <li> Django Rest Framework </li>
            <li> Python </li>
            <li> PostgreSQL</li>
            <li> HTML5/SASS </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> React Map GL </li>
            
          </ul>
        </div>
        <div onMouseEnter={(e) => show(e)} id="honne-image">
          <p> 15.04.20 </p>
        </div>
      </div >

      <div className="kap-container">
        <div onMouseEnter={(e) => show(e)} id="kap-image">
          <p> 24.03.20 </p>
        </div>
        <img src="https://i.imgur.com/MYtlWlw.png" alt=""/>
        <div id='proj-text'>
          <h1> KAP </h1>
          <p> <small> PRJ CONCPT </small> <br/>
          A group development of a full stack application utilising a MERN stack. 
          Inspired by the COVID-19 lockdown, KAP features login authentication and 
          provides users with a collection of activity ideas whilst being kept indoors.
            <br /> <br />
          KAP was designed to bring people together through the sharing of ideas. The app 
          features CRUD operations giving users power to manage their uploaded content.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript </li>
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
        </div>
      </div >

      <div className="fin-container">
        <div onMouseEnter={(e) => show(e)} id="fin-image">
          <p> 11.03.20 </p>
        </div>
        <img src="https://i.imgur.com/8jmRsRA.png" alt=""/>
        <div id='proj-text'>
          <h1> Financier </h1>
        </div>
      </div >

      <div className="pac-container">
        <div onMouseEnter={(e) => show(e)} id="pac-image">
          <p> 20.01.20 </p>
        </div>
        <div id='proj-text'>
          <h1> Pac-Man</h1>
        </div>
      </div >


    </>
  )
}

export default Projects