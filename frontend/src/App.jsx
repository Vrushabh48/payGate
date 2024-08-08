import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
