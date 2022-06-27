import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseconfig';
//import './menu.css';

const Menu = () => {
  
  const [usuario, setUsuario] = useState(null);
  const historial = useNavigate()
  useEffect( () => {
    auth.onAuthStateChanged( (user) =>{
      if(user){
        setUsuario(user.email);
        console.log(user.email);
      }
    })
  },[]);

  const cerrarSesion = () => {
    auth.signOut();
    setUsuario(null);
    historial('/');
  }

  return (
    <div>
      <nav>
        <ul>
          <li> <Link to='/'>Inicio</Link> </li>
          <li> <Link to='/test'>Test</Link> </li>
          <li>
            {
              usuario ?
              (
                <Link to='/perfil'>perfil</Link>
              )
              :
              (
                <Link to='/login'>login</Link>
              )
            }
          </li>
        </ul>
        {
          usuario ?
          (
            <button onClick={cerrarSesion}>Cerrar sesion</button>
          )
          :
          (
            <span>{}</span>
          )
        }
      </nav>
    </div>
  )
}

export default Menu;