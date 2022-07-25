import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import IndividualDisplayContext from '../../context/individualDisplayContext';
import './gamePerfil.css';
import { auth, store, doc, setDoc } from '../../firebaseconfig';
import { collection, getDoc, getFirestore } from 'firebase/firestore';

const GamePerfil = () => {
  const {juegoIndividual, setJuegoIndividual} = useContext(IndividualDisplayContext);
  const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';
  const [datos, setDatos] = useState(false);
  let { games } = useParams();
  const [flag, setFlag] = useState(false);
  const [dev, setDev] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [usuarioUID, setUsuarioUID] = useState(0);
  
/*
function hola(){
    console.log("comeme la wea")
    let testo = document.getElementById('test')
    let texton = "<h1>TEXTO</h1><p>Como andas? <br> Todobien </p>"
	var parser = new DOMParser();
	var doc = parser.parseFromString(texton, 'text/html');
    test.innerHTML = doc.firstChild.innerHTML
    console.log(doc.firstChild.innerHTML);
    console.log(doc.firstChild.firstChild.innerHTML);
}*/
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

    const convertStringToHMTL = (stringo) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(stringo, 'text/html');
    return doc.body.firstChild.textContent;
  }
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
    if(datos){
      setLoaded(true)
      //test
      let descripcion = document.getElementById("gPerfil_test2");
      descripcion.innerHTML = datos.description
      //test
    } 
  },[datos]);

  useEffect( () => {
		function getUser(){
			auth.onAuthStateChanged( (user) => {
				if(user){
					//setUsuario(user.email);
					setUsuarioUID(user.uid);
					//return user.uid
				}
			});
		}
		getUser();
	}, []);

  const guardarJuego = async () => {
    console.log(usuarioUID)
    try{
      let dato = {
        juego : datos.slug
      }
      const db = getFirestore();
      const colRef = collection(db, "users")
      const docRef = doc(db, 'users', usuarioUID)
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        console.log("document data: ", docSnap.data().terminados)
        let arrayo = docSnap.data().terminados
        arrayo.push(datos.slug)
        const datosJuegos = doc(db, 'users', usuarioUID);
        setDoc(datosJuegos, { terminados: arrayo}, { merge: true});
      }
      //const { docs } = await store.collection('users').doc(usuarioUID).get("terminados")
      //console.log(docs)
      //const newArray = docs.map( item => ({id: item.id, ...item.data()}))
      //console.log(newArray)
      //await store.collection('agenda').doc(usuarioUID).set(dato)
      //const { docs } = await store.collection('agenda').get()
      //const newArray = docs.map( item => ({id: item.id, ...item.data()}))
      //setAgenda(newArray)
      //console.log('ID: ', data.id)
      alert("Se agrego correctamente")
    }catch(error){
        console.log(error)
    }
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
              <button className='HUD_terminado' onClick={guardarJuego}>Terminado?</button>
            </div>
            
          </div>
        </div>
      </section>

      <section className='gamePerfil_paginaDos'>
        <article className='gamePerfil_paginaDos-article'>
          <div id='gPerfil_test2' className='gPerfil_test2'>

          </div>
          {loaded ? /*(datos.description).replace(/<p>|<\/p>/g, '')*//*<div>{convertStringToHMTL(datos.description)}</div>*/<div id='gPerfil_test'></div> : <h3>...cargando</h3>}
        </article>
      </section>
      <Footer/>
      <nav className='gamePerfil_nav'>
        <Link to={'/inicio'}> ❮ </Link>
      </nav>
    </div>
  )
}

export default GamePerfil