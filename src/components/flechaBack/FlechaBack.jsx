import React from 'react';
import { Link } from 'react-router-dom';

const FlechaBack = (props) => {
  return (
    <nav className='gamePerfil_nav'>
        <Link to={props.direccion}> ❮ </Link>
    </nav>
  )
}

export default FlechaBack