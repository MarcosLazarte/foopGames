import React from 'react'

import './card.css';

const Card = ({short_screenshots, slug, name}) => {
  return (
    <div className='card_set'>
        <img  className='card_img' src={short_screenshots[0].image} alt={slug} />
        <h3 className='card_title'>{name}</h3>
    </div>
  )
}

export default Card