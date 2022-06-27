import React from 'react'
import cv_lazarteMarcos from '../../assets/cv_lazarteMarcos.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv_lazarteMarcos} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Charlemos</a>
    </div>
  )
}

export default CTA