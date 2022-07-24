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
            <li><a href="https://marcoslazarte.github.io/portafolioA2/">Aky </a></li>
            <li><a href="https://www.linkedin.com/in/lazarte-aky/">linkedin </a></li>
            <li><a href="https://github.com/MarcosLazarte">github</a></li>
        </ul>
      <div className='footer_contecto-abajo'>
        <p>©{anio}</p>
        <p>Agradecimientos</p>
      </div>
    </div>
  )
}

export default Footer