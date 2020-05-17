import React, { useEffect } from 'react'


const SiteModal = ({ setModal }) => {

  useEffect(() => {
    document.body.style.zoom = '90%'
  })

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={setModal}></div>

      <div className="modal-content">

        <iframe name='site_iframe'></iframe>

      </div>
    </div>
  )
}

export default SiteModal


