import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseconfig';
import GameCard from '../../components/inicio_game-card/GameCard';
import ListaCards from '../../components/listaCards/ListaCards';
import IndividualDisplayContext from '../../context/individualDisplayContext';
import Footer from '../../components/footer/Footer';

import './inicio.css';

const Inicio = () => {
  const [pagina, setPagina] = useState(1)
  const [fecha, setFecha] = useState(new Date());
  const [listaNovedades, setListaNovedades] = useState(false)
  const [lista, setLista] = useState([]);
  const [listaInicio, setListaInicio] = useState([]);
  const [slide, setSlide] = useState(0);
  const [direccion, setDireccion] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';

  useEffect(() => {
    const timer = setInterval(() => {
      setFecha(new Date());
    }, 1000)
    return () => {
      clearInterval(timer);
    }
  }, []);
  const hora = fecha.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
  const dia = fecha.getDate();
  let mes = fecha.getMonth() + 3;
  const anio = fecha.getFullYear();
  const date = fecha.toLocaleDateString('af-ZA')
  if(mes < 10) mes = '0' + mes;
  const mesAdelante = `${anio}-${mes}-${dia}`
  var date1 = new Date();

  var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
  };
let fechaMejor = date1.toLocaleDateString("af-ZA", options);

//            <img src={listaNovedades.short_screenshots[0].image} alt="" />

  useEffect( () => {
    fetch(`https://api.rawg.io/api/games?key=${key}&dates=2022-07-01,2023-01-01&ordering=-added&page_size=3`)
    .then(response => response.json())
    .then(data => {
      setLista(data.results)
    });
  },[])
/*
  useEffect( () => {
    console.log(fechaMejor)
    fetch(`https://api.rawg.io/api/games?key=${key}&dates=${fechaMejor},${mesAdelante}&ordering=-added&page_size=3`)
    .then(response => response.json())
    .then(data => {
      setListaNovedades(data.results)
      console.log(listaNovedades[0].short_screenshots[0].image)
    });
  },[])*/

  useEffect( () => {
    fetch(`https://api.rawg.io/api/games?key=${key}&page_size=8&page=${pagina}`)
    .then(response => response.json())
    .then(data => {
      setListaInicio(data.results)
    });
  }, [pagina])

  
  const fetchData = async () => {
    setLoading(true);
    console.log(fechaMejor)
    console.log(mesAdelante)
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=${fechaMejor},${mesAdelante}&ordering=-added&page_size=3`);
    const newData = await response.json();
    setListaNovedades(newData);
  };

  useEffect( () => {
    fetchData()
    .catch(console.error)
    .finally(setLoading(false))
  },[]);

  useEffect( () => {
    if(listaNovedades){
      setLoaded(true)
    }
  },[listaNovedades]);

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
        <div className='inicioMain_containerImagenesCabezera'>
        <div className={moverDer()}>
          
          {
            lista.map( e => <Card key={lista.id} {...e}/> )
          }
          
        </div>
        <button className='inicioMain_botonLeft' onClick={() => {
                setSlide(slide - 1);
                setDireccion(false)
              }}>❮</button>
        <button className='inicioMain_botonRight' onClick={() => {
                setSlide(slide + 1);
                setDireccion(true)
              }}>❯</button>
        </div>


        <section className='divMayor'>
          <h2>Novedades</h2>
          <div className='imagesDiv'>
            { loaded ? <img className='imagenes' src={listaNovedades.results[0].background_image} alt="asdf" /> : <h3>...cargando</h3> }
            { loaded ? <img className='imagenes' src={listaNovedades.results[1].background_image} alt="asdf" /> : <h3>...cargando</h3> }
            { loaded ? <img className='imagenes' src={listaNovedades.results[2].background_image} alt="asdf" /> : <h3>...cargando</h3> }
          </div>

          <div className='divLista'>
            {
              listaInicio.map( e => <Link to={'/games/'+e.slug}><ListaCards key={listaInicio.id} {...e}/></Link>)
            }
          </div>
        </section>
        <button onClick={ () => setPagina(pagina - 1)}>ATRAS</button>
        <button onClick={ () => setPagina(pagina + 1)}>SIGUIENTE</button>
      </main>
      
      <Footer/>
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