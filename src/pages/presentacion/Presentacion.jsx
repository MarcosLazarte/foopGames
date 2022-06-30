import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './presentacion.css'

const Presentacion = () => {
  const [slide, setSlide] = useState(0);
  const [direccion, setDireccion] = useState(true);

   const movement1 = () => {
    if(direccion){
      switch(slide){
        case 0:
          return 'imagenesSet_1'
          break;
        case 1:
          return 'animateImg1'
          break;
        case 2:
          return 'imagentest1'
          break;
        case 3:
          return 'animateImg4'
          break;
        case 4:
          setSlide(1);
          return 'animateImg4'
          break;
      }
    } else {
      switch(slide){
        case -1:
          setSlide(2);
          break;
        case 0:
          return 'animateImg1_Der'
          break;
        case 1:
          return 'animateImg1'
          break;
        case 2:
          return 'animateImg3_Der'
          break;
        case 3:
          return 'animateImg4'
          break;
        case 4:
          setSlide(1);
          return 'animateImg4'
          break;
      }
    }
   }
   const movement2 = () => {
    if(direccion){
      switch(slide){
        case 0:
          return 'imagenesSet_1'
          break;
        case 1:
          return 'animateImg1'
          break;
        case 2:
          return 'animateImg2'
          break;
        case 3:
          return 'imagenesSet_1'
          break;
        case 4:
          setSlide(1);
          return 'animateImg4'
          break;
      }
    } else {
      switch(slide){
        case -1:
          setSlide(2);
          break;
        case 0:
          return 'animateImg1_Der'
          break;
        case 1:
          return 'animateImg2_Der'
          break;
        case 2:
          return 'imagentest2'
          break;
        case 3:
          return 'imagenesSet_1'
          break;
        case 4:
          setSlide(1);
          return 'animateImg4'
          break;
      }
    }
    
   }
   const movement3 = () => {
    if (direccion){
      switch(slide){
        case 0:
          return 'imagenesSet_1'
          break;
        case 1:
          return 'imagenesSet_1'
          break;
        case 2:
          return 'animateImg2'
          break;
        case 3:
          return 'animateImg3'
          break;
        case 4:
          setSlide(1);
          return 'animateImg4'
          break;
      }
    } else {
      switch(slide){
        case -1:
          setSlide(2);
          break;
        case 0:
          return 'imagenesSet_1'
          break;
        case 1:
          return 'animateImg2_Der'
          break;
        case 2:
          return 'animateImg4_Der'
          break;
        case 3:
          return 'animateImg3'
          break;
        case 4:
          setSlide(1);
          return 'animateImg4'
          break;
      }
    }
   }
   

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
            <div className='setImagenes'>
              <img id='id_imagenesSet_1' className={movement1()} src="https://compass-ssl.xbox.com/assets/af/29/af290be8-5d42-4bb8-a699-cf4dac686837.jpg?n=995201_Gallery_01_1350x759_01.jpg" alt="" />
              <img id='id_imagenesSet-2' className={movement2()} src="https://compass-ssl.xbox.com/assets/8a/e1/8ae174c0-a3e0-428c-8c4d-af83b0e32796.jpg?n=995201_Gallery_02_1350x759_01.jpg" alt="" />   
              <img id='id_imagenesSet-3' className={movement3()} src="https://compass-ssl.xbox.com/assets/e4/ba/e4ba633d-647c-4e8b-a11b-18b15606144b.jpg?n=995201_Gallery_04_1350x759_01.jpg" alt="" />
              <button className='segundaPagina_botonIzq' 
                onClick={ () => {
                  setSlide(slide - 1);
                  setDireccion(false)
                  }}>‹❮</button>
              <button className='segundaPagina_botonDer'
                onClick={ () => {
                  setSlide(slide + 1);
                  setDireccion(true)
                  }}>❯›</button>
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