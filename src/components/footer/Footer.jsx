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
      <ul className='footer_contacto'>
        <li className='footer_contacto-linksTitulo'>Charlemos!</li>
        <a href="https://marcoslazarte.github.io/portafolioA2/"><li className='footer_contacto-links'>Aky </li></a>
        <a href="https://www.linkedin.com/in/lazarte-aky/"><li className='footer_contacto-links'>linkedin </li></a>
        <a href="https://github.com/MarcosLazarte"><li className='footer_contacto-links'>github</li></a>
      </ul>
      <div className='footer_contacto-abajo'>
        <p className='footer_contacto-abajoIzq'>©{anio}</p>
        <p className='footer_contacto-abajoDer'>Agradecimientos</p>
      </div>
      <div className='footer_bar'></div>
    </div>
  )
}

export default Footer