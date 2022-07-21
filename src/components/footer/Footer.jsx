import React, {useState, useEffect} from 'react'
import './footer.css'

const Footer = () => {
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
          setFecha(new Date());
        }, 1000)
        return () => {
          clearInterval(timer);
        }
      }, []);
      const time = fecha.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
      const anio = fecha.getFullYear();

  return (
    <div className='footer'>
        <div className='footer_trianguloDiv'><div className='footer_triangulo'></div></div>
        <div className='footer_bar'></div>
        <ul className='footer_contacto'>
            <li><link rel="stylesheet" href="" />Aky</li>
            <li><link rel="stylesheet" href="" />linkedin</li>
            <li><link rel="stylesheet" href="" />github</li>
            <p>©{anio}</p>
            <p>Agradecimientos</p>

        </ul>
        <div>
            <p></p>
        </div>
    </div>
  )
}

export default Footer