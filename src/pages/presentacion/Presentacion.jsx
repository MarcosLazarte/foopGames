import React from 'react'
import './presentacion.css'

const Presentacion = () => {
  return (
    <div className='testtt'>
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
          </div>
        </section>

        <section className='segundaPagina'>
          <h1>Hola</h1>
          <aside>noticias y publicidad</aside>
          <div>Todo re bien</div>
        </section>

        <section className='terceraPagina'>
          <h1>Seccion 2022</h1>
          <aside>noticias y publicidad</aside>
          <div>
            <div>blue</div>
            <div>red</div>
            <div>green</div>
          </div>
        </section>
        
    </div>
  )
}

export default Presentacion