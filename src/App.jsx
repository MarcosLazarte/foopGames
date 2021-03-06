import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Perfil from './components/perfil/Perfil';
import Login from './components/login/Login';
import Inicio from './pages/inicio/Inicio';
import TestApi from './components/testApi/TestApi';
import GamePerfil from './pages/gamePerfil/GamePerfil';
import Presentacion from './pages/presentacion/Presentacion';
import { IndividualDisplayProvider } from './context/individualDisplayContext';

const App = () => {
  const [juegoIndividual, setJuegoIndividual] = useState({});
  return (
    <div>
      <IndividualDisplayProvider value={{juegoIndividual, setJuegoIndividual}}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Presentacion/>}></Route>
            <Route exact path='/foopGames' element={<Presentacion/>}></Route>
            <Route exact path='/marcoslazarte.github.io/foopGames' element={<Presentacion/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route exact path='/marcoslazarte.github.io/inicio' element={<Inicio/>}></Route>
            <Route path='/perfil' element={<Perfil/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/test' element={<TestApi/>}></Route>
            <Route path='/games/:games' element={<GamePerfil/>}></Route>
            <Route exact path='/marcoslazarte.github.io/games/:games' element={<GamePerfil/>}></Route>
          </Routes>
        </Router>
      </IndividualDisplayProvider>
    </div>
  )
}

export default App;