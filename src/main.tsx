import React from 'react'
import NavBar from './App'
import Menu from './Menu.js'
import Combos from './Combos.js'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>

    <NavBar />
    <Routes>
      <Route path='/' element={<> <NavBar/> <Menu/> </>}/>
      <Route path='/Combos' element={<> <NavBar/> <Combos/> </>}/>
    </Routes>

    </Router>
  </React.StrictMode>,
)
