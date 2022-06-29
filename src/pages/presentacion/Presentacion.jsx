import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './presentacion.css'

const Presentacion = () => {
  const [isSending, setIsSending] = useState(false);

    let id_imagenesSet_1 = document.getElementById('id_imagenesSet_1');
    let id_imagenesSet_2 = document.getElementById('id_imagenesSet_2');
    
    const aky = () => {
      setIsSending(true)
    }
    const doSome = () => {
      id_imagenesSet_1.classList.toggle('animateImg1');
      /*id_imagenesSet_2.classList.toggle('animateImg2');*/
    }
    useEffect( () => {
      if(isSending){
        doSome();
      }
    }, [isSending])

  return (
    <div className='testtt'>
      <nav className='presentacion_nav'>
        <Link to='/login'><button className='nav_botonLogin'>L</button></Link>
        <Link to='/inicio'> <button className='nav_botonInicio'>I</button></Link>
        <Link to='/test'><button className='nav_botonTest'>T</button></Link>
      </nav>
        <section className='primeraPagina'>
          <div>
            <div className='primerPagina_titulo'>
              <div className='primeraPagina_titulo-letras'>
                <h1 className='primeraPagina_titulo-letras1Fila'><span className='primeraPagina_titulo-letraImp'>F</span>oop</h1>
                <h1 className='primeraPagina_titulo-letras2Fila'>fo<span className='primeraPagina_titulo-letraImp'>O</span>p</h1>
                <h1 className='primeraPagina_titulo-letras3Fila'>f<span className='primeraPagina_titulo-letraImp'>O</span>op</h1>
                <h1 className='primeraPagina_titulo-letras4Fila'>foo<span className='primeraPagina_titulo-letraImp'>P</span></h1>
              </div>
              <div className='linea'></div>
              <h1 className='primeraPagina_subTitulo'>games</h1>
            </div>
          </div>
          <div className='cabeza'>
            <div className='cabeza_arriba'></div>
            <div className='cabeza_centro'></div>
            <div className='cuernoDerecho-A'></div>
            <div className='cuernoDerecho-B'></div>
            <div className='cuernoIzquierdo-A'></div>
            <div className='cuernoIzquierdo-B'></div>
              <div className='ojos'>
                <div className='ojo_izq'></div>
                <div className='ojo_sombrasIzq'></div>
                <div className='ojo_der'></div>
                <div className='ojo_sombrasDer'></div>
              </div>
              <div className='segundaPagina_lineaHollow'></div>

          </div>
        </section>

        <section className='segundaPagina'>
          <h1 className='segundaPagina_titulo'>Guarda tus juegos terminados</h1>
          <div className='segundaPagina_setLineas'>
            <div className='segundaPagina_linea'></div>
            <div className='segundaPagina_linea'></div>
            <div className='segundaPagina_linea'></div>
          </div>
          <p className='segundaPagina_parrafo'>
            ¿Empezo la temporada de ofertas y agregaste más juegos al backlog? Bueno, puede resultar un poco complicado tener en cuenta cuál terminaste,
            dejaste o cúal estas 'tryhardeando' por tener todos los logros. En cualquier caso, foopGames es tu herramienta para saber cuál será tu
            próximo movimiento.
          </p>
          <div className='segundaPagina_imagenesSet'>
            <button id='testoBoton' className='segundaPagina_boton' onClick={aky}>‹❮</button>
            <button className='segundaPagina_boton'>❯›</button>
            <div className='setImagenes'>
              <img id='id_imagenesSet_1' className='imagenesSet_1' src="https://compass-ssl.xbox.com/assets/af/29/af290be8-5d42-4bb8-a699-cf4dac686837.jpg?n=995201_Gallery_01_1350x759_01.jpg" alt="" />
              <img id='id_imagenesSet-2' className='imagenesSet_2' src="https://compass-ssl.xbox.com/assets/8a/e1/8ae174c0-a3e0-428c-8c4d-af83b0e32796.jpg?n=995201_Gallery_02_1350x759_01.jpg" alt="" />   
              <img id='id_imagenesSet-3' className='imagenesSet_3' src="https://compass-ssl.xbox.com/assets/e4/ba/e4ba633d-647c-4e8b-a11b-18b15606144b.jpg?n=995201_Gallery_04_1350x759_01.jpg" alt="" />
            </div>
          </div>
          <h2>Caracteristicas</h2>
          <p>
            Inicia sesión y ten acceso a la biblioteca de juegos más grande provista por la RAWG, la base de datos
            más grande
          </p>
        </section>

        <section className='terceraPagina'>
        </section>
        <section>
          <footer>

          </footer>
        </section>
    </div>
  )
}

export default Presentacion