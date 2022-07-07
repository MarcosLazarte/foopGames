import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import IndividualDisplayContext from '../../context/individualDisplayContext';
import './gamePerfil.css';

const GamePerfil = () => {
  const {juegoIndividual, setJuegoIndividual} = useContext(IndividualDisplayContext);
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
      <section>
        <div className='gamePerfil_degrade'></div>
        <div className='gamePerfil_imagenExtDiv'>
          <div className='gamePerfil_imagenDiv'>
            <img className='gamePerfil_imagen' src={datos.background_image} alt="" />
          </div>
          <h2 className='gamePerfil_titulo'>{datos.name}</h2>
          <h2 className='gamePerfil_titulo'>{datos.developers[0].name}</h2>
        </div>
      </section>

      <section className='gamePerfil_paginaDos'>
      </section>
    </div>
  )
}

export default GamePerfil