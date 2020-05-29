import React from 'react'


const SiteModal = ({ setModal }) => {

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={setModal}></div>

      <div className="modal-content">

        <iframe src='https://ga-honne.herokuapp.com/' name='site_iframe'></iframe>

      </div>
    </div>
  )
}

export default SiteModal


