import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import IndividualDisplayContext from '../../context/individualDisplayContext';
import './gamePerfil.css';

const GamePerfil = () => {
  const {juegoIndividual, setJuegoIndividual} = useContext(IndividualDisplayContext);
  const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';
  const [datos, setDatos] = useState(false);
  let { games } = useParams();
  const [flag, setFlag] = useState(false);
  const [dev, setDev] = useState(false);
  const [loading, setLoading] = useState(false);

  const llamar = () => {
    fetch(`https://api.rawg.io/api/games/${games}?key=${key}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDatos(data.developers[0].name);
    });
  }/*
  useEffect( () => {
      fetch(`https://api.rawg.io/api/games/${games}?key=${key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDatos(data);
      });
  },[]);
*/
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.rawg.io/api/games/${games}?key=${key}`);
    const newData = await response.json();
    setDatos(newData);
  };

  useEffect( () => {
    fetchData()
    .catch(console.error)
    .finally(setLoading(false))
  },[]);

  useEffect( () => {
    if(datos){
      setDev(datos.developers[0].name)
      console.log(dev)
      setFlag('true')
      console.log(flag)
    }
  },[datos]);
  
 /*
  const fetchData = useCallback(async () => {
    const data = await fetch (`https://api.rawg.io/api/games/${games}?key=${key}`);
    setDatos(data);
  }, [])

  useEffect( () => {
    fetchData()
    .catch(console.error);
  }, [])
  */
  return (
    <div>
      <section>
        <div className='gamePerfil_degrade'></div>
        <div className='gamePerfil_imagenExtDiv'>
          <div className='gamePerfil_imagenDiv'>
            <img className='gamePerfil_imagen' src={datos.background_image} alt="" />
          </div>
          <div className='gamePerfil_titulo'>
            <h2>{datos.name}</h2>
            {
              flag ? <div>{dev}</div> : <div>...cargando</div>
            }
           { /*<h2>{datos.developers[0].name}</h2>*/}
          </div>
        </div>
      </section>

      <section className='gamePerfil_paginaDos'>
      </section>
    </div>
  )
}

export default GamePerfil