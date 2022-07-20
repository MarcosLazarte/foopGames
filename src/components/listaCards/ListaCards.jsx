import React, { useState, useContext} from 'react';
import './listacards.css';
import IndividualDisplayContext from '../../context/individualDisplayContext';

const ListaCards = ({name, short_screenshots, slug}) => {
  const {juegoIndividual, setJuegoIndividual} = useContext(IndividualDisplayContext);
  
  const cargarDatoJuego = () => {
    setJuegoIndividual(name)
  }

  return (
    <div className='listaCards' onClick={cargarDatoJuego}>
        <img className='listaCards_imagen' src={short_screenshots[0].image} alt={slug} />
        <h3 className='listaCards_titulo'>{name}</h3>
        <div className='listaCards_bar'></div>
    </div>
  )
}

export default ListaCards;