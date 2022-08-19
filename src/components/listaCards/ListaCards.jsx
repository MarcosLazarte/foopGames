import React, { useState, useContext} from 'react';
import './listacards.css';
import IndividualDisplayContext from '../../context/individualDisplayContext';

const ListaCards = (promp) => {
  let {name, short_screenshots, slug} = promp.value1
  return (
    <div className='listaCards'>
        {promp.value2 ? <img className='listaCards_imagen' src={short_screenshots[0].image} alt={slug} /> : <h3>...cargarndo</h3> }
        {promp.value2 ? <h3 className='listaCards_titulo'>{name}</h3> : <h3>...cargarndo</h3> }
        <div className='listaCards_bar'></div>
    </div>
  )
}

export default ListaCards;