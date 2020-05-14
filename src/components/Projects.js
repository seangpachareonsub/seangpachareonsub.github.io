import React, { useEffect, useState } from 'react'

import Rellax from 'rellax'
import hoverEffect from 'hover-effect'

const Projects = () => {

  useEffect(() => {
    // const rellax = new Rellax('.rellax')

    new hoverEffect({
      parent: document.querySelector('.proj-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/NNtiUd2.png',
      image2: 'https://i.imgur.com/AdRbDrq.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      imagesRatio: 2.2
    })

  }, [])


  return (
    <>
      <div id='para' >
        <h1> - Recent Work </h1>
      </div>

      <div className="proj-container">

        <div className="proj-image">
          <h1> HONNE </h1>

        </div>


      </div >
    </>
  )
}

export default Projects