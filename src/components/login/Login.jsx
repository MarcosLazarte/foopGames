import React , { useState } from 'react';
import { auth, store } from '../../firebaseconfig';
import { useNavigate } from 'react-router-dom';


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
        <h1>Login</h1>
        <p>Inicia sesion plox</p>
        <form onSubmit={registrarUsuario}>
            <input 
              onChange={(e) => {setEmail(e.target.value)}}
              placeholder='Introduce email'
              type="email" />
            <br />
            <input
              onChange={(e) => {setPass(e.target.value)}}
              placeholder='Introduce contraseña'
              type="password" />
            <br />
            <input
              value='Registrar Usuario'
              type="submit" />
        </form>
        <button style={{color:'red'}} onClick={loginUsuario}>Iniciar Sesion</button>
        {
          msgError != null ?
          (
            <div>
              {msgError}
            </div>
          )
          :
          (
            <span>{}</span>
          )
        }
    </div>
  )
}

export default Login