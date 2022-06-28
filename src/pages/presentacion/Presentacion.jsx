import React from 'react'
import { Link } from 'react-router-dom'
import './presentacion.css'

const Presentacion = () => {
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
          </div>
        </section>

        <section className='segundaPagina'>
          <h1>Completismo y orden</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequatur mollitia at hic non, ab, recusandae dignissimos enim aliquam nesciunt nihil molestias ex quo veniam quod a autem. Enim, nobis.
          </div>
          <img src="" alt="imagen referencia 2" />
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem similique amet omnis illum nemo fuga itaque dolor? Expedita consequuntur sequi nesciunt accusantium, quaerat et fugit earum. Reiciendis culpa aut aperiam.
          </div>
          <img src="" alt="imagen referencia 2" />
          <h1>Puntua tus juegos favoritos</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed architecto pariatur alias, dolore quasi totam laboriosam repellendus libero culpa quia nulla dolorum officia, impedit explicabo minima vel ipsum recusandae doloribus?
          </div>
          <aside>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci enim aliquid ab velit explicabo placeat soluta, aliquam eum consequatur expedita sapiente facere deleniti, porro laudantium eveniet vitae accusamus ipsum! Voluptates.
          </aside>
          <aside>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iusto consequatur. Vitae libero quam nisi quisquam veniam fuga alias nostrum qui eum laborum, possimus temporibus architecto odit officia? Totam, obcaecati.
          </aside>
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