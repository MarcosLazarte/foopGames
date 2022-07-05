import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseconfig';
import GameCard from '../../components/inicio_game-card/GameCard';
import './inicio.css';

const Inicio = () => {

  const [usuario, setUsuario] = useState(null);
  const [lista, setLista] = useState([]);
  useEffect( () => {
    auth.onAuthStateChanged( (user) => {
      if(user){
        setUsuario(user.email);
        console.log(user.email);
      }
    })
  },[]);

  const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';

  useEffect( () => {
    fetch(`https://api.rawg.io/api/games?key=${key}&page_size=8`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setLista(data.results)
    });
  },[])

  return (
    <div>
      <nav>
        <section>
          <h1>foopGames</h1>
          <section>
            <button>C</button>
            <button>L</button>
            <button>P</button>
            <button>O</button>
          </section>
        </section>
        <section>
          <ul>
            <li>Inicio</li>
            <li>Noticias</li>
            <li>Artículos</li>
            <li>Análisis</li>
            <li>Guías</li>
          </ul>
        </section>
      </nav>
      
      <main>
        <div>
          map array
        </div>
      </main>
      
      <footer>

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