import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseconfig';
import GameCard from '../../components/inicio_game-card/GameCard';
import ListaCards from '../../components/listaCards/ListaCards';
import IndividualDisplayContext from '../../context/individualDisplayContext';

import './inicio.css';

const Inicio = () => {
  const [lista, setLista] = useState([]);
  const [listaInicio, setListaInicio] = useState([]);
  const [slide, setSlide] = useState(0);
  const [direccion, setDireccion] = useState(true);
  const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';

  useEffect( () => {
    fetch(`https://api.rawg.io/api/games?key=${key}&dates=2022-07-01,2023-01-01&ordering=-added&page_size=3`)
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      setLista(data.results)
    });
  },[])

  useEffect( () => {
    fetch(`https://api.rawg.io/api/games?key=${key}&page_size=8`)
    .then(response => response.json())
    .then(data => {
      setListaInicio(data.results)
    });
  },[])

  const moverDer = () => {
    if (direccion) {
      switch (slide) {
        case 0:
          return 'cardSet'
        case 1:
          return 'cardSet_moveDer1'
        case 2:
          return 'cardSet_moveDer2'
        case 3:
          setSlide(2)
          return 'cardSet_extremoDer'
      }
    } else {
      switch (slide) {
        case -1:
          setSlide(0);
          break;
        case 0:
          return 'cardSet_moveIzq1'
        case 1:
          return 'cardSet_moveIzq2'
        case 2:
          return 'cardSet_moveIzq2'
      }
    }
  }

  return (
    <div>
      <nav className='nav'>
        <section className='nav_logos'>
          <h1>foopGames</h1>
          <section>
            <button>C</button>
            <button>L</button>
            <button>P</button>
            <button>O</button>
          </section>
        </section>
        <ul className='nav_barra-setItems'>
          <li>Inicio</li>
          <li>Novedades</li>
          <li>Best</li>
        </ul>
      </nav>
      
      <main className='inicioMain'>
        <button onClick={() => {
                setSlide(slide - 1);
                setDireccion(false)
              }}>left</button>
        <button onClick={() => {
                setSlide(slide + 1);
                setDireccion(true)
              }}>right</button>
        <div className={moverDer()}>
          {
            lista.map( e => <Card key={lista.id} {...e}/> )
          }
        </div>

        <section className='divMayor'>
          <h2>Novedades</h2>
          <div className='imagesDiv'>
            <div className='imagenes'>Te amo melinda, se corre para la derecha </div>
            <div className='imagenes'>Aprendi a usar esto sin la necesidad de botones</div>
            <div className='imagenes'>Me quiero morir de no haberlo descubierto antes</div>
          </div>

          <div className='divLista'>
            {
              listaInicio.map( e => <Link to={'/games/'+e.slug}><ListaCards key={listaInicio.id} {...e}/></Link>)
            }
          </div>
        </section>
      </main>
      
      <footer>
        Soy Aky
      </footer>
    </div>
    /*
    <div>
      <section className='inicio_setHeader'>
        <h3 className='inicio_titulo'>API-Games</h3>
        <Link to='/test'>
          <div className='inicio_logoContainer'><div className='inicio_logo'>
            <p>a</p>
          </div></div>
        </Link>
      </section>
      <section className='inicio_setTags'>
        <div>Más Jugados</div>
        <div>Lanzamientos Recientes</div>
        <div>Categorías</div>
      </section>
      <section className='inicio_setLista-general'>
        {
          lista.map(e => <Link to={'/games/'+e.slug}> <img className='inicio_test' key={e.id} src={e.short_screenshots[0].image} /> </Link>)
        }
        <img src="" alt="" />
      </section>
    </div>
    */
  )
}

export default Inicio