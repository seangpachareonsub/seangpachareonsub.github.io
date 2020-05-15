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
      parent: document.querySelector('#fin-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/LXtbJSv.png',
      image2: 'https://i.imgur.com/8jmRsRA.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      imagesRatio: 0.52
    })

    new hoverEffect({
      parent: document.querySelector('#pac-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/kXiOi5j.png',
      image2: 'https://i.imgur.com/SbYPbw4.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      imagesRatio: 1.1
    })

  }, [])

  const show = (e) => {
    e.target.firstChild.innerText = 'EXPLORE'
  }



  return (
    <>
      <div id='para' >
        <h1> <small> (002) </small> Recent Work </h1>
      </div>

      <div className="honne-container">
        <div onMouseEnter={(e) => show(e)} id="honne-image">
          <p> 15.04.20 </p>
        </div>
        <div id='proj-text'>
          <h1> HONNE </h1>
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