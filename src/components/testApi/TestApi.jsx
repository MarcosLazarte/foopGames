import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, store } from '../../firebaseconfig';
import FlechaBack from '../flechaBack/FlechaBack';
import './testApi.css';
/*
const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';

fetch(`https://rawg-video-games-database.p.rapidapi.com/games?key=${key}`)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
*/
const TestApi = () => {
	const [usuario, setUsuario] = useState("");
	const [usuarioUID, setUsuarioUID] = useState(0);
	const [datos, setDatos] = useState('');
	const [mensaje, setMensaje] = useState('Cargando');
	const [letra, setLetra] = useState('');
	const [listaJuegos, setListaJuegos] = useState([])

	//Dos useEffect, uno para asegurarme que apenas se renderice el Dom, se setee el usuarioUID y otro para usar esa variable
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

	useEffect( () => {
		async function datos(){
			const docs = await store.collection('users').doc(usuarioUID).get().then(doc => {
				return(doc.data())
			})
			setDatos(docs);
			setLetra(docs.apodo[0]);
			console.log(docs.terminados)
			setListaJuegos(docs.terminados)
		}
		if(usuarioUID){
			datos();
		}
	}, [usuarioUID]);
	
  return (
    <div className='test'>
		<FlechaBack direccion="/inicio"/>
		<section>
			<div className='set_perfil-logo'>
				<p className='set_perfil-letra'>{letra}</p>
			</div>
			<p className='set_perfil-apodo'>{datos.apodo}</p>
			<div> {listaJuegos.map( e => <div>{e}</div>)}</div>
		</section>
	</div>
  )
}

export default TestApi