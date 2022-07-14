import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
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

/*
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
    console.log(newData)
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

  const convertStringToHMTL = (stringo) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(stringo, 'text/html');
    return doc.body.firstChild.textContent;
  }
  const fondoTest = () => {
    const fondo = {
      backgroundImage: `url(${datos.background_image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'fixed',
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
          <div className='HUD'>
            <div className='HUD_Up'>
              
              <div className='HUD_divDetalles'>
                { loaded ? <h2 className='HUD_detalles-titulo'>{datos.name}</h2> : <h3>...cargando</h3>}
                { loaded ? <h3 className='HUD_developer'>{datos.developers[0].name}</h3> : <h3>...cargando</h3>}
                { loaded ? <h3 className='HUD_metacritic'>Metacritic: {datos.metacritic}</h3> : <h3>...cargando</h3>}
              </div>
              <div className='HUD_divBuy'>
                <button className='HUD_buy'>BUY</button>
              </div>
            </div>

            <div className='HUD_Down'>
              <button className='HUD_terminado'>Terminado?</button>
            </div>
            
          </div>
        </div>
      </section>

      <section className='gamePerfil_paginaDos'>
        <article className='gamePerfil_paginaDos-article'>
          {loaded ? /*(datos.description).replace(/<p>|<\/p>/g, '')*/<div>{convertStringToHMTL(datos.description)}</div> : <h3>...cargando</h3>}
        </article>
        <h2>nuevo</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptatem quia laudantium reprehenderit expedita. Ad deleniti, asperiores minima possimus voluptatem eaque culpa natus est sapiente adipisci voluptate iure nesciunt amet.

      </section>
      <footer className='asdf'>
        <h3>final del footer</h3>
      </footer>
      <nav className='gamePerfil_nav'>
        <Link to={'/inicio'}> ❮ </Link>
      </nav>
    </div>
  )
}

export default GamePerfil