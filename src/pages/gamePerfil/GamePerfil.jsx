import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GamePerfil = () => {

    const key = 'ac4078b5e6ae4e6ba2a4cf37bc6cf96a';
    const [datos, setDatos] = useState({});
    let { games } = useParams();
    useEffect( () => {
        fetch(`https://api.rawg.io/api/games/${games}?key=${key}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setDatos(data);
        });
      },[])

  return (
    <div>
        <img src={datos.background_image} alt="" />
        <h1>{datos.name}</h1>
    </div>
  )
}

export default GamePerfil