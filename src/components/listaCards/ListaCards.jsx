import React from 'react';
import './listacards.css';

const ListaCards = ({name, short_screenshots, slug}) => {
  return (
    <div className='listaCards'>
        <img className='listaCards_imagen' src={short_screenshots[0].image} alt={slug} />
        <h3 className='listaCards_titulo'>{name}</h3>
    </div>
  )
}

export default ListaCards;