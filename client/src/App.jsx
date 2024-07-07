import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';
import {Route} from 'react-router';
import './App.css'

import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import Register from './pages/Auth/Register/Register.jsx'
import Home from './pages/Home/Home.jsx'
import ProtectedRoute from './pages/Auth/ProtectedRoute/ProtectedRoute.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>

        <Route path="/home" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
