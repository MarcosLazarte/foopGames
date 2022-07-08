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
  const [loaded, setLoaded] = useState(false);


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
//Aca lo importante es que traigo la data, como tarda en cargarla, uso otro useEffect para que refresque el contenido del DOM cuando termine de conseguir toda la data
  useEffect( () => {
    fetchData()
    .catch(console.error)
    .finally(setLoading(false))
  },[]);

  useEffect( () => {
    if(datos) setLoaded(true)
  },[datos]);

  const fondoTest = () => {
    const fondo = {
      backgroundImage: `url(${datos.background_image})`,
      backgroundPosition: 'center',
      backgroundSize: 'auto 100vh',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '100vh',
    }
    return fondo;
  }
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
          <div style = {fondoTest()}></div>
          <div className='gamePerfil_imagenDiv'>
            {/*<img className='gamePerfil_imagen' src={datos.background_image} alt="" />*/}
          </div>
          <div className='gamePerfil_titulo'>
            { loaded ? <h2>{datos.name}</h2> : <div>...cargando</div>}
            {
              loaded ? <div>{datos.developers[0].name}</div> : <div>...cargando</div>
            }
          </div>
        </div>
      </section>

      <section className='gamePerfil_paginaDos'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt eligendi dolore delectus facilis non! Facere amet labore, expedita placeat aliquam dolorum, non magnam dolor nostrum laboriosam doloremque minus quasi!
      </section>
    </div>
  )
}

export default GamePerfil