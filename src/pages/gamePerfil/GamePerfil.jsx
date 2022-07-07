import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import IndividualDisplayContext from '../../context/individualDisplayContext';
import './gamePerfil.css';

const GamePerfil = () => {
  const {juegoIndividual, setJuegoIndividual} = useContext(IndividualDisplayContext);
  console.log(juegoIndividual)
  const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';
  const [datos, setDatos] = useState({});
  let { games } = useParams();

  useEffect( () => {
      fetch(`https://api.rawg.io/api/games/${games}?key=${key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDatos(data);
      });
    },[])

  return (
    <div>
      <div className='gamePerfil_degrade'></div>
      <div className='gamePerfil_imagenDiv'>
        <img className='gamePerfil_imagen' src={datos.background_image} alt="" />
      </div>
        <h2 className='gamePerfil_titulo'>{juegoIndividual}</h2>
    </div>
  )
}

export default GamePerfil