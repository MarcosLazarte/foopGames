import React , { useState } from 'react';
import { auth, store } from '../../firebaseconfig';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import FlechaBack from '../flechaBack/FlechaBack';
import './login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgError, setMsgError] = useState(null);
    const historial = useNavigate();

    const registrarUsuario = (e) => {
      e.preventDefault()
      auth.createUserWithEmailAndPassword(email, pass)
      .then( (cred) => {
        store.collection('users').doc(cred.user.uid).set({
          key: "-",
          apodo: email,
          imagen: '',
          terminados: []
        })
        historial('/');
        setMsgError(null);
        alert("Usuario registrado");
      })
      .catch( e => {
        if(e.code === 'auth/invalid-email'){
          setMsgError('El formato del email es incorrecto');
        }
        if(e.code === 'auth/weak-password'){
          setMsgError('La password debe tener 6 caracteres como mínimo');
        }
      });
    }

    const loginUsuario = () => {
      auth.signInWithEmailAndPassword(email, pass)
      .then( (e) => {
        historial('/');
        console.log(e);
        setMsgError(null);
      })
      .catch( (error) => {
        if(error.code === 'auth/wrong-passoword'){
          setMsgError('Contraseña incorrecta')
        }
      });
    }
  return (
    <div>
      <section className='cuartaPagina'>
        <div className='cuartaPagina_card'>
          <h2 className='cuartaPagina_card-titulo'>foopGames</h2>
        </div>
        <div className='login_card2'>
          <h1 className='login_titulo'>Login</h1>
          <h3 className='login_leyenda'>"Ya te imaginas que hacer"</h3>
          <form onSubmit={registrarUsuario}>
              <input
                className='login_input'
                onChange={(e) => {setEmail(e.target.value)}}
                placeholder='Introduce email'
                type="email" />
              <br />
              <input
                className='login_input'
                onChange={(e) => {setPass(e.target.value)}}
                placeholder='Introduce contraseña'
                type="password" />
              <br />
              <input
                className='login_boton'
                value='Registrar Usuario'
                type="submit" />
          </form>
          <button className='login_boton' onClick={loginUsuario}>Iniciar Sesion</button>
          {
            msgError != null ?
            (
              <h4 className='login_error'>
                {msgError}
              </h4>
            )
            :
            (
              <span>{}</span>
            )
          }
        </div>
        <div className='cuartaPagina_card'>
          <h2 className='login_card-titulo'>Inicia sesión o registrate <br /> <span className='login_card-tituloDetalle'>Nuestra torta no es una mentira</span></h2>
        </div>
        <Footer/>
      </section>
      <FlechaBack direccion={"/foopGames"}/>
    </div>
  )
}

export default Login