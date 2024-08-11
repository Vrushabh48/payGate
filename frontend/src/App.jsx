import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import  SendMoney  from './pages/SendMoney'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path="/send" element={<SendMoney />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
