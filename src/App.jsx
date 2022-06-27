import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Perfil from './components/perfil/Perfil';
import Login from './components/login/Login';
import Inicio from './pages/inicio/Inicio';
import TestApi from './components/testApi/TestApi';
import GamePerfil from './pages/gamePerfil/GamePerfil';
import Presentacion from './pages/presentacion/Presentacion';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Presentacion/>}></Route>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/perfil' element={<Perfil/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/test' element={<TestApi/>}></Route>
          <Route path='/games/:games' element={<GamePerfil/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;