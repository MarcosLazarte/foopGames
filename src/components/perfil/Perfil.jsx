import React, {useState, useEffect} from 'react';
import { store } from '../../firebaseconfig';

const Perfil = () => {
  const [modoedicion, setModoedicion] = useState(null);
  const [idusuario, setIdusuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [phone, setPhone] = useState('');
  const [agenda, setAgenda] = useState([]);
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('Cargando');

  useEffect( () => {
    const getUsuarios = async () => {
      const { docs } = await store.collection('agenda').get()
      const newArray = docs.map( item => ({id: item.id, ...item.data()}))
      setAgenda(newArray)
    }
    getUsuarios()
    setTimeout(() => setMensaje('No hay usuarios en tu agenda'), 5000)
  }, [])
  
  const setUsuarios = async (e) => {
    e.preventDefault()
    if(!nombre.trim() && !phone.trim()){
      setError('Los campos nombre y telefono estan vacios')
      return
    }else if(!nombre.trim()){
      setError('El campo nombre esta vacio')
      return
    }else if(!phone.trim()){
      setError('El campo telefono esta vacio')
      return
    }
    setError('') //cuando habia un error y luego se enviaba bien los datos, se mostraba un mensaje de error igual
    const usuario = {
      nombre: nombre,
      telefono: phone
    }    
    /* version9
    try{
      const docRef = await addDoc(collection(store, 'agenda'), usuario);
      console.log('Documento escrito con ID: ', docRef.id)
    } catch (e) {
      console.log(e)
    }   
    */
    //version8
    try{
      const data = await store.collection('agenda').add(usuario)
      const { docs } = await store.collection('agenda').get()
      const newArray = docs.map( item => ({id: item.id, ...item.data()}))
      setAgenda(newArray)
      console.log('ID: ', data.id)
      alert("Se agrego correctamente")
    }catch(error){
        console.log(error)
    }
    setNombre('')
    setPhone('')
  }
  const borrarUsuario = async (id) => {
    try{
      await store.collection('agenda').doc(id).delete()
      const { docs } = await store.collection('agenda').get()
      const newArray = docs.map( item => ({id: item.id, ...item.data()}))
      setAgenda(newArray)
    }catch(e){
      console.log('El error fue', e)
    }
  }
  const setUpdate = async (e) => {
    e.preventDefault()
    if(!nombre.trim() && !phone.trim()){
      setError('Los campos nombre y telefono estan vacios')
      return
    }else if(!nombre.trim()){
      setError('El campo nombre esta vacio')
      return
    }else if(!phone.trim()){
      setError('El campo telefono esta vacio')
      return
    }
    setError('') //cuando habia un error y luego se enviaba bien los datos, se mostraba un mensaje de error igual
    const usuarioUpdated = {
      nombre: nombre,
      telefono: phone
    }
    try{
      await store.collection('agenda').doc(idusuario).set(usuarioUpdated)
      alert("Se actualizo correectamente")
      const { docs } = await store.collection('agenda').get()
      const newArray = docs.map( item => ({id: item.id, ...item.data()}))
      setAgenda(newArray)
    }catch(error){
        console.log(error)
    }
    setNombre('')
    setPhone('')
    setIdusuario('')
    setModoedicion(false)
  }
  const actualizarUsuario = async (id) => {
    try{
      const data = await store.collection('agenda').doc(id).get()
      const {nombre, telefono} = data.data()
      setNombre(nombre)
      setPhone(telefono)
      setIdusuario(id)
      setModoedicion(true)
    }catch(e){
      console.log('error: ', e)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Form usuarios</h2>
          <form className="form-group" onSubmit={modoedicion ? setUpdate :setUsuarios}>
            <input
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              className="form-control"
              placeholder="Introduce el nombre"
              type="text"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="form-control mt-3"
              placeholder="Introduce el numero"
              type="text"
            />
            {
              modoedicion ?
              (
                <input
                  type="submit"
                  value="Editar"
                  className="btn btn-dark col-12 mt-3"
                />
              )
              :
              (
                <input
                  type="submit"
                  value="Registrar"
                  className="btn btn-dark col-12 mt-3"
                />
              )
            }
             
          </form>
          {
            error ?
            (
              <div>
                <p>{error}</p>
              </div>
            )
            :
            (
              <span></span>
            )
          }
        </div>
        <div className="col">
          <h2>Lista de contactos</h2>
          <ul className='list-group'>
            {
              agenda.length !== 0 ?
              (
                agenda.map( item => (
                  <li className='list-group-item' key={item.id}>
                    {item.nombre} -- {item.telefono}
                    <button onClick={(id) => {actualizarUsuario(item.id)}} className='btn btn-info float-end ms-3'>Actualizar</button>
                    <button onClick={(id) => {borrarUsuario(item.id)}} className='btn btn-danger float-end'>BORRAR</button>
                  </li>
                  ))
              )
              :
              (
                <span>{mensaje}</span>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Perfil